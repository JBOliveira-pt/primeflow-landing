"use client";

import { BarChart3, Zap, ShieldCheck, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FeatureCard = ({
    icon,
    title,
    description,
    href,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}) => (
    <Link
        href={href}
        className="block h-full p-8 bg-slate-900/40 rounded-3xl border border-slate-800 
               hover:border-indigo-500/50 transition-all group cursor-pointer"
    >
        <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-slate-400 leading-relaxed mb-5">{description}</p>
        <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
            Saber mais{" "}
            <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
            />
        </div>
    </Link>
);

export default function Features() {
    return (
        <section id="Funcionalidades" className="py-20 bg-slate-950">
            <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            {/* Decorative corner glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">
                        Poder Imparável
                    </h2>
                    <p className="text-4xl md:text-5xl font-black mb-6 text-white">
                        Tudo o que sua empresa precisa
                    </p>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Desenvolvemos cada recurso focando em performance e
                        facilidade de uso...
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8  mx-auto justify-items-center">
                    <div className="">
                        <FeatureCard
                            icon={<BarChart3 size={24} />}
                            title="Dashboards Personalizáveis"
                            description="Filtros dinâmicos e drill-down profundo para entender cada centavo do seu faturamento."
                            href="/dashboard"
                        />
                    </div>

                    <div className="">
                        <FeatureCard
                            icon={<Zap size={24} />}
                            title="Invoices"
                            description="Processamento em nuvem otimizado que carrega milhões de linhas em milissegundos."
                            href="/invoices"
                        />
                    </div>

                    <div className="">
                        <FeatureCard
                            icon={<ShieldCheck size={24} />}
                            title="Customers"
                            description="Criptografia de ponta a ponta e conformidade total com LGPD para seus dados sensíveis."
                            href="/customers"
                        />
                    </div>

                    <div className="">
                        <FeatureCard
                            icon={<Globe size={24} />}
                            title="Usuários"
                            description="Suporte a conversão automática de moedas e fusos horários para operações globais."
                            href="/users"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
