"use client";

import React, { useState, useEffect } from "react";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import FeatureSkeleton from "../components/Skeleton/Skeleton";
import { usePathname, useRouter } from "next/navigation";
export default function DashboardDemoPage() {
    const [loadedCards, setLoadedCards] = useState<boolean[]>([
        false,
        false,
        false,
    ]);

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const router = useRouter();

    const toggleToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

   const handleLoginClick = (e?: React.MouseEvent) => {
               e?.preventDefault();
               setIsLoginOpen(false);
               router.push("https://primeflow-app.vercel.app/login");
           };

    useEffect(() => {
        const delays = [1000, 3000, 5000];

        delays.forEach((delay, index) => {
            setTimeout(() => {
                setLoadedCards((prev) => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                });
            }, delay);
        });
    }, []);

    return (
        <div className="min-h-screen py-24 bg-slate-950">
            {/* Conteúdo */}
            <div className="relative z-0 w-full max-w-full">
                {/* Header */}
                <div className="text-center text-white mt-20">
                    <h1 className="text-5xl font-bold mb-4">
                        PrimeFLOW <strong>Dashboard</strong>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Gerencie seus clientes e faturas em um só lugar
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
                    {/* Features Grid */}
                    <div className="space-y-20">
                        {/* Feature 1: Stats Cards */}
                        {loadedCards[0] ? (
                            <FeatureCard
                                badge="📊 Métricas em Tempo Real"
                                title="Visão Financeira Global"
                                description="Acompanhe instantaneamente o desempenho do seu negócio com 4 indicadores essenciais:"
                                items={[
                                    {
                                        emoji: "💰",
                                        label: "Collected",
                                        description:
                                            "total já recebido de invoices pagas",
                                    },
                                    {
                                        emoji: "⏰",
                                        label: "Pending",
                                        description:
                                            "valor de invoices ainda pendentes",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "Total Invoices",
                                        description:
                                            "número total de faturas criadas",
                                    },
                                    {
                                        emoji: "👥",
                                        label: "Total Customers",
                                        description: "base total de clientes",
                                    },
                                ]}
                                imageName="Finance Overview"
                                imageAlt="Stats Cards - Visão Geral Financeira"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 2: Recent Revenue */}
                        {loadedCards[1] ? (
                            <FeatureCard
                                badge="📈 Análise de Receita"
                                title="Recent Revenue"
                                description="Visualize a evolução da sua receita ao longo do tempo com um gráfico intuitivo de barras."
                                items={[
                                    {
                                        emoji: "📊",
                                        label: "Últimos 12 meses",
                                        description:
                                            "Mostra os últimos 12 meses de receita",
                                    },
                                    {
                                        emoji: "👁️",
                                        label: "Tendências",
                                        description:
                                            "Identifique tendências e padrões facilmente",
                                    },
                                    {
                                        emoji: "💡",
                                        label: "Decisões",
                                        description:
                                            "Tome decisões informadas sobre seu negócio",
                                    },
                                ]}
                                imageName="Recent Revenue"
                                imageAlt="Recent Revenue - Gráfico de 12 meses"
                                imagePosition="left"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 3: Latest Invoices */}
                        {loadedCards[2] ? (
                            <FeatureCard
                                badge="🧾 Atividade Recente"
                                title="Latest Invoices"
                                description="Acompanhe as últimas transações com detalhes completos dos seus clientes."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Nome e email",
                                        description: "do cliente",
                                    },
                                    {
                                        emoji: "💵",
                                        label: "Valor",
                                        description: "da fatura",
                                    },
                                    {
                                        emoji: "📅",
                                        label: "Data de recebimento",
                                        description: "da fatura",
                                    },
                                    {
                                        emoji: "🔄",
                                        label: "Tempo real",
                                        description: "Atualizado em tempo real",
                                    },
                                ]}
                                imageName="Latest Invoices"
                                imageAlt="Latest Invoices - Últimas 5 faturas"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-20 text-center bg-gradient-to-b from-gray-900 to-gray-400 rounded-2xl p-12 text-white shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Pronto para otimizar sua gestão?
                        </h3>
                        <p className="text-xl text-gray-300 mb-8">
                            O <strong>PrimeFLOW</strong> simplifica o controle
                            de clientes e faturas.
                            <br />
                            Experimente agora e transforme a maneira como você
                            gerencia seu negócio.
                        </p>
                        <button
                            onClick={() => handleLoginClick()}
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors shadow-lg cursor-pointer"
                        >
                            Começar Agora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
