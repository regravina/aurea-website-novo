import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowRight, Menu, X, Twitter } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const cursos = [
    {
      id: 1,
      title: "Português para Concursos",
      description: "Domine a Língua Portuguesa com foco em concursos públicos. Aprenda gramática, interpretação de textos e redação com técnicas comprovadas.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/AvnZmyNrFlhmFzrS.jpg",
      duration: "6 meses",
      price: "R$ 80,00",
      link: "https://go.hotmart.com/I104320902G?dp=1",
      status: "Disponível"
    },
    {
      id: 2,
      title: "Comunicação Básica",
      description: "Fundamentos essenciais de comunicação. Aprenda técnicas de comunicação clara, persuasiva e eficaz para qualquer contexto.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/OFZoOIzVaqnZzPsk.jpg",
      duration: "6 meses",
      price: "R$ 30,00",
      link: "https://go.hotmart.com/D104320944X?dp=1",
      status: "Disponível"
    },
    {
      id: 3,
      title: "Oratória e Apresentações",
      description: "Domine a arte de falar em público. Desenvolva confiança e impacto em suas apresentações.",
      image: "/curso-oratoria.jpg",
      duration: "5 semanas",
      price: "Em breve",
      link: null,
      status: "Em Breve"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-aurea.jpg" alt="AUREA Logo" className="h-8 md:h-10 w-auto rounded-lg" />
            <div className="text-lg md:text-2xl font-bold" style={{ color: "#D4AF37" }}>AUREA</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>Home</button>
            <button onClick={() => scrollToSection('cursos')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>Cursos</button>
            <button onClick={() => navigate('/ebook')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>E-books</button>
            <button onClick={() => navigate('/produtos')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>Produtos</button>
            <button onClick={() => navigate('/blog')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>Blog</button>
            <button onClick={() => navigate('/sobre')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>Sobre</button>
            <button onClick={() => navigate('/faq')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>FAQ</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-gray-900 transition font-medium" style={{ color: "#D4AF37" }}>Contato</button>
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
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>Home</button>
              <button onClick={() => scrollToSection('cursos')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>Cursos</button>
              <button onClick={() => navigate('/ebook')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>E-books</button>
              <button onClick={() => navigate('/produtos')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>Produtos</button>
              <button onClick={() => navigate('/blog')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>Blog</button>
              <button onClick={() => navigate('/sobre')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>Sobre</button>
              <button onClick={() => navigate('/faq')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>FAQ</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left" style={{ color: "#D4AF37" }}>Contato</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative text-white py-12 md:py-24 overflow-hidden min-h-screen flex items-center" style={{
        backgroundImage: 'url(/banner-aurea.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              AUREA COMUNICAÇÃO E MARKETING
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 md:mb-8 leading-relaxed">
              Transforme sua experiência em resultados: Linguística, Comunicação e Marketing com a excelência de quem ensina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition" style={{ borderColor: '#D4AF37' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Experiência Comprovada</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Mais de 10 anos de atuação e formação de profissionais na área de linguística, comunicação e marketing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition" style={{ borderColor: '#D4AF37' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#D4AF37' }}>
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Excelência Pedagógica</h3>
              <p className="text-gray-700 text-sm md:text-base">
                A qualidade e competência de quem não apenas faz, mas também ministra cursos técnicos e complementares.
              </p>
            </div>

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
              <div key={curso.id} className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition overflow-hidden" style={{ borderColor: "#D4AF37" }}>
                <div className="h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={curso.image} 
                    alt={curso.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                
                <div className="p-6 relative">
                  {curso.status === "Em Breve" && (
                    <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">EM BREVE</div>
                  )}
                  {curso.status === "Disponível" && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">DISPONÍVEL</div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{curso.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{curso.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-600 font-medium">{curso.duration}</span>
                  </div>
                  {curso.status === "Disponível" && (
                    <p className="text-sm font-bold text-amber-700 mb-4">{curso.price}</p>
                  )}
                  <Button 
                    className="w-full hover:bg-amber-700 text-white py-2 rounded-lg transition text-sm" 
                    style={{ backgroundColor: "#D4AF37" }}
                    onClick={() => {
                      if (curso.status === "Disponível" && curso.link) {
                        window.open(curso.link, '_blank');
                      } else if (curso.status === "Em Breve") {
                        handleWhatsApp();
                      }
                    }}
                    disabled={curso.status === "Em Breve"}
                  >
                    {curso.status === "Disponível" ? "Comprar Agora" : "Em Breve"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos Section */}
      <section id="videos" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            Nossos Vídeos
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            Assista aos nossos vídeos sobre comunicação, marketing e desenvolvimento profissional.
          </p>

          {/* YouTube Playlist Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/videoseries?list=UCndo5yUiK8ZQY9rt-wzaDqg"
                  title="AUREA YouTube Playlist"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a href="https://wa.me/5548988274343" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition">
                +55 (48) 98827-4343
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">E-mail</h3>
              <a href="mailto:aureacommkt@gmail.com" className="text-gray-700 hover:text-gray-900 transition">
                aureacommkt@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Localização</h3>
              <p className="text-gray-700">
                Florianópolis, SC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ color: "#D4AF37" }}>AUREA</h3>
              <p className="text-gray-400 text-sm">
                Transforme sua experiência em resultados através da linguística, comunicação e marketing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate("/")} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => navigate("/sobre")} className="hover:text-white transition">Sobre</button></li>
                <li><button onClick={() => navigate("/blog")} className="hover:text-white transition">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>Contato</h4>
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
              <div className="flex gap-6 items-center">
                <a href="https://www.instagram.com/aurea_commkt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" style={{ color: "#D4AF37" }} title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@aurea_commkt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" style={{ color: "#D4AF37" }} title="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.34 0 .67.03 1 .1V9.81a7.81 7.81 0 0 0-1-.1A7.81 7.81 0 0 0 5 21.81a7.81 7.81 0 0 0 7.81-7.81V11a10.25 10.25 0 0 0 6.08 2v-3.66a4.83 4.83 0 0 1-.3-.04z"/>
                  </svg>
                </a>
                <a href="https://www.reddit.com/user/Aurea_ComMkt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" style={{ color: "#D4AF37" }} title="Reddit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5s10.5 4.7 10.5 10.5-4.7 10.5-10.5 10.5zm3.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 9 8.5 9 7 9.67 7 10.5s.67 1.5 1.5 1.5zm3.5 6c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
                  </svg>
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="transition" style={{ color: "#D4AF37" }}>Política de Privacidade</a>
                <a href="#" className="transition" style={{ color: "#D4AF37" }}>Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
