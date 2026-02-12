import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header com botão voltar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
            Política de Privacidade
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-8">
              Última atualização: 11 de fevereiro de 2026
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Introdução
            </h2>
            <p>
              A AUREA COMMKT ("nós", "nosso" ou "nos") opera o site{" "}
              <strong>aurea-commkt.manus.space</strong>. Esta página informa você
              sobre nossas políticas sobre a coleta, uso e divulgação de dados
              pessoais quando você usa nosso site e as opções que você tem
              associadas a esses dados.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Informações que Coletamos
            </h2>
            <p>
              Coletamos diferentes tipos de informações para diversos fins a fim
              de fornecer e melhorar nosso serviço para você:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Dados de Contato:</strong> Nome, endereço de e-mail,
                número de telefone (quando fornecidos voluntariamente)
              </li>
              <li>
                <strong>Dados de Navegação:</strong> Informações sobre como você
                usa nosso site, incluindo páginas visitadas, tempo gasto,
                cliques e referenciadores
              </li>
              <li>
                <strong>Dados de Transação:</strong> Informações sobre compras,
                incluindo produtos adquiridos, valor da transação e data
              </li>
              <li>
                <strong>Dados de Dispositivo:</strong> Tipo de navegador, sistema
                operacional, endereço IP e identificadores únicos de dispositivo
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Como Usamos Suas Informações
            </h2>
            <p>
              A AUREA COMMKT usa os dados coletados para diversos fins:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>
                Processar transações e enviar informações relacionadas,
                incluindo confirmações e faturas
              </li>
              <li>
                Enviar comunicações de marketing, newsletters e atualizações
                sobre novos cursos (você pode se desinscrever a qualquer
                momento)
              </li>
              <li>
                Responder a suas perguntas, comentários e solicitações de
                suporte
              </li>
              <li>
                Monitorar e analisar tendências, uso e atividades para fins de
                segurança e melhoria
              </li>
              <li>Detectar, prevenir e resolver problemas técnicos e fraudes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros, exceto:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Prestadores de Serviços:</strong> Compartilhamos dados
                com fornecedores que nos ajudam a operar nosso site e fornecer
                serviços (processadores de pagamento, provedores de e-mail,
                hospedagem)
              </li>
              <li>
                <strong>Conformidade Legal:</strong> Quando exigido por lei ou
                em resposta a solicitações legais válidas
              </li>
              <li>
                <strong>Proteção de Direitos:</strong> Para proteger nossos
                direitos, privacidade, segurança ou propriedade, bem como os de
                nossos usuários
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Segurança de Dados
            </h2>
            <p>
              A segurança de seus dados é importante para nós. Implementamos
              medidas de segurança técnicas, administrativas e físicas para
              proteger suas informações pessoais contra acesso não autorizado,
              alteração, divulgação ou destruição. No entanto, nenhum método de
              transmissão pela Internet ou armazenamento eletrônico é 100%
              seguro, e não podemos garantir segurança absoluta.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Retenção de Dados
            </h2>
            <p>
              Retemos suas informações pessoais pelo tempo necessário para
              fornecer nossos serviços, cumprir obrigações legais, resolver
              disputas e fazer cumprir nossos acordos. Você pode solicitar a
              exclusão de seus dados a qualquer momento entrando em contato
              conosco.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Seus Direitos
            </h2>
            <p>
              Você tem direitos em relação aos seus dados pessoais, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Direito de Acesso:</strong> Solicitar acesso aos seus
                dados pessoais
              </li>
              <li>
                <strong>Direito de Retificação:</strong> Solicitar correção de
                dados imprecisos ou incompletos
              </li>
              <li>
                <strong>Direito de Exclusão:</strong> Solicitar a exclusão de
                seus dados (com certas exceções legais)
              </li>
              <li>
                <strong>Direito de Portabilidade:</strong> Receber seus dados em
                formato estruturado e transferi-los para outro serviço
              </li>
              <li>
                <strong>Direito de Oposição:</strong> Opor-se ao processamento
                de seus dados para fins de marketing
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Nosso site usa cookies e tecnologias de rastreamento semelhantes
              para melhorar sua experiência, lembrar suas preferências e analisar
              o uso do site. Você pode controlar as configurações de cookies em
              seu navegador. Desabilitar cookies pode afetar a funcionalidade do
              site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Links para Terceiros
            </h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos
              responsáveis pelas práticas de privacidade desses sites. Recomendamos
              que você revise a política de privacidade de qualquer site de
              terceiros antes de fornecer informações pessoais.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Alterações a Esta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para
              refletir mudanças em nossas práticas, tecnologia, requisitos legais
              e outros fatores. A data de atualização será indicada no topo desta
              página. Seu uso contínuo do site após alterações constitui sua
              aceitação da Política de Privacidade revisada.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Contato
            </h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou nossas
              práticas de privacidade, entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p>
                <strong>AUREA COMMKT</strong>
              </p>
              <p>Email: contato@aureacommkt.com.br</p>
              <p>WhatsApp: +55 (48) 98827-4343</p>
            </div>
          </div>
        </div>

        {/* Botão voltar no final */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Button
            onClick={() => navigate("/")}
            className="text-white px-6 py-2 rounded-lg transition"
            style={{ backgroundColor: "#D4AF37" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#C99E2E")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#D4AF37")
            }
          >
            Voltar para Home
          </Button>
        </div>
      </div>
    </div>
  );
}
