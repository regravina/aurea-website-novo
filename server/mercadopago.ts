import axios from 'axios';
import { createOrder, getOrderByMercadopagoId, updateOrderStatus, getProductById } from './db';
import { ENV } from './_core/env';
import { sendEbookEmail } from './email';

const MERCADOPAGO_API_URL = 'https://api.mercadopago.com/v1';

export interface MercadopagoPaymentData {
  productId: number;
  customerEmail: string;
  customerName: string;
  quantity: number;
}

export async function createMercadopagoPreference(data: MercadopagoPaymentData) {
  try {
    const product = await getProductById(data.productId);
    
    if (!product) {
      throw new Error('Product not found');
    }

    const preference = {
      items: [
        {
          id: `product_${product.id}`,
          title: product.title,
          description: product.description,
          picture_url: product.image || '',
          category_id: product.type,
          quantity: data.quantity,
          currency_id: 'BRL',
          unit_price: product.price / 100, // Convert from cents to reais
        },
      ],
      payer: {
        email: data.customerEmail,
        name: data.customerName,
      },
      back_urls: {
        success: `${process.env.VITE_FRONTEND_URL || 'https://aureacommkt.com'}/payment-success`,
        failure: `${process.env.VITE_FRONTEND_URL || 'https://aureacommkt.com'}/payment-failure`,
        pending: `${process.env.VITE_FRONTEND_URL || 'https://aureacommkt.com'}/payment-pending`,
      },
      auto_return: 'approved',
      notification_url: `${process.env.VITE_FRONTEND_URL || 'https://aureacommkt.com'}/api/webhooks/mercadopago`,
      external_reference: `product_${product.id}_${Date.now()}`,
    };

    const response = await axios.post(
      `${MERCADOPAGO_API_URL}/checkout/preferences`,
      preference,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      preferenceId: response.data.id,
      initPoint: response.data.init_point,
      productId: product.id,
      amount: product.price,
    };
  } catch (error) {
    console.error('[MercadoPago] Error creating preference:', error);
    throw error;
  }
}

export async function processMercadopagoWebhook(data: any) {
  try {
    const { type, data: webhookData } = data;

    if (type === 'payment') {
      const paymentId = webhookData.id;
      
      // Get payment details from MercadoPago
      const paymentResponse = await axios.get(
        `${MERCADOPAGO_API_URL}/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
          },
        }
      );

      const payment = paymentResponse.data;
      const externalReference = payment.external_reference;

      // Extract product ID from external reference
      const productIdMatch = externalReference?.match(/product_(\d+)/);
      if (!productIdMatch) {
        console.warn('[MercadoPago] Could not extract product ID from external reference');
        return;
      }

      const productId = parseInt(productIdMatch[1], 10);
      const product = await getProductById(productId);

      if (!product) {
        console.warn('[MercadoPago] Product not found:', productId);
        return;
      }

      // Map MercadoPago status to our status
      let orderStatus = 'pending';
      if (payment.status === 'approved') {
        orderStatus = 'approved';
      } else if (payment.status === 'rejected') {
        orderStatus = 'failed';
      } else if (payment.status === 'cancelled') {
        orderStatus = 'failed';
      }

      // Create or update order
      const existingOrder = await getOrderByMercadopagoId(paymentId.toString());
      
      if (existingOrder) {
        await updateOrderStatus(paymentId.toString(), orderStatus);
      } else {
        await createOrder({
          userId: 0, // Anonymous user for now
          productId: productId,
          mercadopagoOrderId: paymentId.toString(),
          amount: product.price,
          status: orderStatus as any,
          paymentMethod: payment.payment_method?.type || 'unknown',
          customerEmail: payment.payer?.email,
          customerName: payment.payer?.first_name,
        });
      }

      // Send e-book by email if payment is approved
      if (orderStatus === 'approved' && payment.payer?.email && product.downloadUrl) {
        try {
          await sendEbookEmail({
            customerEmail: payment.payer.email,
            customerName: payment.payer.first_name || 'Cliente',
            ebookTitle: product.title,
            ebookUrl: product.downloadUrl,
            downloadLink: product.downloadUrl,
          });
          console.log('[MercadoPago] E-book sent successfully to:', payment.payer.email);
        } catch (emailError) {
          console.error('[MercadoPago] Failed to send e-book email:', emailError);
          // Don't throw - payment was successful, email failure shouldn't block it
        }
      }

      console.log('[MercadoPago] Webhook processed successfully:', {
        paymentId,
        status: orderStatus,
        productId,
      });
    }
  } catch (error) {
    console.error('[MercadoPago] Error processing webhook:', error);
    throw error;
  }
}

export async function getMercadopagoPaymentStatus(paymentId: string) {
  try {
    const response = await axios.get(
      `${MERCADOPAGO_API_URL}/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('[MercadoPago] Error getting payment status:', error);
    throw error;
  }
}
