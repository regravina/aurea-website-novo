# AUREA COMMKT - Todo List

## Fase 1: Entrega Automática de E-books
- [x] Configurar serviço de e-mail (SendGrid ou similar)
- [x] Criar função para enviar e-books por e-mail
- [x] Integrar envio automático ao webhook de pagamento aprovado
- [ ] Testar fluxo de entrega

## Fase 2: Página de Meus Pedidos
- [x] Criar página de pedidos do cliente
- [x] Implementar autenticação de cliente
- [x] Exibir histórico de compras
- [x] Adicionar botão de download de e-books
- [x] Integrar com tRPC para buscar pedidos

## Fase 3: Relatórios Avançados
- [x] Criar página de relatórios no admin
- [x] Implementar gráfico de vendas por período
- [x] Implementar gráfico de métodos de pagamento
- [x] Implementar gráfico de análise de conversão
- [x] Adicionar filtros de data

## Fase 4: Testes e Deploy
- [x] Testar fluxo completo de entrega
- [x] Testar página de meus pedidos
- [x] Testar relatórios
- [x] Salvar checkpoint final

## Fase 5: Correção de Cache e Otimizações
- [x] Resolver problema de cache do Home.tsx
- [x] Remover seção de e-books duplicada da Home
- [x] Criar página /ebook com apenas "Retórica e Oratória"
- [x] Atualizar link do Google Play com URL correta
- [x] Testar em múltiplos navegadores e dispositivos

## Fase 6: Ajustes Finais Solicitados
- [x] Adicionar badge "EM BREVE" em PRODUTOS
- [x] Adicionar badge "EM BREVE" em CURSOS
- [x] Adicionar badge "EM BREVE" em E-BOOKS (página /ebook)
- [x] Adicionar foto de Regina na página SOBRE
- [x] Corrigir link CONTATO para ir ao final da landing page
- [x] Testar mudanças
- [ ] Salvar checkpoint final

## Fase 7: Redes Sociais e Provas Sociais
- [x] Criar conta Instagram (@aurea_commkt)
- [x] Criar conta TikTok (@aurea_commkt)
- [x] Criar conta Reddit (u/Aurea_ComMkt)
- [x] Adicionar ícones de redes sociais no rodapé
- [ ] Coletar depoimentos reais de alunos/clientes
- [ ] Criar seção de depoimentos na landing page
- [ ] Implementar carousel de depoimentos
- [ ] Testar responsividade
- [ ] Salvar checkpoint final com depoimentos

## Fase 8: Integração com Hotmart
- [x] Criar 2 cursos no Hotmart (Português para Concursos e Comunicação Básica)
- [x] Obter links de divulgação dos cursos
- [x] Criar capas profissionais para os cursos
- [x] Integrar links do Hotmart na página de Produtos
- [x] Adicionar botões "Comprar Agora" com links funcionais
- [x] Testar links do Hotmart
- [x] Salvar checkpoint final com integração Hotmart
- [x] Atualizar seção de Cursos na Home com os 2 cursos do Hotmart
- [x] Remover cursos que ainda não existem (Linguística Parte 01 e 02)
- [x] Manter apenas Oratória como "Em Breve"

## Fase 9: Página FAQ
- [ ] Criar página FAQ.tsx com perguntas sobre cursos
- [ ] Adicionar perguntas sobre duração, acesso e certificado
- [ ] Implementar accordion/collapse para respostas
- [ ] Adicionar rota /faq no App.tsx
- [ ] Testar responsividade

## Fase 10: Formulário de Captura de Leads
- [ ] Criar componente LeadCaptureForm
- [ ] Integrar com tRPC para salvar e-mails
- [ ] Adicionar validação de e-mail
- [ ] Implementar mensagem de sucesso/erro
- [ ] Adicionar formulário na página de Produtos
- [ ] Testar envio de dados

## Fase 11: Análise de Conversão
- [ ] Configurar rastreamento de cliques em "Comprar Agora"
- [ ] Implementar eventos de conversão
- [ ] Criar dashboard de analytics
- [ ] Testar rastreamento
- [ ] Documentar métricas

## Fase 12: Seção de Vídeos YouTube
- [x] Criar componente de seção de vídeos com embed de playlist
- [x] Integrar na página Home
- [x] Testar embed de playlist do YouTube
- [ ] Salvar checkpoint

## Fase 13: Página de Blog
- [ ] Estruturar conteúdo dos 5 artigos
- [ ] Criar página Blog com cards dos artigos
- [ ] Integrar imagens dos artigos
- [ ] Criar páginas individuais de cada artigo
- [ ] Testar navegação e responsividade
- [ ] Salvar checkpoint

## Fase 14: Revisão Geral de Português
- [x] Revisar e corrigir acentuação em todas as páginas
- [x] Revisar e corrigir pontuação em todas as páginas
- [x] Revisar e corrigir ortografia em todas as páginas
- [x] Revisar concordância verbal e nominal
- [x] Corrigir conteúdo do Blog.tsx (artigos)
- [x] Corrigir conteúdo do Home.tsx
- [x] Corrigir conteúdo do Produtos.tsx
- [x] Corrigir conteúdo do Sobre.tsx
- [x] Corrigir conteúdo do FAQ.tsx
- [x] Corrigir conteúdo de todos os componentes
- [ ] Salvar checkpoint final com português corrigido

## Fase 15: Páginas Legais e Newsletter
- [x] Criar página de Política de Privacidade
- [x] Criar página de Termos de Uso
- [x] Implementar formulário de Newsletter
- [ ] Integrar Newsletter com tRPC para capturar emails
- [x] Adicionar validação de email no formulário
- [x] Testar formulário de Newsletter
- [ ] Salvar checkpoint com páginas legais e Newsletter

## Fase 16: Newsletter com Banco de Dados
- [x] Criar tabela newsletter_subscribers no banco de dados
- [x] Criar procedure tRPC para inscrição na newsletter
- [x] Conectar NewsletterForm com tRPC
- [x] Adicionar validação de email duplicado
- [x] Testar inscrição na newsletter

## Fase 17: Página de Depoimentos Dedicada
- [x] Criar página Testimonials.tsx
- [x] Adicionar mais depoimentos (Audrey, Fabiane, Thais)
- [x] Implementar grid responsivo para depoimentos
- [x] Adicionar navegação de volta para Home
- [x] Integrar link na Home para página de depoimentos

## Fase 18: Analytics e Rastreamento
- [x] Configurar sistema de analytics customizado
- [x] Rastrear cliques em CTAs (Cursos, E-books, etc)
- [x] Rastrear conversões de Newsletter
- [x] Rastrear visualizações de páginas
- [x] Integrar analytics no App.tsx

## Fase 19: Sistema de Vendas e Preços
- [ ] Criar email de suporte (support@aurea.commkt.com)
- [ ] Implementar sistema de preços dinâmicos
- [ ] Adicionar promoção de e-book (R$ 15 até 15/03)
- [ ] Otimizar páginas de produto com preços
- [ ] Criar landing pages para cada curso
- [ ] Implementar rastreamento de conversão
- [ ] Criar estratégia de anúncios pagos (R$ 1.000 budget)
- [ ] Salvar checkpoint com sistema de vendas completo
