"use client";

import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, AlertCircle } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-full mb-6">
                        <Shield className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Política de Privacidade
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

                {/* Alerta RGPD */}
                <div className="bg-indigo-900/20 border border-indigo-700/50 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-indigo-300 mb-2">
                                Conformidade com o RGPD
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                A PrimeFlow está sediada em Portugal e opera em
                                conformidade com o Regulamento Geral sobre a
                                Proteção de Dados (RGPD) da União Europeia
                                (Regulamento UE 2016/679) e a Lei n.º 58/2019 de
                                8 de agosto.
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
                                1. Identificação do Responsável
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <strong className="text-white">
                                    Entidade:
                                </strong>{" "}
                                PrimeFlow - Soluções de Gestão Financeira, Lda.
                            </p>
                            <p>
                                <strong className="text-white">NIF:</strong>{" "}
                                [Número de Identificação Fiscal]
                            </p>
                            <p>
                                <strong className="text-white">Sede:</strong>{" "}
                                [Morada completa], Portugal
                            </p>
                            <p>
                                <strong className="text-white">Email:</strong>{" "}
                                <a
                                    href="mailto:dpo@primeflow.pt"
                                    className="text-indigo-400 hover:text-indigo-300"
                                >
                                    dpo@primeflow.pt
                                </a>
                            </p>
                            <p>
                                <strong className="text-white">
                                    Encarregado de Proteção de Dados (DPO):
                                </strong>{" "}
                                <a
                                    href="mailto:dpo@primeflow.pt"
                                    className="text-indigo-400 hover:text-indigo-300"
                                >
                                    dpo@primeflow.pt
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Seção 2 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Eye className="w-6 h-6 text-indigo-400" />
                            <h2 className="text-2xl font-bold">
                                2. Dados Pessoais Recolhidos
                            </h2>
                        </div>
                        <div className="space-y-6 text-slate-300">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    2.1. Dados de Registo
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Nome completo</li>
                                    <li>Endereço de email</li>
                                    <li>Palavra-passe (encriptada)</li>
                                    <li>Data de registo</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    2.2. Dados de Utilização
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Endereço IP</li>
                                    <li>Tipo de navegador e dispositivo</li>
                                    <li>
                                        Páginas visitadas e tempo de permanência
                                    </li>
                                    <li>Data e hora de acesso</li>
                                    <li>Cookies técnicos e analíticos</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    2.3. Newsletter
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Nome</li>
                                    <li>Endereço de email</li>
                                    <li>Data de subscrição</li>
                                    <li>Consentimento expresso</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Seção 3 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="w-6 h-6 text-indigo-400" />
                            <h2 className="text-2xl font-bold">
                                3. Finalidade e Base Legal
                            </h2>
                        </div>
                        <div className="space-y-6 text-slate-300">
                            <div className="bg-slate-800/50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    3.1. Execução de Contrato
                                </h3>
                                <p>
                                    Os dados são tratados para permitir o acesso
                                    e utilização da plataforma PrimeFlow,
                                    incluindo gestão de conta, dashboard,
                                    invoices e customers.
                                </p>
                                <p className="text-sm text-slate-400 mt-2">
                                    <strong>Base Legal:</strong> Artigo 6.º, n.º
                                    1, alínea b) do RGPD
                                </p>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    3.2. Consentimento
                                </h3>
                                <p>
                                    Newsletter e comunicações de marketing
                                    direto são enviadas mediante consentimento
                                    expresso e informado do titular dos dados.
                                </p>
                                <p className="text-sm text-slate-400 mt-2">
                                    <strong>Base Legal:</strong> Artigo 6.º, n.º
                                    1, alínea a) do RGPD
                                </p>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    3.3. Obrigação Legal
                                </h3>
                                <p>
                                    Conservação de dados para cumprimento de
                                    obrigações fiscais e contabilísticas
                                    estabelecidas pela legislação portuguesa.
                                </p>
                                <p className="text-sm text-slate-400 mt-2">
                                    <strong>Base Legal:</strong> Artigo 6.º, n.º
                                    1, alínea c) do RGPD
                                </p>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    3.4. Interesse Legítimo
                                </h3>
                                <p>
                                    Análise estatística e melhoria dos serviços,
                                    prevenção de fraude e segurança da
                                    plataforma.
                                </p>
                                <p className="text-sm text-slate-400 mt-2">
                                    <strong>Base Legal:</strong> Artigo 6.º, n.º
                                    1, alínea f) do RGPD
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Seção 4 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            4. Partilha de Dados
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                A PrimeFlow não vende, aluga ou partilha dados
                                pessoais com terceiros para fins de marketing.
                                Os dados apenas são partilhados nas seguintes
                                situações:
                            </p>
                            <div className="space-y-3 ml-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">
                                        4.1. Prestadores de Serviços
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                                        <li>
                                            Neon Database (alojamento de base de
                                            dados - EUA, com cláusulas
                                            contratuais-tipo)
                                        </li>
                                        <li>
                                            Vercel (alojamento web - EUA, com
                                            cláusulas contratuais-tipo)
                                        </li>
                                        <li>
                                            Serviços de email transacional (em
                                            conformidade com RGPD)
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">
                                        4.2. Obrigações Legais
                                    </h3>
                                    <p className="text-sm">
                                        Quando legalmente obrigados por
                                        autoridades competentes (e.g., AT, CNPD,
                                        tribunais).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Seção 5 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            5. Transferências Internacionais
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Alguns dos nossos prestadores de serviços estão
                                localizados fora da União Europeia (nomeadamente
                                EUA). Todas as transferências são realizadas com
                                garantias adequadas:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Cláusulas contratuais-tipo aprovadas pela
                                    Comissão Europeia
                                </li>
                                <li>
                                    Certificações de adequação (quando
                                    aplicável)
                                </li>
                                <li>
                                    Medidas técnicas e organizativas
                                    complementares
                                </li>
                            </ul>
                            <p className="text-sm text-slate-400 mt-4">
                                <strong>Referência Legal:</strong> Artigos 44.º
                                a 50.º do RGPD
                            </p>
                        </div>
                    </section>

                    {/* Seção 6 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            6. Prazo de Conservação
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        Dados de Conta
                                    </h3>
                                    <p className="text-sm">
                                        Durante o período de conta ativa + 5
                                        anos após encerramento (obrigações
                                        fiscais)
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        Newsletter
                                    </h3>
                                    <p className="text-sm">
                                        Até revogação do consentimento ou 3 anos
                                        sem interação
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        Logs de Acesso
                                    </h3>
                                    <p className="text-sm">
                                        6 meses (segurança e prevenção de
                                        fraude)
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="font-semibold text-white mb-2">
                                        Cookies Analíticos
                                    </h3>
                                    <p className="text-sm">
                                        Máximo de 13 meses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Seção 7 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            7. Direitos dos Titulares
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p className="mb-6">
                                Em conformidade com o RGPD, tem os seguintes
                                direitos:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4">
                                    <h3 className="font-semibold text-indigo-300 mb-2">
                                        ✓ Direito de Acesso
                                    </h3>
                                    <p className="text-sm">
                                        Obter confirmação e cópia dos seus dados
                                        pessoais (Art.º 15.º RGPD)
                                    </p>
                                </div>
                                <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4">
                                    <h3 className="font-semibold text-indigo-300 mb-2">
                                        ✓ Direito de Retificação
                                    </h3>
                                    <p className="text-sm">
                                        Corrigir dados inexatos ou incompletos
                                        (Art.º 16.º RGPD)
                                    </p>
                                </div>
                                <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4">
                                    <h3 className="font-semibold text-indigo-300 mb-2">
                                        ✓ Direito ao Apagamento
                                    </h3>
                                    <p className="text-sm">
                                        Solicitar eliminação dos dados ("direito
                                        a ser esquecido") (Art.º 17.º RGPD)
                                    </p>
                                </div>
                                <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4">
                                    <h3 className="font-semibold text-indigo-300 mb-2">
                                        ✓ Direito à Limitação
                                    </h3>
                                    <p className="text-sm">
                                        Limitar o tratamento em situações
                                        específicas (Art.º 18.º RGPD)
                                    </p>
                                </div>
                                <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4">
                                    <h3 className="font-semibold text-indigo-300 mb-2">
                                        ✓ Direito à Portabilidade
                                    </h3>
                                    <p className="text-sm">
                                        Receber dados em formato estruturado e
                                        transferível (Art.º 20.º RGPD)
                                    </p>
                                </div>
                                <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4">
                                    <h3 className="font-semibold text-indigo-300 mb-2">
                                        ✓ Direito de Oposição
                                    </h3>
                                    <p className="text-sm">
                                        Opor-se ao tratamento baseado em
                                        interesse legítimo (Art.º 21.º RGPD)
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-6 mt-6">
                                <h3 className="font-semibold text-white mb-3">
                                    Como Exercer os Seus Direitos
                                </h3>
                                <p className="mb-4">
                                    Para exercer qualquer um destes direitos,
                                    contacte-nos através de:
                                </p>
                                <div className="space-y-2">
                                    <p>
                                        <strong className="text-white">
                                            Email:
                                        </strong>{" "}
                                        <a
                                            href="mailto:dpo@primeflow.pt"
                                            className="text-indigo-400 hover:text-indigo-300"
                                        >
                                            dpo@primeflow.pt
                                        </a>
                                    </p>
                                    <p className="text-sm text-slate-400">
                                        Responderemos no prazo de 1 mês
                                        (prorrogável por mais 2 meses em casos
                                        complexos).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Seção 8 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            8. Segurança
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Implementamos medidas técnicas e organizativas
                                para proteger os seus dados:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Encriptação de dados em trânsito (HTTPS/TLS)
                                </li>
                                <li>
                                    Encriptação de passwords (hashing bcrypt)
                                </li>
                                <li>Autenticação segura</li>
                                <li>Backups regulares e seguros</li>
                                <li>
                                    Acesso restrito a dados pessoais
                                    (need-to-know basis)
                                </li>
                                <li>
                                    Monitorização de acessos e logs de segurança
                                </li>
                                <li>Testes de segurança periódicos</li>
                            </ul>
                        </div>
                    </section>

                    {/* Seção 9 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">9. Cookies</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                O website utiliza cookies essenciais para o seu
                                funcionamento e cookies analíticos (mediante
                                consentimento). Para mais informações, consulte
                                a nossa{" "}
                                <Link
                                    href="/cookies"
                                    className="text-indigo-400 hover:text-indigo-300"
                                >
                                    Política de Cookies
                                </Link>
                                .
                            </p>
                        </div>
                    </section>

                    {/* Seção 10 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            10. Direito de Reclamação
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Se considerar que os seus direitos foram
                                violados, pode apresentar reclamação junto da
                                autoridade de controlo portuguesa:
                            </p>
                            <div className="bg-slate-800/50 rounded-lg p-6 mt-4">
                                <h3 className="font-semibold text-white mb-3">
                                    Comissão Nacional de Proteção de Dados
                                    (CNPD)
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong className="text-white">
                                            Morada:
                                        </strong>{" "}
                                        Av. D. Carlos I, 134, 1.º
                                        <br />
                                        1200-651 Lisboa, Portugal
                                    </p>
                                    <p>
                                        <strong className="text-white">
                                            Telefone:
                                        </strong>{" "}
                                        +351 213 928 400
                                    </p>
                                    <p>
                                        <strong className="text-white">
                                            Email:
                                        </strong>{" "}
                                        <a
                                            href="mailto:geral@cnpd.pt"
                                            className="text-indigo-400 hover:text-indigo-300"
                                        >
                                            geral@cnpd.pt
                                        </a>
                                    </p>
                                    <p>
                                        <strong className="text-white">
                                            Website:
                                        </strong>{" "}
                                        <a
                                            href="https://www.cnpd.pt"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-400 hover:text-indigo-300"
                                        >
                                            www.cnpd.pt
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Seção 11 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            11. Alterações
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Esta Política de Privacidade pode ser atualizada
                                periodicamente. Notificaremos sobre alterações
                                substanciais através do website ou por email. A
                                versão mais recente estará sempre disponível
                                nesta página.
                            </p>
                        </div>
                    </section>

                    {/* Seção 12 */}
                    <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Mail className="w-6 h-6 text-indigo-400" />
                            <h2 className="text-2xl font-bold">12. Contacto</h2>
                        </div>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Para questões relacionadas com privacidade e
                                proteção de dados, contacte o nosso Encarregado
                                de Proteção de Dados:
                            </p>
                            <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-6">
                                <div className="space-y-2">
                                    <p>
                                        <strong className="text-white">
                                            Email:
                                        </strong>{" "}
                                        <a
                                            href="mailto:dpo@primeflow.pt"
                                            className="text-indigo-400 hover:text-indigo-300"
                                        >
                                            dpo@primeflow.pt
                                        </a>
                                    </p>
                                    <p>
                                        <strong className="text-white">
                                            Assunto:
                                        </strong>{" "}
                                        Proteção de Dados - RGPD
                                    </p>
                                </div>
                            </div>
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
