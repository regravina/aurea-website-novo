import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useLocation } from "wouter";

export default function Ebook() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
            style={{ color: "#D4AF37" }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <div className="text-lg md:text-2xl font-bold" style={{ color: "#D4AF37" }}>
            AUREA
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="/ebook-oratoria.png"
                alt="Retórica e Oratória: a arte de cativar pessoas"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Retórica e Oratória: a arte de cativar pessoas
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aprenda as técnicas de retórica e oratória para cativar, persuadir e impactar seu público com eloquência e confiança.
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold mb-2" style={{ color: "#D4AF37" }}>
                  R$ 15,00
                </div>
                <p className="text-gray-600">Disponível no Google Play</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/books/details/Regina_Gravina_Retórica_e_Oratória_a_arte_de_cativ?id=BdCuEQAAQBAJ&hl=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className="w-full hover:bg-amber-700 text-white py-3 rounded-lg transition text-base flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#D4AF37" }}
                  >
                    <Download className="w-5 h-5" />
                    💳 Comprar com MercadoPago
                  </Button>
                </a>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>ℹ️ Nota:</strong> Você será redirecionado para o Google Play onde poderá escolher entre várias opções de pagamento, incluindo MercadoPago, PIX, Boleto e Cartão de Crédito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            O que você vai aprender
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Técnicas de Oratória</h3>
              <p className="text-gray-700">
                Domine as técnicas essenciais para falar em público com confiança e impacto.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Arte da Persuasão</h3>
              <p className="text-gray-700">
                Aprenda a persuadir e influenciar seu público através de argumentos poderosos.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Impacto e Eloquência</h3>
              <p className="text-gray-700">
                Desenvolva sua capacidade de impactar e cativar qualquer audiência com eloquência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-books Em Breve Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Outros E-books em Breve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition relative">
              <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold z-10">EM BREVE</div>
              <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-4xl font-bold">📚</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Comunicação Persuasiva</h4>
                <p className="text-gray-700 text-sm mb-4">Descubra os segredos da comunicação que influencia decisões. Técnicas práticas e estratégias comprovadas.</p>
                <Button disabled className="w-full bg-gray-400 text-white cursor-not-allowed">
                  Em Breve
                </Button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition relative">
              <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold z-10">EM BREVE</div>
              <div className="w-full h-64 bg-gradient-to-br from-green-200 to-green-100 flex items-center justify-center">
                <span className="text-green-600 text-4xl font-bold">📊</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Estratégia de Conteúdo</h4>
                <p className="text-gray-700 text-sm mb-4">Planeje e execute uma estratégia de conteúdo que atrai, engaja e converte seu público-alvo.</p>
                <Button disabled className="w-full bg-gray-400 text-white cursor-not-allowed">
                  Em Breve
                </Button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition relative">
              <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold z-10">EM BREVE</div>
              <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-4xl font-bold">✨</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Branding Linguístico</h4>
                <p className="text-gray-700 text-sm mb-4">Use a linguagem como ferramenta estratégica para construir uma marca memorável e diferenciada.</p>
                <Button disabled className="w-full bg-gray-400 text-white cursor-not-allowed">
                  Em Breve
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Pronto para transformar sua comunicação?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Adquira agora o e-book "Retórica e Oratória" e comece sua jornada para se tornar um orador impactante.
          </p>
          <a
            href="https://play.google.com/store/books/details/Regina_Gravina_Retórica_e_Oratória_a_arte_de_cativ?id=BdCuEQAAQBAJ&hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              className="hover:bg-amber-700 text-white py-3 px-8 rounded-lg transition text-base flex items-center gap-2"
              style={{ backgroundColor: "#D4AF37" }}
            >
              <Download className="w-5 h-5" />
              Comprar Agora
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ color: "#D4AF37" }}>
                AUREA
              </h3>
              <p className="text-gray-400 text-sm">
                Transforme sua experiência em resultados através da linguística, comunicação e marketing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>
                Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => navigate("/")} className="hover:text-white transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/sobre")} className="hover:text-white transition">
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/contato")} className="hover:text-white transition">
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>
                Suporte
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>
                Contato
              </h4>
              <p className="text-sm text-gray-400">
                <a href="https://wa.me/5548988274343" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  WhatsApp: +55 48 98827-4343
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
              <p>&copy; 2025 AUREA COMMKT. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="transition" style={{ color: "#D4AF37" }}>
                  Política de Privacidade
                </a>
                <a href="#" className="transition" style={{ color: "#D4AF37" }}>
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
