"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FeatureCard from "@/app/components/featureCard/featureCard";
import FeatureSkeleton from "@/app/components/skeleton/skeleton";
import { RegisterModal, LoginModal } from "@/app/components/popUp/popUp";

export default function InvoicesDemoPage() {
    const [loadedCards, setLoadedCards] = useState<boolean[]>([
        false,
        false,
        false,
    ]);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const toggleToLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
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
            {/* Conteúdo */}
            <div className="relative z-0">
                {/* Header */}
                <div className="text-center text-white mt-20">
                    <h1 className="text-5xl font-bold mb-4">
                        PrimeFlow <strong>Invoices</strong>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Gerencie todas as suas faturas de forma simples e
                        eficiente
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 py-16">
                    {/* Features Grid */}
                    <div className="space-y-20">
                        {/* Feature 1: Search Invoices */}
                        {loadedCards[0] ? (
                            <FeatureCard
                                badge="🔍 Pesquisa Avançada"
                                title="Encontre Qualquer Fatura"
                                description="Sistema de busca inteligente que permite filtrar suas faturas por múltiplos critérios simultaneamente."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Nome do Cliente",
                                        description:
                                            "pesquise por um cliente específico",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "E-mail",
                                        description:
                                            "filtre por endereço de e-mail",
                                    },
                                    {
                                        emoji: "💵",
                                        label: "Valor",
                                        description:
                                            "encontre faturas por valores",
                                    },
                                    {
                                        emoji: "📅",
                                        label: "Data",
                                        description:
                                            "busque por um período específico",
                                    },
                                    {
                                        emoji: "🏷️",
                                        label: "Status",
                                        description:
                                            "filtre entre Paid e Pending",
                                    },
                                ]}
                                imageSrc="/images/search-invoices.png"
                                imageAlt="Pesquisa de Invoices"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 2: Invoice Table & Details */}
                        {loadedCards[1] ? (
                            <FeatureCard
                                badge="📋 Visualização Completa"
                                title="Todas as Informações"
                                description="Visualize todos os detalhes das suas invoices em uma tabela organizada e intuitiva."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Customer & Avatar",
                                        description: "Nome e foto do cliente",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "Email",
                                        description:
                                            "Contato direto com o cliente",
                                    },
                                    {
                                        emoji: "💰",
                                        label: "Amount",
                                        description:
                                            "Valor da fatura formatado",
                                    },
                                    {
                                        emoji: "📅",
                                        label: "Date",
                                        description:
                                            "Data de criação/vencimento",
                                    },
                                    {
                                        emoji: "✅",
                                        label: "Status",
                                        description:
                                            "Paid (verde) ou Pending (cinza)",
                                    },
                                    {
                                        emoji: "📄",
                                        label: "Paginação",
                                        description:
                                            "Navegue por todas as invoices",
                                    },
                                ]}
                                imageSrc="/images/table-invoices.png"
                                imageAlt="Tabela de Invoices"
                                imagePosition="left"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 3: Create & Edit Invoices */}
                        {loadedCards[2] ? (
                            <FeatureCard
                                badge="⚙️ Gestão Administrativa"
                                title="Criar e Editar Invoices"
                                description="Como administrador, você tem controle total sobre as faturas do sistema."
                                items={[
                                    {
                                        emoji: "➕",
                                        label: "Create Invoice",
                                        description:
                                            "Botão destacado para criar novas faturas",
                                    },
                                    {
                                        emoji: "✏️",
                                        label: "Edit",
                                        description:
                                            "Ícone de edição em cada linha da tabela",
                                    },
                                    {
                                        emoji: "🗑️",
                                        label: "Delete",
                                        description:
                                            "Remova faturas quando necessário",
                                    },
                                    {
                                        emoji: "🔒",
                                        label: "Admin Only",
                                        description:
                                            "Funcionalidades exclusivas para administradores",
                                    },
                                    {
                                        emoji: "⚡",
                                        label: "Rápido e Fácil",
                                        description:
                                            "Interface intuitiva para gestão",
                                    },
                                ]}
                                imageSrc="/images/editdelete-invoices.png"
                                imageAlt="Criar e Editar Invoices"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-20 text-center bg-gradient-to-b from-gray-900 to-gray-400 rounded-2xl p-12 text-white shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Quer simplificar a gestão de suas faturas?
                        </h3>
                        <p className="text-xl text-purple-100 mb-8">
                            Com <strong>PrimeFlow</strong> tenha controle
                            completo sobre suas faturas em um só lugar.
                            <br />
                            Experimente agora e transforme a maneira como você
                            gerencia seu negócio.
                        </p>
                        <button
                            onClick={() => setIsRegisterOpen(true)}
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors shadow-lg cursor-pointer"
                        >
                            Começar Agora
                        </button>
                    </div>
                </div>
            </div>

            <RegisterModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                onToggleLogin={toggleToLogin}
            />
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onToggleRegister={toggleToRegister}
            />
        </div>
    );
}
