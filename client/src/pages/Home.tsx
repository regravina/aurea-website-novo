import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowRight, Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import Testimonials from "@/components/Testimonials";
import { trpc } from "@/lib/trpc";
import { CheckoutModal } from "@/components/CheckoutModal";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState<{ isOpen: boolean; product: any }>({ isOpen: false, product: null });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5548988274343?text=Olá%20AUREA%20COMMKT%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20cursos%20e%20serviços.', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve.');
  };

  const handleBuyEbook = (ebook: any) => {
    setCheckoutModal({
      isOpen: true,
      product: {
        id: ebook.id,
        title: ebook.title,
        price: ebook.price,
        description: ebook.description,
      },
    });
  };

  const cursos = [
    {
      id: 1,
      title: "Oratória e Apresentações",
      description: "Domine a arte de falar em público. Desenvolva confiança e impacto em suas apresentações.",
      image: "/curso-oratoria-v2.png",
      duration: "5 semanas"
    },
    {
      id: 2,
      title: "Linguística Aplicada ao Marketing - Parte 01",
      description: "Fundamentos da escrita. Aprenda as bases da linguagem, gramática aplicada e técnicas de redação clara e persuasiva.",
      image: "/curso-linguistica-parte1-v2.png",
      duration: "4 semanas"
    },
    {
      id: 3,
      title: "Linguística Aplicada ao Marketing - Parte 02",
      description: "Produção de textos de marketing e vendas. Crie conteúdo que converte e gera resultados reais para seu negócio.",
      image: "/curso-linguistica-parte2-v2.png",
      duration: "6 semanas"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Marina Silva",
      role: "Empreendedora Digital",
      content: "O curso de Oratoria transformou minha forma de apresentar meus produtos. Agora consigo capturar a atencao da audiencia desde o primeiro segundo!",
      rating: 5,
      image: "/avatar-1.jpg"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Gerente de Marketing",
      content: "A Parte 02 de Linguistica Aplicada ao Marketing me ensinou tecnicas de copywriting que aumentaram minhas conversoes em 40%. Excelente conteudo!",
      rating: 5,
      image: "/avatar-2.jpg"
    },
    {
      id: 3,
      name: "Juliana Costa",
      role: "Consultora de Comunicacao",
      content: "Os e-books sobre Branding Linguistico e Estrategia de Conteudo sao referencia na minha consultoria. Recomendo para todos os meus clientes!",
      rating: 5,
      image: "/avatar-3.jpg"
    }
  ];

  const ebooks = [
    {
      id: 0,
      title: "Oratória: A Arte de Falar em Público",
      description: "Domine a arte de falar em público com confiança e impacto. Um guia completo para apresentações memoráveis.",
      image: "/ebook-oratoria.png",
      price: null,
      status: "Disponível"
    },
    {
      id: 1,
      title: "Comunicação Persuasiva",
      description: "Descubra os segredos da comunicação que influencia decisões. Técnicas práticas e estratégias comprovadas.",
      image: "/ebook-comunicacao-persuasiva-v2.png",
      price: null,
      status: "Em Breve"
    },
    {
      id: 2,
      title: "Estratégia de Conteúdo",
      description: "Planeje e execute uma estratégia de conteúdo que atrai, engaja e converte seu público-alvo.",
      image: "/ebook-estrategia-conteudo-v2.png",
      price: null,
      status: "Em Breve"
    },
    {
      id: 3,
      title: "Branding Linguístico",
      description: "Use a linguagem como ferramenta estratégica para construir uma marca memorável e diferenciada.",
      image: "/ebook-branding-linguistico-v2.png",
      price: null,
      status: "Em Breve"
    },
    {
      id: 4,
      title: "Retórica e Oratória: a arte de cativar pessoas",
      description: "Aprenda as técnicas de retórica e oratória para cativar, persuadir e impactar seu público com eloquência e confiança.",
      image: "/ebook-retorica-oratoria.png",
      price: "R$ 15,00",
      status: "Disponível",
      link: "https://play.google.com/books/publish/u/0/a/12529235853107641193#book/ISBN:9786501889412/review"
    },

  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-aurea.jpg" alt="AUREA Logo" className="h-8 md:h-10 w-auto rounded-lg" />
            <div className="text-lg md:text-2xl font-bold " style={{ color: "#D4AF37" }}>AUREA</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>Home</button>
            <button onClick={() => scrollToSection('cursos')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>Cursos</button>
            <button onClick={() => scrollToSection('ebooks')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>E-books</button>
            <button onClick={() => navigate('/produtos')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>Produtos</button>
            <button onClick={() => navigate('/blog')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>Blog</button>
            <button onClick={() => navigate('/sobre')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>Sobre</button>
            <button onClick={() => navigate('/faq')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>FAQ</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover: transition font-medium" style={{ color: "#D4AF37" }}>Contato</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>Home</button>
              <button onClick={() => scrollToSection('cursos')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>Cursos</button>
              <button onClick={() => scrollToSection('ebooks')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>E-books</button>
              <button onClick={() => navigate('/produtos')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>Produtos</button>
              <button onClick={() => navigate('/blog')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>Blog</button>
              <button onClick={() => navigate('/sobre')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>Sobre</button>
              <button onClick={() => navigate('/faq')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>FAQ</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover: transition font-medium text-left" style={{ color: "#D4AF37" }}>Contato</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Banner */}
      <section id="home" className="relative text-white py-12 md:py-24 overflow-hidden min-h-screen flex items-center" style={{
        backgroundImage: 'url(/banner-aurea.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in">
              AUREA COMUNICAÇÃO E MARKETING
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 md:mb-8 leading-relaxed animate-slide-up animation-delay-1000">
              Transforme sua experiência em resultados: Linguística, Comunicação e Marketing com a excelência de quem ensina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-2000">
              <Button 
                className="text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg rounded-lg transition"
                style={{ backgroundColor: '#D4AF37' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C99E2E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D4AF37'}
                onClick={() => scrollToSection('cursos')}
              >
                Descubra Nossos Cursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg rounded-lg transition border border-white"
                onClick={handleWhatsApp}
              >
                Fale Conosco via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibilidade Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            Por Que a AUREA é o Seu Próximo Passo?
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            Para o pequeno e médio empresário e o profissional liberal, a comunicação é a chave para o crescimento. Na AUREA COMMKT, unimos a teoria linguística de ponta com a prática do marketing digital para entregar soluções que realmente funcionam.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Diferencial 1 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition" style={{ borderColor: '#D4AF37' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Experiência Comprovada</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Mais de 10 anos de atuação e formação de profissionais na área de linguística, comunicação e marketing.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition" style={{ borderColor: '#D4AF37' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Excelência Pedagógica</h3>
              <p className="text-gray-700 text-sm md:text-base">
                A qualidade e competência de quem não apenas faz, mas também ministra cursos técnicos e complementares.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition" style={{ borderColor: '#D4AF37' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Resultados Tangíveis</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Foco em estratégias de comunicação e marketing que geram crescimento real para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            Cursos Especializados
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
            Escolha entre nossos cursos especializados e invista no seu conhecimento.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {cursos.map((curso, idx) => (
              <div key={curso.id} className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition overflow-hidden animate-slide-up" style={{ borderColor: "#D4AF37", animationDelay: `${idx * 0.15}s` }}>
                {/* Course Image */}
                <div className="h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={curso.image} 
                    alt={curso.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{curso.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{curso.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-600 font-medium">{curso.duration}</span>
                  </div>
                  <Button 
                    className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm" style={{ backgroundColor: "#D4AF37" }}
                    onClick={handleWhatsApp}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* E-books Section */}
      <section id="ebooks" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            E-books Exclusivos
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
            Aprofunde seus conhecimentos com nossos e-books especializados em comunicação e marketing.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {ebooks.map((ebook, idx) => (
              <div key={ebook.id} className="bg-gray-50 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition overflow-hidden animate-slide-up relative" style={{ borderColor: "#D4AF37", animationDelay: `${idx * 0.15}s` }}>
                {/* Status Badge */}
                {ebook.status === "Em Breve" && (
                  <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    EM BREVE
                  </div>
                )}
                
                {/* E-book Cover Image */}
                <div className="h-64 md:h-72 overflow-hidden bg-gray-200">
                  <img 
                    src={ebook.image} 
                    alt={ebook.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                
                {/* E-book Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{ebook.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{ebook.description}</p>
                  {ebook.price && (
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold " style={{ color: "#D4AF37" }}>{ebook.price}</span>
                    </div>
                  )}
                  {ebook.status === "Em Breve" ? (
                    <Button 
                      className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm flex items-center justify-center gap-2" 
                      style={{ backgroundColor: "#D4AF37" }}
                      disabled={true}
                    >
                      <Download className="w-4 h-4" />
                      Em Breve
                    </Button>
                  ) : ebook.link ? (
                    <a href={ebook.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button 
                        className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm flex items-center justify-center gap-2" 
                        style={{ backgroundColor: "#D4AF37" }}
                      >
                        <Download className="w-4 h-4" />
                        Comprar no Google Play
                      </Button>
                    </a>
                  ) : ebook.price ? (
                    <Button 
                      className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm flex items-center justify-center gap-2" 
                      style={{ backgroundColor: "#D4AF37" }}
                      onClick={() => handleBuyEbook(ebook)}
                    >
                      <Download className="w-4 h-4" />
                      Comprar Agora
                    </Button>
                  ) : (
                    <Button 
                      className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm flex items-center justify-center gap-2" 
                      style={{ backgroundColor: "#D4AF37" }}
                      onClick={handleWhatsApp}
                    >
                      <Download className="w-4 h-4" />
                      Adquirir E-book
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            Serviços de Consultoria e Marketing
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
            Sua comunicação e marketing nas mãos de especialistas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover: hover:shadow-lg transition" style={{ borderColor: "#D4AF37" }}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Consultoria de Marketing Digital</h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                Estratégia completa para presença online. Análise de mercado, posicionamento de marca e plano de ação.
              </p>
              <Button 
                className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm" style={{ backgroundColor: "#D4AF37" }}
                onClick={handleWhatsApp}
              >
                Solicitar Orçamento
              </Button>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover: hover:shadow-lg transition" style={{ borderColor: "#D4AF37" }}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Criação de Conteúdo (SEO)</h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                Textos otimizados que educam e vendem. Blog posts, landing pages e conteúdo para redes sociais.
              </p>
              <Button 
                className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm" style={{ backgroundColor: "#D4AF37" }}
                onClick={handleWhatsApp}
              >
                Solicitar Orçamento
              </Button>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover: hover:shadow-lg transition" style={{ borderColor: "#D4AF37" }}>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Revisão e Edição Profissional</h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                Garanta a excelência linguística em todos os seus materiais. Revisão completa e edição criativa.
              </p>
              <Button 
                className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm" style={{ backgroundColor: "#D4AF37" }}
                onClick={handleWhatsApp}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            Entre em Contato
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            Pronto para elevar sua comunicação ao nível AUREA? Fale conosco agora!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Formulário */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Formulário de Contato</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:" style={{ borderColor: "#D4AF37" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:" style={{ borderColor: "#D4AF37" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:" style={{ borderColor: "#D4AF37" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:" style={{ borderColor: "#D4AF37" }}></textarea>
                </div>
                <Button className="w-full  hover:bg-amber-700 text-white py-2 rounded-lg transition" style={{ backgroundColor: "#D4AF37" }}>
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6  flex-shrink-0 mt-1" style={{ color: "#D4AF37" }} />
                  <div>
                    <h4 className="font-bold text-gray-900">E-mail</h4>
                    <p className="text-gray-700">aureacommkt@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6  flex-shrink-0 mt-1" style={{ color: "#D4AF37" }} />
                  <div>
                    <h4 className="font-bold text-gray-900">WhatsApp</h4>
                    <button onClick={handleWhatsApp} className="text-amber-600 hover: transition" style={{ color: "#D4AF37" }}>(48) 98827-4343</button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6  flex-shrink-0 mt-1" style={{ color: "#D4AF37" }} />
                  <div>
                    <h4 className="font-bold text-gray-900">Localização</h4>
                    <p className="text-gray-700">Florianópolis, SC</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">Redes Sociais</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover: transition" style={{ color: "#D4AF37" }}>
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover: transition" style={{ color: "#D4AF37" }}>
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover: transition" style={{ color: "#D4AF37" }}>
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-12 md:py-20 text-white" style={{ background: "linear-gradient(135deg, #1B7A8A, #2A9BA8)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Pronto para Transformar Sua Comunicação?
          </h2>
          <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Não perca mais tempo com estratégias que não funcionam. Fale com quem entende de linguagem e mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className=" hover:bg-amber-700 text-white px-6 md:px-10 py-2 md:py-4 text-base md:text-lg rounded-lg transition" style={{ backgroundColor: "#D4AF37" }}
              onClick={() => scrollToSection('contato')}
            >
              Fale Conosco
            </Button>
            <Button 
              className="bg-white/20 hover:bg-white/30 text-white px-6 md:px-10 py-2 md:py-4 text-base md:text-lg rounded-lg transition border border-white"
              onClick={handleWhatsApp}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

       {/* Newsletter Section */}
      <section className="py-12 md:py-20" style={{ background: "linear-gradient(135deg, #C9A961, #D4AF37)" }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Receba Dicas Exclusivas
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Inscreva-se na nossa newsletter e receba conteudo exclusivo sobre linguistica, comunicacao e marketing.
          </p>
          <form className="max-w-md mx-auto flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Obrigado por se inscrever!'); }}>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
            <Button className="font-bold text-white" style={{ backgroundColor: '#D4AF37' }}>
              Inscrever
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">AUREA COMMKT</h3>
              <p className="text-sm">
                Excelência em linguística, comunicação e marketing para o seu negócio crescer.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="transition" style={{ color: '#D4AF37' }}>Home</button></li>
                <li><button onClick={() => scrollToSection('cursos')} className="transition" style={{ color: '#D4AF37' }}>Cursos</button></li>
                <li><button onClick={() => scrollToSection('ebooks')} className="transition" style={{ color: '#D4AF37' }}>E-books</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="transition" style={{ color: '#D4AF37' }}>Serviços</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="transition" style={{ color: '#D4AF37' }}>Contato</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                  <span>aureacommkt@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                  <span>(48) 98827-4343</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                  <span>Florianópolis, SC</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 transition" style={{ color: '#D4AF37' }}>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 transition" style={{ color: '#D4AF37' }}>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 transition" style={{ color: '#D4AF37' }}>
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
              <p>&copy; 2025 AUREA COMMKT. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="transition" style={{ color: '#D4AF37' }}>Política de Privacidade</a>
                <a href="#" className="transition" style={{ color: '#D4AF37' }}>Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
