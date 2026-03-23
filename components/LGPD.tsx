import React from 'react';
import { Shield, Lock, FileCheck, UserCheck, Mail, MessageSquare, CheckCircle, Users, AlertTriangle, Database } from 'lucide-react';

export default function LGPD() {
  return (
    <section id="lgpd" className="py-20 bg-[#0B1120] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Conformidade LGPD
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lei Geral de Proteção de Dados</h1>
          <p className="text-slate-400 text-lg">
            O OrbitSender está em total conformidade com a LGPD (Lei 13.709/2018).
          </p>
        </div>

        <div className="space-y-8">
          {/* Nossa Conformidade */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <FileCheck className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Nossa Conformidade</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              O OrbitSender está totalmente alinhado com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). 
              Implementamos medidas técnicas e organizacionais para garantir a proteção dos dados pessoais de nossos 
              usuários e dos destinatários das mensagens, atuando em estrita observância aos princípios da LGPD: 
              finalidade, adequação, necessidade, transparência, segurança, prevenção e não discriminação.
            </p>
          </div>

          {/* Papéis e Responsabilidades */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Papéis e Responsabilidades</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Você é o Controlador</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Como usuário do OrbitSender, você é o <strong className="text-white">Controlador</strong> dos dados pessoais, 
                  sendo responsável por:
                </p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Definir as finalidades e os meios de tratamento dos dados pessoais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Garantir base legal adequada para o tratamento (consentimento, execução de contrato, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Atender às solicitações dos titulares no exercício de seus direitos LGPD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Elaborar políticas de privacidade e relatórios de impacto quando necessário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Garantir que o envio de mensagens esteja em conformidade com a legislação aplicável</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">OrbitSender é o Operador</h3>
                <p className="text-slate-400 text-sm mb-3">
                  A OrbitSender atua como <strong className="text-white">Operadora</strong>, comprometendo-se a:
                </p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Tratar os dados pessoais exclusivamente conforme suas instruções e nos limites do serviço</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Não desviar finalidade ou utilizar os dados para finalidades diversas sem sua autorização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Implementar medidas técnicas e administrativas de segurança da informação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Comunicar incidentes de segurança envolvendo dados pessoais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Cooperar no atendimento aos direitos dos titulares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Eliminar ou devolver dados ao término do contrato, conforme instruções</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Direitos do Titular */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <UserCheck className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Direitos do Titular</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Conforme a LGPD, os titulares dos dados pessoais têm os seguintes direitos:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los, 
                  incluindo informações sobre a origem dos dados, critérios utilizados e finalidade do tratamento
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
                  <strong className="text-white">Anonimização ou Exclusão:</strong> Solicitar anonimização ou exclusão de dados 
                  desnecessários, excessivos ou tratados em desconformidade com a LGPD
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Portabilidade:</strong> Solicitar portabilidade dos dados para outro fornecedor 
                  de serviço ou produto, mediante requisição expressa
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Revogação de Consentimento:</strong> Revogar consentimento a qualquer momento, 
                  quando o tratamento for baseado em consentimento
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Informação sobre Compartilhamento:</strong> Obter informações sobre entidades 
                  públicas e privadas com as quais compartilhamos dados
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Revisão de Decisões Automatizadas:</strong> Solicitar revisão de decisões 
                  tomadas unicamente com base em tratamento automatizado de dados pessoais
                </div>
              </li>
            </ul>
            <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4 mt-4">
              <p className="text-indigo-200 text-sm">
                <strong>Como Exercer:</strong> Para exercer qualquer um desses direitos, entre em contato conosco através 
                dos canais indicados abaixo. A OrbitSender cooperará de forma razoável para viabilizar o exercício desses 
                direitos, mediante solicitação documentada.
              </p>
            </div>
          </div>

          {/* Medidas de Segurança */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Medidas de Segurança</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Implementamos as seguintes medidas técnicas e administrativas para proteger os dados pessoais contra 
              acessos não autorizados, perda, destruição ou alteração indevida:
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
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Auditorias e certificações de segurança quando aplicável</span>
              </li>
            </ul>
          </div>

          {/* Compartilhamento e Suboperadores */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Database className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Compartilhamento e Suboperadores</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender não compartilha dados pessoais tratados em seu nome com terceiros, salvo:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Suboperadores Necessários:</strong> Provedores de API (OpenAI, WhatsApp, 
                  serviços de hospedagem em nuvem) estritamente necessários à execução técnica dos serviços, mediante 
                  contratos que imponham os mesmos deveres de sigilo, segurança e limitação de uso previstos neste contrato.
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
              Todos os suboperadores são selecionados com base em seus padrões de segurança e conformidade com a LGPD, 
              e são contratualmente obrigados a manter os mesmos níveis de proteção.
            </p>
          </div>

          {/* Incidentes de Segurança */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Comunicação de Incidentes</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender notificará você, sem demora injustificada, sobre qualquer incidente de segurança que envolva 
              dados pessoais, com as informações previstas no art. 48, §1º da LGPD:
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
              As partes cooperarão na investigação, mitigação e no cumprimento das obrigações legais decorrentes do 
              incidente, incluindo notificação à ANPD quando exigido por lei.
            </p>
          </div>

          {/* Retenção e Exclusão */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Retenção e Exclusão de Dados</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Encerrado o contrato ou o tratamento de dados por solicitação sua, a OrbitSender deverá eliminar ou devolver 
              todos os dados pessoais, inclusive de backups, salvo retenções autorizadas por lei (art. 16 da LGPD):
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Fornecimento dos dados em formato estruturado e acessível, em até 30 dias do término</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Eliminação de todos os dados pessoais de sistemas ativos, inclusive de backups</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Manutenção apenas de cópias de segurança conforme obrigações legais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Fornecimento de declaração formal de eliminação, se solicitado</span>
              </li>
            </ul>
          </div>

          {/* Auditorias */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Auditorias e Transparência</h2>
            <p className="text-slate-400 leading-relaxed">
              Auditorias presenciais poderão ser realizadas quando exigidas por lei, respeitados os limites de razoabilidade, 
              confidencialidade de terceiros e escopo contratual. Alternativamente, a OrbitSender poderá apresentar certificados 
              ou relatórios independentes (ex.: ISO 27001, ISAE 3000) em substituição, quando aplicável.
            </p>
          </div>

          {/* Como Exercer Seus Direitos */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Como Exercer Seus Direitos</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Para exercer qualquer um dos seus direitos LGPD, entre em contato conosco através de:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>Email LGPD: <a href="mailto:lgpd@orbitsender.com" className="text-indigo-400 hover:text-indigo-300">lgpd@orbitsender.com</a></span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp: <a href="https://wa.me/554499763965" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">(44) 99763-9655</a></span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mt-4">
              Se a OrbitSender receber diretamente qualquer requisição de titular ou da ANPD relativa a seus dados, 
              comunicaremos imediatamente a você, salvo se houver impedimento legal.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Encarregado de Proteção de Dados (DPO)</h3>
            <p className="text-slate-400 mb-2">
              Para questões relacionadas à proteção de dados, entre em contato com nosso DPO:
            </p>
            <p className="text-indigo-400 font-semibold mb-4">
              <a href="mailto:dpo@orbitsender.com" className="hover:text-indigo-300">dpo@orbitsender.com</a>
            </p>
            <p className="text-slate-500 text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
