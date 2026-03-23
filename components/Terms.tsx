import React from 'react';
import { FileText, AlertCircle, CheckCircle, Shield, Code, Ban } from 'lucide-react';

export default function Terms() {
  return (
    <section id="termos" className="py-20 bg-[#0B1120] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            Termos de Uso
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos e Condições de Uso</h1>
          <p className="text-slate-400 text-lg">
            Leia atentamente nossos termos de uso antes de utilizar nossos serviços.
          </p>
        </div>

        <div className="space-y-8">
          {/* Aceitação dos Termos */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
            <p className="text-slate-400 leading-relaxed">
              Ao acessar e usar o OrbitSender, você concorda em cumprir e estar vinculado a estes
              Termos de Uso. Se você não concorda com alguma parte destes termos, não deve usar
              nossos serviços. Estes termos constituem o acordo completo entre você e a OrbitSender
              quanto ao uso da plataforma.
            </p>
          </div>

          {/* Licença de Uso do Software */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Code className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Licença de Uso do Software</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender concede a você uma licença de uso limitada, não exclusiva, intransferível,
              inegociável e revogável para acesso e utilização da plataforma OrbitSender, exclusivamente
              para os fins legítimos de envio de mensagens e gestão de campanhas, nos termos aqui pactuados.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-white mb-3">Características da Licença:</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Não exclusiva:</strong> Podemos licenciar o sistema a outros usuários</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Intransferível:</strong> Você não pode ceder, vender ou sublicenciar a terceiros</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Temporária:</strong> Vigerá apenas durante a vigência de sua assinatura</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Uso interno:</strong> Exclusiva para fins internos da sua organização</span>
                </li>
              </ul>
            </div>
            <p className="text-slate-400 leading-relaxed mt-4">
              Esta licença não transfere propriedade sobre o software, códigos, algoritmos, marca ou
              qualquer componente do sistema. Todos os direitos de propriedade intelectual pertencem
              exclusivamente à OrbitSender.
            </p>
          </div>

          {/* Restrições de Uso */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Ban className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">3. Restrições e Uso Indevido</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              É expressamente proibido:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Realizar engenharia reversa, descompilação ou desmontagem do software</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Copiar, modificar ou criar obras derivadas do software</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Acessar áreas não autorizadas do sistema ou interferir em seu funcionamento</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Utilizar o sistema para envio de spam ou mensagens não autorizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Violar políticas de plataformas integradas (WhatsApp, Google Maps, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Remover avisos de titularidade ou direitos autorais</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Utilizar o sistema para finalidades ilegais ou em violação de direitos de terceiros</span>
              </li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              A violação de qualquer uma dessas restrições resultará na rescisão imediata da licença
              e poderá acarretar responsabilização civil e criminal.
            </p>
          </div>

          {/* Obrigações do Usuário */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">4. Obrigações do Usuário</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Ao utilizar o OrbitSender, você se compromete a:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fornecer informações precisas e atualizadas para execução dos serviços</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Efetuar o pagamento dos valores devidos nos prazos e condições acordados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Utilizar o sistema exclusivamente conforme suas finalidades legítimas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Garantir base legal adequada (LGPD) para tratamento de dados pessoais utilizados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fornecer e aprovar conteúdos das mensagens, sendo responsável por seu teor e conformidade legal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Manter em segurança as credenciais de acesso e comunicar uso indevido imediatamente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Assegurar infraestrutura necessária (hardware, software, internet) para acesso ao sistema</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Cooperar reportando incidentes, falhas ou comportamentos anômalos do sistema</span>
              </li>
            </ul>
          </div>

          {/* Obrigações da OrbitSender */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">5. Obrigações da OrbitSender</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender compromete-se a:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Manter o sistema em pleno funcionamento e acessível durante a vigência contratual</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Empregar esforços técnicos para minimizar erros de interpretação ou "alucinações" de IA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Garantir atualização contínua do sistema, mantendo compatibilidade com APIs e serviços integrados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Tratar com sigilo e confidencialidade todas as informações e dados fornecidos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Adotar medidas adequadas de segurança da informação para proteger dados pessoais (LGPD)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Informar prontamente sobre incidentes relevantes que possam afetar a prestação dos serviços</span>
              </li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              Ressalvadas interrupções para manutenção programada ou eventuais indisponibilidades
              causadas por fatores fora do nosso controle, como problemas em integradores externos
              ou força maior.
            </p>
          </div>

          {/* Propriedade Intelectual */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">6. Propriedade Intelectual</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Todos os direitos sobre o OrbitSender (software, código, algoritmos, IA, documentação,
              layout, marcas, ferramentas e demais ativos) pertencem exclusivamente à OrbitSender ou
              seus licenciantes. Este acordo concede apenas os direitos de uso previstos, sem transferência
              de propriedade.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-6 mt-4">
              <h3 className="text-lg font-semibold text-white mb-3">Direitos de Propriedade:</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span><strong className="text-white">Sistema OrbitSender:</strong> Propriedade exclusiva da OrbitSender</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span><strong className="text-white">Melhorias e Personalizações:</strong> De titularidade da OrbitSender, mesmo quando feitas a pedido do usuário</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span><strong className="text-white">Dados do Usuário:</strong> De titularidade exclusiva do usuário. A OrbitSender não adquire direitos sobre esses dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span><strong className="text-white">Uso de Dados:</strong> A OrbitSender utilizará os dados apenas para execução do serviço, conforme LGPD</span>
                </li>
              </ul>
            </div>
            <p className="text-slate-400 leading-relaxed mt-4">
              Ao término do contrato, mediante solicitação, a OrbitSender fornecerá os dados armazenados
              em formato estruturado e acessível, e eliminará esses dados de seus sistemas ativos,
              mantendo apenas cópias de segurança conforme obrigações legais.
            </p>
          </div>

          {/* Limitação de Responsabilidade */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender não será responsável por:
            </p>
            <ul className="space-y-3 text-slate-400 mb-4">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Falhas, indisponibilidades ou vícios decorrentes de sistemas, plataformas ou serviços de terceiros (WhatsApp, APIs de IA, Google Maps, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Bloqueios, banimentos ou limitações de envio no WhatsApp, seja via API oficial ou não-oficial</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Conteúdo das mensagens enviadas pelo usuário ou decisões tomadas com base em respostas de IA</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Resultados específicos, conversões, vendas ou retorno financeiro com os serviços prestados</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Danos indiretos, lucros cessantes, perda de chance, reputação, receitas ou oportunidades de negócio</span>
              </li>
            </ul>
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mt-4">
              <p className="text-amber-200 text-sm">
                <strong>Atenção:</strong> A responsabilidade total da OrbitSender por danos diretos estará
                limitada ao valor total pago pelo usuário nos 12 (doze) meses anteriores ao evento danoso.
                Este limite não se aplica a casos de dolo ou culpa grave.
              </p>
            </div>
          </div>

          {/* Rescisão */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">8. Rescisão e Término</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              O contrato poderá ser rescindido nas seguintes hipóteses:
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Descumprimento de obrigação relevante não corrigida em 15 dias após notificação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Não pagamento de valores devidos por prazo superior a 30 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Uso ilícito, doloso ou em violação aos termos contratuais ou legislação aplicável</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Rescisão unilateral mediante aviso prévio de 30 dias (após período mínimo de 12 meses)</span>
              </li>
            </ul>
            <p className="text-slate-400 leading-relaxed mt-4">
              Ao término do contrato, todas as licenças de uso serão automaticamente revogadas, e o
              usuário deverá cessar imediatamente o uso do sistema. A OrbitSender fornecerá os dados
              armazenados mediante solicitação formal, em até 30 dias do término.
            </p>
          </div>

          {/* Preços e Reajustes */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">9. Preços e Reajustes</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Os preços dos planos, serviços adicionais e funcionalidades da OrbitSender estão sujeitos a
              alterações a qualquer momento, a critério exclusivo da OrbitSender, observado o seguinte:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>A OrbitSender poderá reajustar os valores dos planos e serviços adicionais a qualquer momento, mediante comunicação prévia de <strong className="text-white">30 (trinta) dias</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Promoções, descontos e condições especiais são temporários e não garantem a manutenção dos valores promocionais após o período estipulado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>O reajuste poderá considerar correção monetária, variação de custos operacionais, câmbio, tributação ou adequação ao mercado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Caso o usuário não concorde com o novo valor, poderá cancelar sua assinatura antes da aplicação do reajuste, sem qualquer penalidade</span>
              </li>
            </ul>
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mt-4">
              <p className="text-amber-200 text-sm">
                <strong>Importante:</strong> A continuidade do uso da plataforma após o período de comunicação
                será considerada como aceite tácito dos novos valores.
              </p>
            </div>
          </div>

          {/* Alteração dos Termos de Uso */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. Alteração dos Termos de Uso</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              A OrbitSender reserva-se o direito de alterar, modificar, adicionar ou remover cláusulas
              destes Termos de Uso a qualquer momento, a seu exclusivo critério, observado o seguinte:
            </p>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>As alterações serão comunicadas aos usuários com antecedência mínima de <strong className="text-white">15 (quinze) dias</strong>, por e-mail ou notificação na plataforma</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>A versão atualizada dos Termos será publicada nesta página com a data da última modificação</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>O uso continuado da plataforma após o período de comunicação constitui aceitação expressa das alterações realizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Caso o usuário não concorde com as alterações, poderá encerrar sua conta e cessar o uso da plataforma sem penalidade</span>
              </li>
            </ul>
          </div>

          {/* Disposições Gerais */}
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">11. Disposições Gerais</h2>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>Este instrumento constitui o acordo completo entre as partes quanto ao seu objeto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>A OrbitSender poderá alterar estes termos conforme previsto na Seção 10, sendo que a continuidade do uso implica em aceitação das modificações</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>Este contrato será regido pelas leis da República Federativa do Brasil, especialmente o Código Civil, CDC (quando aplicável) e LGPD</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>As partes elegem o foro da Comarca de Maringá/PR para dirimir questões oriundas deste contrato</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Dúvidas sobre os Termos?</h3>
            <p className="text-slate-400 mb-6">
              Entre em contato: <a href="mailto:legal@orbitsender.com" className="text-indigo-400 hover:text-indigo-300">legal@orbitsender.com</a>
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
