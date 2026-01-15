import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Loader2, Download, Eye, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { getLoginUrl } from "@/const";

export default function MyOrders() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, navigate] = useLocation();

  // Buscar pedidos do usuário
  const { data: orders = [], isLoading } = trpc.orders.getUserOrders.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  // Redirecionar se não autenticado
  if (!loading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Faça Login para Acessar
          </h2>
          <p className="text-gray-600 mb-6">
            Você precisa estar autenticado para visualizar seus pedidos e baixar seus e-books.
          </p>
          <Button
            onClick={() => (window.location.href = getLoginUrl())}
            className="w-full text-white py-3 rounded-lg transition"
            style={{ backgroundColor: "#D4AF37" }}
          >
            Fazer Login
          </Button>
        </div>
      </div>
    );
  }

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando seus pedidos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Meus Pedidos</h1>
            <p className="text-sm text-gray-600 mt-1">
              Bem-vindo, {user?.name || "Cliente"}
            </p>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="mb-4">
              <ShoppingBagIcon className="w-16 h-16 text-gray-300 mx-auto" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Nenhum Pedido Encontrado
            </h2>
            <p className="text-gray-600 mb-6">
              Você ainda não realizou nenhuma compra. Visite nossa loja e adquira seus e-books!
            </p>
            <Button
              onClick={() => navigate("/")}
              className="text-white py-2 px-6 rounded-lg transition"
              style={{ backgroundColor: "#D4AF37" }}
            >
              Explorar E-books
            </Button>
          </div>
        ) : (
          <div className="grid gap-6">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface OrderCardProps {
  order: any;
}

function OrderCard({ order }: OrderCardProps) {
  const statusColors: Record<string, { bg: string; text: string; label: string }> = {
    approved: {
      bg: "bg-green-100",
      text: "text-green-800",
      label: "Aprovado",
    },
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      label: "Pendente",
    },
    failed: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Falha",
    },
  };

  const status = statusColors[order.status] || statusColors.pending;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Pedido #{order.id}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {new Date(order.createdAt).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>
            {status.label}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
          <div>
            <p className="text-xs text-gray-600 uppercase font-medium">Valor</p>
            <p className="text-lg font-bold text-gray-900 mt-1">
              R$ {(order.amount / 100).toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase font-medium">Método</p>
            <p className="text-lg font-bold text-gray-900 mt-1 capitalize">
              {order.paymentMethod || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase font-medium">Produto</p>
            <p className="text-lg font-bold text-gray-900 mt-1">
              {order.productName || "E-book"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase font-medium">ID MercadoPago</p>
            <p className="text-sm font-mono text-gray-600 mt-1">
              {order.mercadopagoOrderId?.substring(0, 8)}...
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {order.status === "approved" ? (
            <>
              <Button
                className="flex items-center gap-2 text-white py-2 px-4 rounded-lg transition flex-1"
                style={{ backgroundColor: "#D4AF37" }}
              >
                <Download className="w-4 h-4" />
                Baixar E-book
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 py-2 px-4 rounded-lg transition"
              >
                <Eye className="w-4 h-4" />
                Detalhes
              </Button>
            </>
          ) : order.status === "pending" ? (
            <div className="flex-1 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <p className="text-sm text-yellow-800">
                Seu pagamento está sendo processado. Você receberá um e-mail de confirmação em breve.
              </p>
            </div>
          ) : (
            <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-sm text-red-800">
                Seu pagamento não foi aprovado. Entre em contato conosco para mais informações.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Simple shopping bag icon
function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}
