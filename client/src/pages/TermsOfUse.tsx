import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function TermsOfUse() {
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
            Termos de Uso
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
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar o site <strong>aurea-commkt.manus.space</strong>,
              você concorda em estar vinculado por estes Termos de Uso. Se você
              não concordar com qualquer parte destes termos, você não deve usar
              nosso site. A AUREA COMMKT se reserva o direito de modificar estes
              termos a qualquer momento, e você é responsável por revisar
              regularmente as atualizações.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Uso Permitido
            </h2>
            <p>
              Você concorda em usar nosso site apenas para fins legais e de uma
              forma que não viole os direitos de terceiros ou restrinja seu uso.
              Comportamento proibido inclui:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Assediar ou causar constrangimento, angústia ou inconveniência a
                qualquer pessoa
              </li>
              <li>Ofender a decência pública</li>
              <li>
                Interromper o fluxo normal de diálogo dentro de nosso site
              </li>
              <li>
                Tentar obter acesso não autorizado a sistemas de computador
              </li>
              <li>
                Transmitir conteúdo obsceno ou abusivo ou material prejudicial
                ao site
              </li>
              <li>
                Interromper o funcionamento normal do site por qualquer meio
              </li>
              <li>
                Usar robôs, scrapers ou outras ferramentas de coleta de dados
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo do site, incluindo textos, imagens, gráficos,
              logotipos, ícones, vídeos, áudio e software, é propriedade da
              AUREA COMMKT ou de seus fornecedores de conteúdo e é protegido
              pelas leis de direitos autorais internacionais. Você não pode
              reproduzir, distribuir, transmitir, exibir, executar ou usar
              qualquer conteúdo sem permissão expressa por escrito.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Contas de Usuário
            </h2>
            <p>
              Se você criar uma conta em nosso site, você é responsável por
              manter a confidencialidade de suas credenciais de login e por todas
              as atividades que ocorrem em sua conta. Você concorda em notificar
              imediatamente a AUREA COMMKT sobre qualquer uso não autorizado de
              sua conta. Você é o único responsável por qualquer atividade em sua
              conta.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Produtos e Serviços
            </h2>
            <p>
              A AUREA COMMKT oferece cursos online, e-books e outros materiais
              educacionais. Todos os produtos e serviços são fornecidos "como
              estão" sem garantias de qualquer tipo, expressas ou implícitas.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Acesso aos Cursos:</strong> Após a compra, você recebe
                acesso aos materiais do curso pelo período especificado
              </li>
              <li>
                <strong>Certificados:</strong> Certificados são emitidos após
                conclusão do curso, conforme especificado na descrição do curso
              </li>
              <li>
                <strong>Reembolsos:</strong> Reembolsos podem ser solicitados
                dentro de 7 dias da compra, desde que o conteúdo do curso não
                tenha sido acessado
              </li>
              <li>
                <strong>Acesso Contínuo:</strong> A AUREA COMMKT se reserva o
                direito de remover ou modificar conteúdo do curso a qualquer
                momento
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Pagamentos e Preços
            </h2>
            <p>
              Todos os preços estão em Real (R$) e incluem impostos aplicáveis.
              Nos reservamos o direito de alterar os preços a qualquer momento,
              mas as alterações de preço não afetarão as compras já realizadas.
              Os pagamentos são processados através de provedores de pagamento
              terceirizados (Mercado Pago, Hotmart, etc.). Você concorda com os
              termos de serviço desses provedores.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Limitação de Responsabilidade
            </h2>
            <p>
              Na máxima extensão permitida pela lei, a AUREA COMMKT não será
              responsável por danos indiretos, incidentais, especiais,
              consequentes ou punitivos, incluindo perda de lucros, dados ou
              outros danos, mesmo que tenha sido avisada da possibilidade de tais
              danos.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Isenção de Garantias
            </h2>
            <p>
              Nosso site e todos os conteúdos são fornecidos "como estão" sem
              garantias de qualquer tipo. A AUREA COMMKT não garante que o site
              será ininterrupto, seguro ou livre de erros. Você usa o site por
              sua conta e risco.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Links Externos
            </h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos
              responsáveis pelo conteúdo, precisão ou práticas desses sites. Seu
              uso de sites de terceiros está sujeito aos seus termos de uso.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Conteúdo Gerado pelo Usuário
            </h2>
            <p>
              Se você enviar, publicar ou exibir conteúdo em nosso site, você
              concede à AUREA COMMKT uma licença não exclusiva, mundial,
              royalty-free para usar, reproduzir, modificar e distribuir esse
              conteúdo. Você garante que possui todos os direitos necessários
              para conceder essa licença e que o conteúdo não viola direitos de
              terceiros.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Rescisão
            </h2>
            <p>
              A AUREA COMMKT pode rescindir ou suspender sua conta e acesso ao
              site imediatamente, sem aviso prévio, se você violar estes Termos
              de Uso ou qualquer lei aplicável. Após a rescisão, você não terá
              direito a reembolsos.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              12. Lei Aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa
              do Brasil, especificamente do Estado de Santa Catarina. Qualquer
              litígio será resolvido nos tribunais competentes de Santa Catarina.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              13. Resolução de Disputas
            </h2>
            <p>
              Antes de iniciar qualquer ação legal, você concorda em tentar
              resolver qualquer disputa através de negociação amigável com a
              AUREA COMMKT. Se a negociação falhar, qualquer disputa será
              resolvida através de arbitragem vinculante de acordo com as regras
              da câmara de arbitragem aplicável.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              14. Alterações aos Termos
            </h2>
            <p>
              A AUREA COMMKT se reserva o direito de modificar estes Termos de
              Uso a qualquer momento. As alterações entram em vigor quando
              publicadas no site. Seu uso contínuo do site após alterações
              constitui sua aceitação dos Termos de Uso revisados.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              15. Contato
            </h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato
              conosco:
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
