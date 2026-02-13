import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function FAQ() {
  const [, navigate] = useLocation();
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      category: "Cursos",
      question: "Como funciona o acesso aos cursos?",
      answer: "Nossos cursos são 100% ao vivo! Após a compra, você recebe acesso imediato à plataforma e ao grupo de alunos no WhatsApp. As aulas acontecem em dias e horários específicos (terças e quintas-feiras). Você também tem acesso às aulas gravadas para revisar quando quiser."
    },
    {
      id: 2,
      category: "Cursos",
      question: "Qual é a duração dos cursos?",
      answer: "Os cursos variam de 4 a 6 semanas de aulas ao vivo. Cada semana tem 2 aulas (terça e quinta). Após o término, você mantém acesso às gravações por 6 meses para revisar o conteúdo quantas vezes quiser."
    },
    {
      id: 3,
      category: "Cursos",
      question: "Há certificado ao final do curso?",
      answer: "Sim! Ao completar todas as aulas e atividades, você recebe um certificado de conclusão que pode ser compartilhado em seu currículo e redes sociais."
    },
    {
      id: 4,
      category: "Cursos",
      question: "Posso fazer os cursos em qualquer dispositivo?",
      answer: "Sim! As aulas ao vivo funcionam em computadores, tablets e smartphones. Você pode participar de qualquer lugar com internet."
    },
    {
      id: 5,
      category: "Pagamento",
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos PIX (instantâneo), Boleto e Cartão de Crédito. Escolha a forma que melhor se adequa a você."
    },
    {
      id: 6,
      category: "Pagamento",
      question: "Há parcelamento disponível?",
      answer: "Sim, para compras com cartão de crédito oferecemos parcelamento em até 12x sem juros."
    },
    {
      id: 7,
      category: "Pagamento",
      question: "Qual é a política de reembolso?",
      answer: "Se você não ficar satisfeito com o curso nos primeiros 7 dias, oferecemos reembolso total, sem perguntas."
    },
    {
      id: 8,
      category: "E-books",
      question: "Como recebo o e-book após a compra?",
      answer: "O e-book é enviado imediatamente para seu e-mail em formato PDF. Você pode baixá-lo e ler em qualquer dispositivo."
    },
    {
      id: 9,
      category: "E-books",
      question: "Posso compartilhar o e-book com outras pessoas?",
      answer: "Os e-books são para uso pessoal. Compartilhar com terceiros viola os direitos autorais. Recomendamos que cada pessoa compre sua própria cópia."
    },
    {
      id: 10,
      category: "Geral",
      question: "Há suporte ao cliente disponível?",
      answer: "Sim! Você pode entrar em contato conosco via WhatsApp, e-mail ou formulário de contato. Respondemos em até 24 horas."
    },
    {
      id: 11,
      category: "Cursos",
      question: "E se eu perder uma aula ao vivo?",
      answer: "Sem problema! Todas as aulas são gravadas e disponibilizadas na plataforma. Você pode assistir quando tiver tempo, com acesso por 6 meses após o término do curso."
    },
    {
      id: 12,
      category: "Cursos",
      question: "Posso fazer perguntas durante as aulas ao vivo?",
      answer: "Claro! As aulas ao vivo são interativas. Você pode fazer perguntas em tempo real, tirar dúvidas e participar das discussões com outros alunos e com a Regina."
    },
    {
      id: 13,
      category: "Cursos",
      question: "Qual é o horário das aulas ao vivo?",
      answer: "As aulas acontecem todas as terças e quintas-feiras. Os horários específicos serão informados no seu email de confirmação e no grupo do WhatsApp dos alunos."
    },
    {
      id: 14,
      category: "Cursos",
      question: "Como funciona o grupo de alunos no WhatsApp?",
      answer: "O grupo do WhatsApp é um espaço para você se conectar com outros alunos, tirar dúvidas entre aulas, compartilhar experiências e receber lembretes sobre as aulas ao vivo."
    }
  ];

  const categories = ["Todos", "Cursos", "Pagamento", "E-books", "Geral"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredFaqs = selectedCategory === "Todos" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-800 transition"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Voltar</span>
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">FAQ</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos cursos ao vivo, e-books e formas de pagamento.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-amber-600 transition"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-amber-600 transition-transform ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Entre em contato conosco via WhatsApp e nossa equipe terá prazer em ajudar.
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/5548988274343?text=Olá%20AUREA%20COMMKT%2C%20tenho%20uma%20dúvida', '_blank')}
            className="text-white px-8 py-3"
            style={{ backgroundColor: "#D4AF37" }}
          >
            Fale Conosco via WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
