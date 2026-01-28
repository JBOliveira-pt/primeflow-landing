"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FeatureCard from "@/app/components/featureCard/featureCard";
import FeatureSkeleton from "@/app/components/skeleton/skeleton";
import { RegisterModal, LoginModal } from "@/app/components/popUp/popUp";

export default function CustomersDemoPage() {
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
                        PrimeFlow <strong>Customers</strong>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Gerencie e acompanhe todos os seus clientes em um único
                        lugar
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 py-16">
                    {/* Features Grid */}
                    <div className="space-y-20">
                        {/* Feature 1: Search Customers */}
                        {loadedCards[0] ? (
                            <FeatureCard
                                badge="🔍 Busca Inteligente"
                                title="Localize Clientes Facilmente"
                                description="Encontre seus clientes rapidamente com filtros avançados e busca por múltiplos campos."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Nome",
                                        description:
                                            "pesquise por nome completo ou parcial",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "E-mail",
                                        description:
                                            "filtre por endereço de e-mail",
                                    },
                                    {
                                        emoji: "📞",
                                        label: "Telefone",
                                        description:
                                            "busque por número de telefone",
                                    },
                                    {
                                        emoji: "🏢",
                                        label: "Empresa",
                                        description:
                                            "encontre por nome da empresa",
                                    },
                                    {
                                        emoji: "📍",
                                        label: "Localização",
                                        description:
                                            "filtre por cidade ou país",
                                    },
                                ]}
                                imageSrc="/images/search-customers.png"
                                imageAlt="Pesquisa de Customers"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 2: Customer Directory */}
                        {loadedCards[1] ? (
                            <FeatureCard
                                badge="📋 Diretório Completo"
                                title="Visão Geral de Clientes"
                                description="Acesse informações completas de todos os seus clientes em uma tabela organizada e fácil de navegar."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Avatar & Nome",
                                        description:
                                            "Foto de perfil e nome do cliente",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "Email",
                                        description:
                                            "Endereço de e-mail para contato",
                                    },
                                    {
                                        emoji: "💰",
                                        label: "Total Invoices",
                                        description:
                                            "Quantidade de faturas por cliente",
                                    },
                                    {
                                        emoji: "💵",
                                        label: "Total Paid",
                                        description:
                                            "Valor total pago pelo cliente",
                                    },
                                    {
                                        emoji: "⏰",
                                        label: "Status",
                                        description: "Ativo ou Inativo",
                                    },
                                    {
                                        emoji: "📄",
                                        label: "Paginação",
                                        description:
                                            "Navegue por todos os clientes",
                                    },
                                ]}
                                imageSrc="/images/table-customers.png"
                                imageAlt="Tabela de Customers"
                                imagePosition="left"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 3: Manage Customers */}
                        {loadedCards[2] ? (
                            <FeatureCard
                                badge="⚙️ Administração"
                                title="Adicionar e Gerenciar Clientes"
                                description="Controle total sobre o cadastro de clientes com operações completas de CRUD."
                                items={[
                                    {
                                        emoji: "➕",
                                        label: "Add Customer",
                                        description:
                                            "Crie novos clientes com formulário completo",
                                    },
                                    {
                                        emoji: "✏️",
                                        label: "Edit",
                                        description:
                                            "Atualize informações de clientes existentes",
                                    },
                                    {
                                        emoji: "🗑️",
                                        label: "Delete",
                                        description:
                                            "Remova clientes do sistema quando necessário",
                                    },
                                    {
                                        emoji: "📊",
                                        label: "Ver Detalhes",
                                        description:
                                            "Acesse histórico e métricas do cliente",
                                    },
                                    {
                                        emoji: "🔒",
                                        label: "Controle de Acesso",
                                        description:
                                            "Apenas administradores podem gerir clientes",
                                    },
                                ]}
                                imageSrc="/images/editdelete-customers.png"
                                imageAlt="Gerenciar Customers"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-20 text-center bg-gradient-to-b from-gray-900 to-gray-400 rounded-2xl p-12 text-white shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Organize sua base de clientes
                        </h3>
                        <p className="text-xl text-purple-100 mb-8">
                            O <strong>PrimeFlow</strong> oferece uma plataforma
                            centralizada para gerenciar todos os dados dos seus
                            clientes.
                            <br />
                            Melhore sua eficiência e fortaleça relacionamentos
                            com clientes.
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
