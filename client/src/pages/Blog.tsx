import { useState } from "react";
import { Search, Calendar, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const articleContent = {
  1: "A Era da Decisão marca uma transformação profunda em como as organizações operam. Não se trata apenas de ter dados, mas de transformar informações estruturadas em decisões estratégicas que geram resultados reais.\n\n## O Desafio da Sobrecarga de Informação\n\nVivemos em uma época onde dados são gerados constantemente. Mas ter dados não significa ter conhecimento. O verdadeiro desafio está em filtrar, analisar e extrair insights significativos dessa montanha de informações.\n\nMuitas organizações ainda dependem de \"feeling\" ou intuição para tomar decisões importantes. Isso funciona em pequena escala, mas não é escalável nem sustentável.\n\n## O Caminho para a Democracia Analítica\n\nA democracia analítica significa que TODOS na organização têm acesso a dados e podem tomar decisões baseadas em evidências, não apenas os executivos.\n\nIsso requer:\n- Infraestrutura de dados robusta\n- Ferramentas acessíveis para análise\n- Cultura de questionamento e validação\n- Treinamento em literacia de dados\n\n## Conclusão\n\nA Era da Decisão não é sobre tecnologia. É sobre pessoas, processos e cultura. Quando alinhados, transformam dados em poder real de negócio.",
  
  2: "Português para Concursos não precisa ser complicado. Este guia apresenta as regras essenciais que aparecem em 90% das provas de nível médio.\n\n## Ortografia Essencial\n\n### Uso de S, SS, C e CC\n- Palavras terminadas em -oso: gracioso, generoso\n- Palavras com -ssão: discussão, impressão\n- Palavras com -ação: criação, recepção\n\n### Acentuação\n- Proparoxítonas: SEMPRE levam acento (criatura, vantagem)\n- Paroxítonas: levam acento em casos específicos (ônibus, táxi)\n- Oxítonas: levam acento em terminações específicas (-á, -é, -ó)\n\n## Novo Acordo Ortográfico\n\nO novo acordo de 1990 trouxe mudanças importantes:\n- Eliminação do trema em palavras como \"linguística\"\n- Mudanças em palavras com hífen\n- Simplificação de algumas acentuações\n\n## Dicas Práticas para Provas\n\n1. Leia o texto completo antes de responder\n2. Procure por palavras-chave que indicam a resposta\n3. Elimine opções obviamente erradas\n4. Quando em dúvida, escolha a opção mais formal\n\n## Conclusão\n\nDominando essas regras básicas, você estará preparado para a maioria das questões de Português em concursos públicos.",
  
  3: "A comunicação é uma habilidade fundamental no mundo profissional. Mas muitos não entendem que ela vai muito além de falar bem.\n\n## Os Três Níveis da Comunicação\n\n### 1. Comunicação Verbal\nÉ o que você diz. As palavras, o vocabulário, a clareza da mensagem. Uma mensagem verbal clara e concisa é fundamental.\n\n### 2. Comunicação Vocal\nÉ COMO você diz. Tom de voz, ritmo, entonação, volume. Uma mesma frase pode ter significados completamente diferentes dependendo de como é dita.\n\n### 3. Comunicação Corporal\nÉ o que seu corpo transmite. Postura, gestos, contato visual, expressão facial. Estudos mostram que 55% da comunicação é corporal.\n\n## Os 6 Elementos do Processo Comunicativo\n\n1. Emissor: quem comunica\n2. Mensagem: o conteúdo\n3. Canal: o meio (presencial, vídeo, texto)\n4. Receptor: quem recebe\n5. Feedback: resposta do receptor\n6. Ruído: interferências na comunicação\n\n## Feedback Construtivo\n\nFeedback não é crítica. É um presente que você oferece para ajudar alguém a melhorar.\n\nUm bom feedback:\n- É específico (não genérico)\n- É oportuno (no momento certo)\n- É equilibrado (reconhece pontos fortes e áreas de melhoria)\n- É acionável (oferece caminhos para melhorar)\n\n## Conclusão\n\nDominando esses elementos, você se torna um comunicador eficaz em qualquer contexto.",
  
  4: "A cultura analítica não é um destino, é uma jornada. É a evolução de uma organização que passa de decisões baseadas em intuição para decisões baseadas em dados.\n\n## Do \"Feeling\" para a Evidência\n\nMuitos líderes ainda confiam em seu \"feeling\" ou intuição. É verdade que experiência importa, mas sem dados para validar, as decisões são arriscadas.\n\nA transição para uma cultura analítica requer:\n- Mudança de mentalidade\n- Investimento em tecnologia\n- Desenvolvimento de competências\n- Liderança comprometida\n\n## O Papel da IA & Data Science\n\nInteligência Artificial e Data Science não são buzzwords. São ferramentas reais que:\n- Identificam padrões que humanos não veem\n- Automatizam processos repetitivos\n- Predizem tendências futuras\n- Otimizam recursos\n\n## Democracia Analítica\n\nNão é apenas sobre ter dados. É sobre DEMOCRATIZAR o acesso a dados.\n\nQuando todos na organização entendem dados e podem tomar decisões baseadas em evidências, a organização se torna mais ágil, mais inteligente e mais competitiva.\n\n## Conclusão\n\nA cultura analítica é o diferencial competitivo do século 21. Organizações que não evoluem nesse sentido ficam para trás.",
  
  5: "Oratória e Retórica são disciplinas complementares que, juntas, criam comunicadores verdadeiramente persuasivos.\n\n## Retórica: A Estratégia do Discurso\n\nRetórica é a arte de persuadir através da linguagem. Ela estuda:\n- Como estruturar argumentos\n- Como usar figuras de linguagem\n- Como apelar para emoções e razão\n- Como construir credibilidade\n\n## Oratória: A Performance do Orador\n\nOratória é a arte de falar em público com impacto. Ela trabalha:\n- Respiração e projeção de voz\n- Linguagem corporal\n- Gestão do nervosismo\n- Conexão com a audiência\n\n## Os Três Pilares de Aristóteles\n\n### 1. Ethos (Credibilidade)\nAs pessoas acreditam em quem tem credibilidade. Você precisa demonstrar que sabe do que está falando e que é digno de confiança.\n\n### 2. Pathos (Emoção)\nAs pessoas são movidas por emoções. Uma apresentação que toca o coração é mais memorável que uma cheia de dados.\n\n### 3. Logos (Lógica)\nMas a emoção sozinha não basta. Você precisa de argumentos lógicos e evidências para sustentar sua mensagem.\n\n## Prática e Persistência\n\nNinguém nasce orador. Oratória e Retórica são habilidades que se desenvolvem com prática constante.\n\nComece pequeno, apresente para amigos, grave vídeos, participe de grupos de discussão. Cada apresentação é uma oportunidade de aprender.\n\n## Conclusão\n\nQuem domina Oratória e Retórica tem um superpoder no mundo profissional. Consegue influenciar, persuadir e inspirar pessoas. E essa é uma habilidade que nunca sai de moda."
};

const articles = [
  {
    id: 1,
    title: "A Era da Decisão: Transformando Dados em Poder de Negócio",
    excerpt: "Descubra como transformar dados estruturados em decisões estratégicas. Explore o desafio da sobrecarga de informação e o caminho para a democracia analítica.",
    category: "Análise de Dados",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/AvnZmyNrFlhmFzrS.jpg",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Guia de Português para Concursos: Domine o Básico em 30 Dias",
    excerpt: "Resumo visual das regras gramaticais essenciais para concursos públicos de nível médio. Ortografia, pontuação e novo acordo ortográfico explicados de forma prática.",
    category: "Português",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/OFZoOIzVaqnZzPsk.jpg",
    readTime: "10 min"
  },
  {
    id: 3,
    title: "Domine a Arte da Comunicação: Do Básico ao Profissional",
    excerpt: "Fundamentos essenciais da comunicação: verbal, vocal e corporal. Aprenda os 6 elementos do processo comunicativo e técnicas de feedback construtivo.",
    category: "Comunicação",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/AvnZmyNrFlhmFzrS.jpg",
    readTime: "12 min"
  },
  {
    id: 4,
    title: "O Poder da Cultura Analítica: Do \"Feeling\" à Inteligência Artificial",
    excerpt: "Entenda como evoluir de decisões baseadas em intuição para uma cultura analítica. Explore a democracia analítica e o papel da IA & Data Science.",
    category: "Estratégia",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/OFZoOIzVaqnZzPsk.jpg",
    readTime: "9 min"
  },
  {
    id: 5,
    title: "Oratória & Retórica: A Arte de Cativar Pessoas",
    excerpt: "Fundamentos da comunicação persuasiva unindo estratégia do discurso (Retórica) com performance do orador (Oratória). Os três pilares de Aristóteles aplicados.",
    category: "Oratória",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/AvnZmyNrFlhmFzrS.jpg",
    readTime: "11 min"
  }
];

const categories = ["Todos", "Análise de Dados", "Português", "Comunicação", "Estratégia", "Oratória"];

export default function Blog() {
  const [, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog AUREA
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Artigos, insights e guias práticos sobre comunicação, marketing, análise de dados e desenvolvimento profissional.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 md:py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={selectedCategory === category ? { backgroundColor: "#D4AF37" } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border border-gray-200"
                >
                  {/* Article Image */}
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full"
                        style={{ backgroundColor: "#D4AF37" }}
                      >
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(article.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>⏱️ {article.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Button
                      onClick={() => setSelectedArticle(article)}
                      className="w-full text-white font-medium py-2 rounded-lg transition flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#D4AF37" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#C99E2E"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#D4AF37"}
                    >
                      Ler Artigo
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum artigo encontrado. Tente outra busca ou categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quer aprofundar seus conhecimentos?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Conheça nossos cursos especializados em comunicação, marketing e desenvolvimento profissional.
          </p>
          <Button
            onClick={() => navigate('/produtos')}
            className="text-white px-8 py-3 text-lg rounded-lg transition"
            style={{ backgroundColor: "#D4AF37" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#C99E2E"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#D4AF37"}
          >
            Descubra Nossos Cursos
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full my-8">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mb-3" style={{ backgroundColor: "#D4AF37" }}>
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900">{selectedArticle.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-3 flex-wrap">
                  <span>{selectedArticle.author}</span>
                  <span>{new Date(selectedArticle.date).toLocaleDateString("pt-BR")}</span>
                  <span>⏱️ {selectedArticle.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-500 hover:text-gray-700 transition flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="h-64 overflow-hidden bg-gray-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {selectedArticle && articleContent[selectedArticle.id as keyof typeof articleContent]?.split('\n\n').map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('###')) {
                  return (
                    <h4 key={idx} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={idx} className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                      {paragraph.split('\n').map((item: string, i: number) => (
                        <li key={i} className="text-gray-700">{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 bg-gray-50 sticky bottom-0">
              <Button
                onClick={() => setSelectedArticle(null)}
                className="w-full text-white font-medium py-3 rounded-lg transition"
                style={{ backgroundColor: "#D4AF37" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#C99E2E"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#D4AF37"}
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
