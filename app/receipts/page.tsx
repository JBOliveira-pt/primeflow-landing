"use client";

import React, { useState, useEffect } from "react";
import FeatureCard from "@/app/components/FeatureCard/FeatureCard";
import FeatureSkeleton from "@/app/components/Skeleton/Skeleton";
import { useRouter } from "next/navigation";

export default function ReceiptsDemoPage() {
    const [loadedCards, setLoadedCards] = useState<boolean[]>([
        false,
        false,
        false,
    ]);
    const router = useRouter();

    const handleLoginClick = (e?: React.MouseEvent) => {
        e?.preventDefault();
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
        <div className="relative min-h-screen py-24 bg-slate-950 relative overflow-hidden">
            <div className="relative z-0">
                <div className="text-center text-white mt-20">
                    <h1 className="text-5xl font-bold mb-4">
                        PrimeFLOW <strong>Recibos</strong>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Emita e controle recibos de forma rápida e organizada
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                    <div className="space-y-20">
                        {/* Feature 1: Pesquisa de Recibos */}
                        {loadedCards[0] ? (
                            <FeatureCard
                                badge="🔍 Pesquisa Avançada"
                                title="Encontre Qualquer Recibo"
                                description="Sistema de busca inteligente para localizar recibos por múltiplos critérios."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Nome do Cliente",
                                        description:
                                            "Pesquise por um cliente específico",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "E-mail",
                                        description:
                                            "Filtre por endereço de e-mail",
                                    },
                                    {
                                        emoji: "💵",
                                        label: "Valor",
                                        description:
                                            "Encontre recibos por valores",
                                    },
                                    {
                                        emoji: "📅",
                                        label: "Data",
                                        description:
                                            "Busque por período específico",
                                    },
                                    {
                                        emoji: "🏷️",
                                        label: "Status",
                                        description:
                                            "Filtre entre Pago, Pendente e Cancelado",
                                    },
                                ]}
                                imageName="Pesquisa de Recibos"
                                imageAlt="Pesquisa de Recibos"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 2: Tabela e Detalhes */}
                        {loadedCards[1] ? (
                            <FeatureCard
                                badge="📋 Visualização Completa"
                                title="Histórico de Recibos"
                                description="Visualize todos os detalhes dos seus recibos em uma tabela organizada e intuitiva."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Cliente",
                                        description: "Nome e dados do cliente",
                                    },
                                    {
                                        emoji: "💰",
                                        label: "Valor",
                                        description:
                                            "Montante do recibo formatado",
                                    },
                                    {
                                        emoji: "📅",
                                        label: "Data",
                                        description:
                                            "Data de emissão e pagamento",
                                    },
                                    {
                                        emoji: "✅",
                                        label: "Status",
                                        description:
                                            "Pago, Pendente ou Cancelado",
                                    },
                                    {
                                        emoji: "📄",
                                        label: "Paginação",
                                        description:
                                            "Navegue por todos os recibos",
                                    },
                                ]}
                                imageName="Historico de Recibos"
                                imageAlt="Histórico de Recibos"
                                imagePosition="left"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 3: Emissão e Gestão */}
                        {loadedCards[2] ? (
                            <FeatureCard
                                badge="⚙️ Gestão de Recibos"
                                title="Emitir e Gerir Recibos"
                                description="Controle total sobre a emissão e gestão dos seus recibos."
                                items={[
                                    {
                                        emoji: "➕",
                                        label: "Emitir Recibo",
                                        description:
                                            "Crie novos recibos rapidamente",
                                    },
                                    {
                                        emoji: "✏️",
                                        label: "Editar",
                                        description:
                                            "Atualize informações quando necessário",
                                    },
                                    {
                                        emoji: "📥",
                                        label: "Exportar PDF",
                                        description:
                                            "Exporte e partilhe recibos em PDF",
                                    },
                                    {
                                        emoji: "🗑️",
                                        label: "Remover",
                                        description:
                                            "Delete recibos quando necessário",
                                    },
                                ]}
                                imageName="Gerir os Recibos"
                                imageAlt="Gestão de Recibos"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-20 text-center bg-gradient-to-b from-gray-900 to-gray-400 rounded-2xl p-12 text-white shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Pronto para simplificar a gestão dos seus recibos?
                        </h3>
                        <p className="text-xl text-purple-100 mb-8">
                            Com <strong>PrimeFLOW</strong> emita e controle
                            recibos de forma rápida e centralizada.
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
