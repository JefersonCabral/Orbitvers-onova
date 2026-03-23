import React from 'react';
import { Shield, Lock, Eye, FileText, Database, Users, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Privacy() {
  return (
    <section id="privacidade" className="py-20 bg-[#0B1120] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Política de Privacidade
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacidade e Proteção de Dados</h1>
          <p className="text-slate-400 text-lg">
            Sua privacidade é nossa prioridade. Saiba como protegemos seus dados pessoais.
          </p>
        </div>

        <div className="space-y-8">
          {/* Conformidade LGPD */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Conformidade com a LGPD</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              A OrbitSender compromete-se a cumprir integralmente a Lei Geral de Proteção de Dados 
              Pessoais (Lei nº 13.709/2018 – LGPD) e demais normas aplicáveis à privacidade e proteção 
              de dados. Atuamos em estrita observância aos princípios da LGPD: finalidade, adequação, 
              necessidade, transparência, segurança, prevenção e não discriminação.
            </p>
          </div>

          {/* Papéis e Responsabilidades */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">2. Papéis e Responsabilidades</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Controlador de Dados (Você)</h3>
                <p className="text-slate-400 text-sm">
                  Como usuário do OrbitSender, você é o <strong className="text-white">Controlador</strong> dos dados, 
                  sendo responsável por definir as finalidades e os meios de tratamento dos dados pessoais 
                  envolvidos no uso da plataforma. Você deve garantir base legal adequada para o tratamento 
                  dos dados, incluindo obtenção de consentimento quando necessário.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Operador de Dados (OrbitSender)</h3>
                <p className="text-slate-400 text-sm">
                  A OrbitSender atua como <strong className="text-white">Operadora</strong>, tratando os dados pessoais 
                  exclusivamente conforme suas instruções e nos limites do serviço contratado. É vedado à 
                  OrbitSender desviar finalidade ou utilizar os dados para finalidades diversas sem sua 
                  autorização expressa.
                </p>
              </div>
            </div>
          </div>

          {/* Coleta de Dados */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Database className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">3. Coleta de Dados</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Coletamos apenas os dados necessários para fornecer nossos serviços:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Dados de Cadastro:</strong> Nome, email, informações de conta e dados de faturamento</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Dados de Campanhas:</strong> Listas de contatos, mensagens, histórico de envios e resultados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Dados de Uso:</strong> Logs de acesso, interações com o sistema e métricas de performance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Dados de Integração:</strong> Credenciais de APIs e configurações de serviços terceirizados</span>
              </li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              Todos os dados coletados são fornecidos diretamente por você ou gerados durante o uso 
              legítimo da plataforma. Não coletamos dados de fontes não autorizadas.
            </p>
          </div>

          {/* Uso dos Dados */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">4. Uso dos Dados</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Utilizamos seus dados exclusivamente para:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>Fornecer, manter e melhorar nossos serviços de envio de mensagens e gestão de campanhas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>Processar transações e gerenciar sua conta e assinatura</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>Enviar comunicações importantes sobre sua conta e o serviço</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>Garantir segurança, prevenir fraudes e cumprir obrigações legais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>Fornecer suporte técnico e responder a suas solicitações</span>
              </li>
            </ul>
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mt-4">
              <p className="text-amber-200 text-sm">
                <strong>Importante:</strong> A OrbitSender não utiliza seus dados para finalidades diversas 
                sem sua autorização expressa. Não vendemos, alugamos ou compartilhamos seus dados pessoais 
                com terceiros para fins comerciais.
              </p>
            </div>
          </div>

          {/* Compartilhamento de Dados */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">5. Compartilhamento de Dados</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender não compartilha dados pessoais tratados em seu nome com terceiros, salvo:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Suboperadores Necessários:</strong> Provedores de API (OpenAI, WhatsApp, 
                  serviços de hospedagem em nuvem) estritamente necessários à execução técnica dos serviços, 
                  mediante contratos que imponham os mesmos deveres de sigilo, segurança e limitação de uso.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Obrigação Legal:</strong> Quando exigido por lei ou ordem de autoridade 
                  competente, caso em que notificaremos você previamente, quando legalmente permitido.
                </div>
              </li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              Todos os suboperadores são selecionados com base em seus padrões de segurança e conformidade 
              com a LGPD, e são contratualmente obrigados a manter os mesmos níveis de proteção.
            </p>
          </div>

          {/* Segurança */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">6. Medidas de Segurança</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Implementamos medidas técnicas e administrativas de segurança da informação para proteger 
              os dados tratados contra acessos não autorizados, perda, destruição ou alteração indevida:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Criptografia de dados em trânsito (HTTPS/TLS) e em repouso</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Controle de acesso baseado em permissões e autenticação multifator</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Backups regulares e seguros com criptografia</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Monitoramento contínuo de segurança e detecção de intrusões</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Treinamento regular da equipe sobre LGPD e segurança da informação</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Obrigações de confidencialidade e sigilo para colaboradores e subcontratados</span>
              </li>
            </ul>
          </div>

          {/* Incidentes de Segurança */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">7. Incidentes de Segurança</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender notificará você, sem demora injustificada, sobre qualquer incidente de segurança 
              que envolva dados pessoais, com as informações previstas no art. 48, §1º da LGPD:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Natureza do incidente e dados pessoais afetados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Informações sobre os titulares afetados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Riscos relacionados ao incidente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Medidas adotadas para mitigar ou reverter os efeitos do incidente</span>
              </li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              As partes cooperarão na investigação, mitigação e no cumprimento das obrigações legais 
              decorrentes do incidente, incluindo notificação à ANPD quando exigido por lei.
            </p>
          </div>

          {/* Direitos dos Titulares */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">8. Direitos dos Titulares (LGPD)</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Anonimização ou Exclusão:</strong> Solicitar anonimização ou exclusão de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Portabilidade:</strong> Solicitar portabilidade dos dados para outro fornecedor de serviço
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Revogação de Consentimento:</strong> Revogar consentimento a qualquer momento, quando o tratamento for baseado em consentimento
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Informação sobre Compartilhamento:</strong> Obter informações sobre entidades públicas e privadas com as quais compartilhamos dados
                </div>
              </li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              A OrbitSender cooperará de forma razoável para viabilizar o exercício desses direitos, 
              mediante solicitação documentada. Se recebermos diretamente qualquer requisição de titular 
              ou da ANPD relativa a seus dados, comunicaremos imediatamente a você, salvo se houver 
              impedimento legal.
            </p>
          </div>

          {/* Retenção e Exclusão */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">9. Retenção e Exclusão de Dados</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades 
              para as quais foram coletados, ou conforme exigido por lei. Ao término do contrato ou 
              mediante solicitação de exclusão:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>A OrbitSender fornecerá seus dados em formato estruturado e acessível, em até 30 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Eliminará todos os dados pessoais de seus sistemas ativos, inclusive de backups</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Manterá apenas cópias de segurança conforme obrigações legais (art. 16 da LGPD)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Fornecerá declaração formal de eliminação, se solicitado</span>
              </li>
            </ul>
          </div>

          {/* Confidencialidade */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">10. Confidencialidade</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender compromete-se a manter total sigilo sobre todas as informações confidenciais 
              acessadas no exercício dos serviços, utilizando-as exclusivamente para execução do contrato 
              e protegendo-as com, no mínimo, o mesmo grau de cuidado aplicado às suas próprias informações 
              confidenciais.
            </p>
            <p className="text-slate-400 leading-relaxed">
              O dever de sigilo se estende a colaboradores, subcontratados e quaisquer terceiros com 
              acesso às informações, e vigorará por um período mínimo de três anos após o término do 
              contrato. Informações classificadas como segredos de negócio ou dados pessoais permanecerão 
              protegidas por prazo indeterminado, enquanto não se tornarem públicas por meios legítimos.
            </p>
          </div>

          {/* Alterações na Política */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">11. Alterações na Política</h2>
            <p className="text-slate-400 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em 
              nossas práticas ou por razões legais, operacionais ou regulatórias. Notificaremos você 
              sobre alterações significativas por email ou através de aviso em nossa plataforma. 
              Recomendamos que revise esta política regularmente.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Dúvidas sobre Privacidade?</h3>
            <p className="text-slate-400 mb-4">
              Entre em contato conosco através de:
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-slate-300">
                Email: <a href="mailto:privacidade@orbitsender.com" className="text-indigo-400 hover:text-indigo-300">privacidade@orbitsender.com</a>
              </p>
              <p className="text-slate-300">
                DPO: <a href="mailto:dpo@orbitsender.com" className="text-indigo-400 hover:text-indigo-300">dpo@orbitsender.com</a>
              </p>
            </div>
            <p className="text-slate-500 text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
