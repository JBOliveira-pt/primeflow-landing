"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard/FeatureCard";
import FeatureSkeleton from "@/app/components/Skeleton/Skeleton";
import { RegisterModal, LoginModal } from "@/app/components/PopUp/PopUp";

export default function UsersDemoPage() {
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
                        PrimeFlow <strong>Users</strong>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Gerencie usuários e controle de acesso da sua aplicação
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 py-16">
                    {/* Features Grid */}
                    <div className="space-y-20">
                        {/* Feature 1: Search Users */}
                        {loadedCards[0] ? (
                            <FeatureCard
                                badge="🔍 Busca de Usuários"
                                title="Encontre Usuários no Sistema"
                                description="Localize rapidamente qualquer usuário através de filtros avançados e busca por múltiplos campos."
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
                                            "busque por endereço de e-mail",
                                    },
                                    {
                                        emoji: "🏷️",
                                        label: "Role",
                                        description:
                                            "filtre por tipo de usuário",
                                    },
                                    {
                                        emoji: "✅",
                                        label: "Status",
                                        description: "ativo ou inativo",
                                    },
                                    {
                                        emoji: "📅",
                                        label: "Data de Criação",
                                        description:
                                            "busque por período de registro",
                                    },
                                ]}
                                imageSrc="/images/search-users.png"
                                imageAlt="Pesquisa de Users"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 2: User Management */}
                        {loadedCards[1] ? (
                            <FeatureCard
                                badge="👥 Gestão de Usuários"
                                title="Painel de Controle de Usuários"
                                description="Visualize e administre todos os usuários do sistema com informações detalhadas e controles avançados."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Avatar & Nome",
                                        description:
                                            "Foto de perfil e nome completo",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "Email",
                                        description:
                                            "Endereço de e-mail do usuário",
                                    },
                                    {
                                        emoji: "🎯",
                                        label: "Role",
                                        description: "Admin ou Usuário padrão",
                                    },
                                    {
                                        emoji: "✅",
                                        label: "Status",
                                        description: "Ativo ou Desativado",
                                    },
                                    {
                                        emoji: "📅",
                                        label: "Data de Acesso",
                                        description: "Último acesso ao sistema",
                                    },
                                    {
                                        emoji: "📄",
                                        label: "Paginação",
                                        description:
                                            "Navegue por todos os usuários",
                                    },
                                ]}
                                imageSrc="/images/table-users.png"
                                imageAlt="Tabela de Users"
                                imagePosition="left"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {/* Feature 3: User Control & Permissions */}
                        {loadedCards[2] ? (
                            <FeatureCard
                                badge="🔐 Controle de Acesso"
                                title="Permissões e Segurança"
                                description="Controle total sobre permissões de usuários e operações de gerenciamento com auditoria completa."
                                items={[
                                    {
                                        emoji: "➕",
                                        label: "Add User",
                                        description:
                                            "Convide novos usuários para o sistema",
                                    },
                                    {
                                        emoji: "✏️",
                                        label: "Edit",
                                        description:
                                            "Modifique dados e permissões de usuários",
                                    },
                                    {
                                        emoji: "🗑️",
                                        label: "Delete",
                                        description:
                                            "Remova usuários do sistema",
                                    },
                                    {
                                        emoji: "🔑",
                                        label: "Atribuir Roles",
                                        description:
                                            "Defina permissões e níveis de acesso",
                                    },
                                    {
                                        emoji: "📋",
                                        label: "Auditoria",
                                        description:
                                            "Registre todas as ações dos usuários",
                                    },
                                ]}
                                imageSrc="/images/editdelete-users.png"
                                imageAlt="Controle de Users"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-20 text-center bg-gradient-to-b from-gray-900 to-gray-400 rounded-2xl p-12 text-white shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Segurança e Controle Total
                        </h3>
                        <p className="text-xl text-purple-100 mb-8">
                            O <strong>PrimeFlow</strong> oferece uma solução
                            completa para gerenciamento de usuários e
                            permissões.
                            <br />
                            Mantenha sua aplicação segura e organize o acesso
                            com precisão.
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
