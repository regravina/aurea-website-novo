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
                alt="Regina Gravina" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bem-vindo à AUREA COMMKT
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Sou uma professora apaixonada por linguística, comunicação e marketing. Com mais de 10 anos de experiência na área, dedico-me a transformar a forma como as pessoas se comunicam e vendem seus produtos e serviços.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Minha missão é unir a teoria linguística de ponta com a prática do marketing digital para entregar soluções que realmente funcionam. Acredito que a comunicação clara e persuasiva é a chave para o crescimento de qualquer negócio.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Através dos meus cursos e e-books, compartilho técnicas comprovadas e estratégias práticas que já ajudaram centenas de profissionais a melhorar sua comunicação e impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credenciais */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Credenciais e Experiência
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Credencial 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">📚</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Formação Acadêmica</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Licenciatura em Letras</li>
                <li>• Especialização em Linguística Aplicada</li>
                <li>• Certificação em Marketing Digital</li>
              </ul>
            </div>

            {/* Credencial 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">👥</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Experiência Docente</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• 10+ anos ensinando linguística</li>
                <li>• 500+ alunos formados</li>
                <li>• Cursos técnicos e complementares</li>
              </ul>
            </div>

            {/* Credencial 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">🏆</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Reconhecimento</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Prêmio de Excelência em Ensino</li>
                <li>• Consultora de Comunicação</li>
                <li>• Palestrante em eventos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Minha Filosofia
          </h3>
          <div className="max-w-3xl mx-auto bg-amber-50 p-8 md:p-12 rounded-2xl border border-amber-200">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Acredito que <strong>todo mundo pode ser um comunicador excelente</strong>. A chave está em entender os princípios da linguagem, praticar com propósito e receber feedback de quem sabe.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Meus cursos não são apenas teóricos - eles são <strong>práticos, aplicáveis e focados em resultados reais</strong>. Você aprenderá técnicas que funcionam no mundo real, não apenas na sala de aula.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Meu compromisso é ser sua parceira nessa jornada de transformação. Estou aqui para te ajudar a comunicar com clareza, persuadir com ética e crescer através da excelência em comunicação.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pronto para Começar?
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Explore nossos cursos e e-books e comece sua jornada de transformação em comunicação.
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
