import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Sobre() {
  const [, navigate] = useLocation();

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
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Sobre</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Foto */}
            <div className="flex justify-center">
              <img 
                src="/regina.jpg" 
                alt="Re Gravina" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bem-vindo à AUREA COMMKT
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Sou uma professora apaixonada por comunicação, oratória, linguística e marketing. Com 15 anos de experiência na área, dedico-me a transformar a forma como as pessoas se comunicam, apresentam-se e vendem seus produtos e serviços.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Minha missão é unir a teoria linguística de ponta com a prática do marketing digital para entregar soluções que realmente funcionam. Acredito que a comunicação clara, persuasiva e estratégica é a chave para o crescimento profissional e empresarial.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Através dos meus cursos e e-books, compartilho técnicas comprovadas e estratégias práticas que já ajudaram centenas de profissionais a melhorar sua comunicação, impacto e resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credenciais */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Formação Acadêmica e Experiência
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Credencial 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">🎓</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Graduações</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Comunicação Social</strong> e <strong>História</strong> pela PUCRS. <strong>Licenciatura em História</strong> pela UFSC. Formação multidisciplinar que combina comunicação estratégica com análise crítica e contextual.
              </p>
            </div>

            {/* Credencial 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">📚</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Pós-Graduações</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>MBA em Marketing, Growth e Branding</strong> pela PUCRS. <strong>Pós-graduação em Retórica e Oratória para Língua Portuguesa</strong> pela UNYLEYA. <strong>Pós-graduação em Ensino Técnico</strong>. Expertise em comunicação profissional de alto nível.
              </p>
            </div>

            {/* Credencial 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">⭐</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Experiência Prática</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                15 anos de experiência em comunicação profissional, marketing digital e educação. Especialista em oratória, retórica, comunicação visual e estratégia de conteúdo. Professora, consultora e criadora de conteúdo virtual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Áreas de Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Comunicação e Linguagem</h4>
              <p className="text-gray-700 leading-relaxed">
                Oratória avançada, retórica, comunicação profissional, português para concursos, comunicação visual, redação persuasiva e estratégia de conteúdo.
              </p>
            </div>
            <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Marketing e Negócios</h4>
              <p className="text-gray-700 leading-relaxed">
                Marketing digital, growth marketing, branding, estratégia de comunicação empresarial, análise de dados e gestão de marca.
              </p>
            </div>
            <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Educação e Ensino</h4>
              <p className="text-gray-700 leading-relaxed">
                Metodologia de ensino técnico, pedagogia aplicada, desenvolvimento de conteúdo educacional, treinamento profissional e capacitação corporativa.
              </p>
            </div>
            <div className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Criação de Conteúdo</h4>
              <p className="text-gray-700 leading-relaxed">
                Produção de conteúdo virtual, design de comunicação visual, desenvolvimento de cursos online, criação de e-books e materiais didáticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-12 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Minha Filosofia
          </h3>
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-amber-200">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Acredito que <strong>todo mundo pode ser um comunicador excelente</strong>. A chave está em entender os princípios da linguagem, da retórica e da persuasão, praticar com propósito e receber feedback de quem sabe.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Meus cursos não são apenas teóricos — eles são <strong>práticos, aplicáveis e focados em resultados reais</strong>. Você aprenderá técnicas que funcionam no mundo real, não apenas na sala de aula. Cada aula é uma oportunidade de transformação.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Meu compromisso é ser sua parceira nessa jornada de transformação. Estou aqui para te ajudar a comunicar com clareza, persuadir com ética, apresentar com confiança e crescer através da excelência em comunicação.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pronto para Começar?
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Explore nossos cursos e e-books e comece sua jornada de transformação em comunicação, oratória e marketing.
          </p>
          <Button 
            onClick={() => navigate('/produtos')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
          >
            Ver Cursos e E-books
          </Button>
        </div>
      </section>
    </div>
  );
}
