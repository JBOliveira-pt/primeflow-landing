"use client";

import Link from "next/link";
import { FileText, AlertTriangle, Scale, UserCheck, Ban } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-full mb-6">
                        <Scale className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Termos e Condições de Uso
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Última atualização:{" "}
                        {new Date().toLocaleDateString("pt-PT", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </p>
                </div>

                {/* Alerta Importante */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-300 mb-2">
                                Importante - Leia Atentamente
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Ao aceder e utilizar a plataforma PrimeFlow,
                                você concorda expressamente com estes Termos e
                                Condições de Uso. Se não concordar, não deve
                                utilizar os nossos serviços.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-12">
                    {/* Seção 1 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-indigo-400" />
                            <h2 className="text-2xl font-bold">
                                1. Informações Gerais
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">1.1.</strong>{" "}
                                Estes Termos e Condições de Uso ("Termos")
                                regulam o acesso e utilização da plataforma
                                PrimeFlow, operada por:
                            </p>
                            <div className="bg-slate-800/50 rounded-lg p-4 ml-4">
                                <p>
                                    <strong className="text-white">
                                        Entidade:
                                    </strong>{" "}
                                    PrimeFlow - Soluções de Gestão Financeira,
                                    Lda.
                                </p>
                                <p>
                                    <strong className="text-white">NIF:</strong>{" "}
                                    [Número de Identificação Fiscal]
                                </p>
                                <p>
                                    <strong className="text-white">
                                        Sede:
                                    </strong>{" "}
                                    [Morada completa], Portugal
                                </p>
                                <p>
                                    <strong className="text-white">
                                        Email:
                                    </strong>{" "}
                                    <a
                                        href="mailto:legal@primeflow.pt"
                                        className="text-indigo-400 hover:text-indigo-300"
                                    >
                                        legal@primeflow.pt
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-white">
                                        Website:
                                    </strong>{" "}
                                    www.primeflow.pt
                                </p>
                            </div>
                            <p>
                                <strong className="text-white">1.2.</strong> A
                                plataforma est�� registada em Portugal e sujeita
                                à legislação portuguesa e europeia.
                            </p>
                            <p>
                                <strong className="text-white">1.3.</strong>{" "}
                                Reservamo-nos o direito de alterar estes Termos
                                a qualquer momento, mediante notificação prévia
                                de 30 dias.
                            </p>
                        </div>
                    </section>

                    {/* Seção 2 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <UserCheck className="w-6 h-6 text-indigo-400" />
                            <h2 className="text-2xl font-bold">
                                2. Aceitação dos Termos
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">2.1.</strong> Ao
                                criar uma conta, aceder ou utilizar qualquer
                                funcionalidade da PrimeFlow, você declara e
                                garante que:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Tem pelo menos 18 anos de idade ou a
                                    maioridade legal no seu país
                                </li>
                                <li>
                                    Possui capacidade legal para celebrar
                                    contratos vinculativos
                                </li>
                                <li>
                                    Todas as informações fornecidas são
                                    verdadeiras, precisas e atualizadas
                                </li>
                                <li>
                                    Leu, compreendeu e aceita estes Termos e a
                                    Política de Privacidade
                                </li>
                                <li>
                                    Cumprirá todas as leis e regulamentos
                                    aplicáveis
                                </li>
                            </ul>
                            <p>
                                <strong className="text-white">2.2.</strong> Se
                                representar uma pessoa coletiva (empresa),
                                declara ter autoridade para vincular essa
                                entidade a estes Termos.
                            </p>
                        </div>
                    </section>

                    {/* Seção 3 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            3. Descrição dos Serviços
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">3.1.</strong> A
                                PrimeFlow é uma plataforma SaaS (Software as a
                                Service) de gestão financeira que oferece:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        📊 Dashboard
                                    </h3>
                                    <p className="text-sm">
                                        Visão geral de métricas financeiras e
                                        KPIs
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        🧾 Invoices
                                    </h3>
                                    <p className="text-sm">
                                        Gestão completa de faturas e pagamentos
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        👥 Customers
                                    </h3>
                                    <p className="text-sm">
                                        Base de dados de clientes centralizada
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        🔐 Users
                                    </h3>
                                    <p className="text-sm">
                                        Gestão de utilizadores e permissões
                                    </p>
                                </div>
                            </div>
                            <p>
                                <strong className="text-white">3.2.</strong> Os
                                serviços são fornecidos "tal como estão" e podem
                                ser atualizados, modificados ou descontinuados
                                sem aviso prévio.
                            </p>
                            <p>
                                <strong className="text-white">3.3.</strong> Não
                                garantimos disponibilidade ininterrupta dos
                                serviços, mas comprometemo-nos a manter um
                                uptime superior a 99%.
                            </p>
                        </div>
                    </section>

                    {/* Seção 4 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            4. Registo e Conta de Utilizador
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">
                                    4.1. Criação de Conta
                                </strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    É necessário criar uma conta para aceder às
                                    funcionalidades da plataforma
                                </li>
                                <li>
                                    Deve fornecer informações verdadeiras e
                                    manter os dados atualizados
                                </li>
                                <li>
                                    É responsável por manter a confidencialidade
                                    das suas credenciais
                                </li>
                                <li>
                                    Não pode partilhar a sua conta com terceiros
                                </li>
                            </ul>
                            <p className="mt-4">
                                <strong className="text-white">
                                    4.2. Segurança da Conta
                                </strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Deve utilizar uma password forte e única
                                </li>
                                <li>
                                    É responsável por todas as atividades
                                    realizadas na sua conta
                                </li>
                                <li>
                                    Deve notificar-nos imediatamente de qualquer
                                    uso não autorizado
                                </li>
                                <li>
                                    Não nos responsabilizamos por perdas
                                    decorrentes de uso não autorizado
                                </li>
                            </ul>
                            <p className="mt-4">
                                <strong className="text-white">
                                    4.3. Suspensão e Cancelamento
                                </strong>
                            </p>
                            <p className="ml-4">
                                Reservamo-nos o direito de suspender ou cancelar
                                a sua conta se:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Violar estes Termos</li>
                                <li>
                                    Fornecer informações falsas ou enganosas
                                </li>
                                <li>
                                    Participar em atividades fraudulentas ou
                                    ilegais
                                </li>
                                <li>Representar um risco de segurança</li>
                                <li>
                                    Não efetuar pagamentos devidos (planos
                                    pagos)
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Seção 5 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Ban className="w-6 h-6 text-red-400" />
                            <h2 className="text-2xl font-bold">
                                5. Conduta Proibida
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">5.1.</strong> É
                                expressamente proibido:
                            </p>
                            <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Utilizar a plataforma para fins
                                            ilegais ou não autorizados
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Tentar aceder a áreas restritas ou
                                            contas de outros utilizadores
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Fazer engenharia reversa,
                                            descompilar ou desmontar o software
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Transmitir vírus, malware ou código
                                            malicioso
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Realizar scraping, data mining ou
                                            extração automatizada de dados
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Sobrecarregar ou comprometer a
                                            infraestrutura (DoS/DDoS)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Remover ou alterar avisos de
                                            propriedade intelectual
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Revender ou sublicenciar os serviços
                                            sem autorização
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">
                                            ❌
                                        </span>
                                        <span>
                                            Utilizar para spam, phishing ou
                                            outras atividades fraudulentas
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                <strong className="text-white">5.2.</strong> A
                                violação destas regras pode resultar em
                                suspensão imediata e ações legais.
                            </p>
                        </div>
                    </section>

                    {/* Seção 6 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            6. Propriedade Intelectual
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">
                                    6.1. Direitos da PrimeFlow
                                </strong>
                            </p>
                            <p className="ml-4">
                                Todos os direitos de propriedade intelectual
                                sobre a plataforma, incluindo mas não limitado
                                a:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-8">
                                <li>Código-fonte e software</li>
                                <li>Design, logotipos e marcas comerciais</li>
                                <li>Textos, gráficos e conteúdo</li>
                                <li>Bases de dados e estruturas</li>
                            </ul>
                            <p className="ml-4 mt-2">
                                são propriedade exclusiva da PrimeFlow ou dos
                                seus licenciantes.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    6.2. Licença de Uso
                                </strong>
                            </p>
                            <p className="ml-4">
                                Concedemos-lhe uma licença limitada, não
                                exclusiva, intransferível e revogável para
                                utilizar a plataforma de acordo com estes
                                Termos.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    6.3. Seus Dados
                                </strong>
                            </p>
                            <p className="ml-4">
                                Você mantém todos os direitos sobre os dados que
                                introduz na plataforma. Concede-nos uma licença
                                para processar esses dados apenas para fornecer
                                os serviços.
                            </p>
                        </div>
                    </section>

                    {/* Seção 7 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            7. Pagamentos e Reembolsos (Planos Pagos)
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">
                                    7.1. Planos e Preços
                                </strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Os preços estão disponíveis na página de
                                    planos e em euros (EUR)
                                </li>
                                <li>
                                    Incluem IVA à taxa legal portuguesa (23%)
                                </li>
                                <li>
                                    Podem ser alterados mediante notificação
                                    prévia de 30 dias
                                </li>
                                <li>
                                    Planos existentes mantêm o preço contratado
                                    até renovação
                                </li>
                            </ul>
                            <p className="mt-4">
                                <strong className="text-white">
                                    7.2. Faturação
                                </strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Pagamentos processados mensalmente ou
                                    anualmente (conforme plano)
                                </li>
                                <li>
                                    Fatura eletrónica enviada por email após
                                    cada pagamento
                                </li>
                                <li>Renovação automática até cancelamento</li>
                            </ul>
                            <p className="mt-4">
                                <strong className="text-white">
                                    7.3. Política de Reembolso
                                </strong>
                            </p>
                            <p className="ml-4">
                                Em conformidade com o Decreto-Lei n.º 24/2014
                                (Direito de Retratação):
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-8 mt-2">
                                <li>
                                    Direito de retratação de 14 dias após
                                    contratação
                                </li>
                                <li>
                                    Reembolso integral se não utilizar os
                                    serviços
                                </li>
                                <li>
                                    Reembolso proporcional após uso, mediante
                                    acordo
                                </li>
                                <li>
                                    Sem reembolso após 30 dias da contratação
                                </li>
                            </ul>
                            <p className="mt-4">
                                <strong className="text-white">
                                    7.4. Atrasos de Pagamento
                                </strong>
                            </p>
                            <p className="ml-4">
                                Em caso de não pagamento, suspenderemos o acesso
                                até regularização. Após 60 dias, a conta pode
                                ser cancelada e os dados eliminados.
                            </p>
                        </div>
                    </section>

                    {/* Seção 8 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            8. Limitação de Responsabilidade
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">8.1.</strong> Na
                                máxima extensão permitida por lei, a PrimeFlow
                                não será responsável por:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Danos indiretos, incidentais, especiais ou
                                    consequenciais
                                </li>
                                <li>
                                    Perda de lucros, receitas, dados ou
                                    oportunidades de negócio
                                </li>
                                <li>
                                    Interrupções temporárias do serviço
                                    (manutenção, falhas técnicas)
                                </li>
                                <li>
                                    Ações de terceiros (hackers, ataques DDoS)
                                </li>
                                <li>
                                    Decisões tomadas com base nos dados da
                                    plataforma
                                </li>
                            </ul>
                            <p className="mt-4">
                                <strong className="text-white">8.2.</strong>{" "}
                                Nossa responsabilidade total está limitada ao
                                valor pago nos últimos 12 meses.
                            </p>
                            <p>
                                <strong className="text-white">8.3.</strong>{" "}
                                Esta limitação não se aplica em caso de dolo ou
                                negligência grave da nossa parte.
                            </p>
                        </div>
                    </section>

                    {/* Seção 9 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            9. Indemnização
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Você concorda em indemnizar e isentar a
                                PrimeFlow, seus administradores, colaboradores e
                                parceiros de quaisquer reclamações, danos,
                                perdas ou despesas (incluindo honorários
                                advocatícios) resultantes de:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Violação destes Termos</li>
                                <li>Violação de direitos de terceiros</li>
                                <li>Uso indevido da plataforma</li>
                                <li>
                                    Informações falsas ou enganosas fornecidas
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Seção 10 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            10. Proteção de Dados
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                O tratamento de dados pessoais é regido pela
                                nossa{" "}
                                <Link
                                    href="/privacy"
                                    className="text-indigo-400 hover:text-indigo-300 font-semibold"
                                >
                                    Política de Privacidade
                                </Link>
                                , em conformidade com o RGPD e legislação
                                portuguesa aplicável.
                            </p>
                        </div>
                    </section>

                    {/* Seção 11 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            11. Rescisão
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">
                                    11.1. Por Você
                                </strong>
                            </p>
                            <p className="ml-4">
                                Pode cancelar a sua conta a qualquer momento
                                através das definições ou contactando-nos.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    11.2. Por Nós
                                </strong>
                            </p>
                            <p className="ml-4">
                                Podemos rescindir ou suspender o acesso
                                imediatamente em caso de violação destes Termos.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    11.3. Efeitos da Rescisão
                                </strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Perda de acesso imediato à plataforma</li>
                                <li>
                                    Dados mantidos por 30 dias para recuperação
                                    (mediante pedido)
                                </li>
                                <li>
                                    Após 30 dias, eliminação permanente dos
                                    dados
                                </li>
                                <li>
                                    Backup de segurança mantido por 90 dias
                                    (obrigações legais)
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Seção 12 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            12. Lei Aplicável e Resolução de Litígios
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">
                                    12.1. Lei Aplicável
                                </strong>
                            </p>
                            <p className="ml-4">
                                Estes Termos são regidos pela lei portuguesa e
                                europeia aplicável.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    12.2. Jurisdição
                                </strong>
                            </p>
                            <p className="ml-4">
                                Para resolução de litígios, são competentes os
                                tribunais da comarca de Lisboa, Portugal, com
                                renúncia expressa a qualquer outro foro.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    12.3. Resolução Alternativa de Litígios
                                </strong>
                            </p>
                            <p className="ml-4">
                                Em conformidade com a Lei n.º 144/2015,
                                informamos que pode recorrer a entidades de
                                resolução alternativa de litígios de consumo:
                            </p>
                            <div className="bg-slate-800/50 rounded-lg p-4 ml-4 mt-2">
                                <p className="font-semibold text-white mb-2">
                                    Centro de Arbitragem de Conflitos de Consumo
                                    de Lisboa
                                </p>
                                <p className="text-sm">
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href="http://www.centroarbitragemlisboa.pt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-400 hover:text-indigo-300"
                                    >
                                        www.centroarbitragemlisboa.pt
                                    </a>
                                </p>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 ml-4 mt-2">
                                <p className="font-semibold text-white mb-2">
                                    Plataforma Europeia de Resolução de Litígios
                                    em Linha
                                </p>
                                <p className="text-sm">
                                    <strong>Website:</strong>{" "}
                                    <a
                                        href="https://ec.europa.eu/consumers/odr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-400 hover:text-indigo-300"
                                    >
                                        https://ec.europa.eu/consumers/odr
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Seção 13 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            13. Disposições Gerais
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">
                                    13.1. Acordo Integral
                                </strong>
                            </p>
                            <p className="ml-4">
                                Estes Termos constituem o acordo integral entre
                                você e a PrimeFlow.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    13.2. Invalidade Parcial
                                </strong>
                            </p>
                            <p className="ml-4">
                                Se qualquer disposição for considerada inválida,
                                as restantes permanecem em vigor.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    13.3. Renúncia
                                </strong>
                            </p>
                            <p className="ml-4">
                                A não aplicação de qualquer direito não
                                constitui renúncia ao mesmo.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    13.4. Cessão
                                </strong>
                            </p>
                            <p className="ml-4">
                                Você não pode ceder estes Termos sem o nosso
                                consentimento prévio. Podemos ceder livremente
                                os nossos direitos e obrigações.
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">
                                    13.5. Idioma
                                </strong>
                            </p>
                            <p className="ml-4">
                                Em caso de conflito entre versões linguísticas,
                                prevalece a versão em português.
                            </p>
                        </div>
                    </section>

                    {/* Seção 14 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            14. Contacto
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>Para questões sobre estes Termos e Condições:</p>
                            <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-6">
                                <div className="space-y-2">
                                    <p>
                                        <strong className="text-white">
                                            Email:
                                        </strong>{" "}
                                        <a
                                            href="mailto:legal@primeflow.pt"
                                            className="text-indigo-400 hover:text-indigo-300"
                                        >
                                            legal@primeflow.pt
                                        </a>
                                    </p>
                                    <p>
                                        <strong className="text-white">
                                            Assunto:
                                        </strong>{" "}
                                        Termos e Condições
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Livro de Reclamações */}
                    <section className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-amber-300">
                            📖 Livro de Reclamações
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                De acordo com a legislação portuguesa,
                                disponibilizamos acesso ao Livro de Reclamações
                                Eletrónico:
                            </p>
                            <a
                                href="https://www.livroreclamacoes.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-4"
                            >
                                Aceder ao Livro de Reclamações
                            </a>
                        </div>
                    </section>
                </div>

                {/* Botão Voltar */}
                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                    >
                        ← Voltar à Página Inicial
                    </Link>
                </div>
            </div>
        </div>
    );
}
