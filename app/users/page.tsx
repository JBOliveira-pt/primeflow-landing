"use client";

import React, { useState, useEffect } from "react";
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
            <div className="relative z-0">
                <div className="text-center text-white mt-20">
                    <h1 className="text-5xl font-bold mb-4">
                        PrimeFLOW <strong>Utilizadores</strong>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Gerencie utilizadores e permissões com segurança
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                    <div className="space-y-20">
                        {loadedCards[0] ? (
                            <FeatureCard
                                badge="👥 Gestão de Utilizadores"
                                title="Controle Total de Acesso"
                                description="Gerencie todos os utilizadores da plataforma com segurança."
                                items={[
                                    {
                                        emoji: "🔐",
                                        label: "Autenticação",
                                        description: "Login seguro",
                                    },
                                    {
                                        emoji: "👤",
                                        label: "Perfis",
                                        description: "Gestão de perfis",
                                    },
                                    {
                                        emoji: "🛡️",
                                        label: "Permissões",
                                        description: "Controle de acesso",
                                    },
                                ]}
                                imageName="Users Screen"
                                imageAlt="Gestão de Usuários"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {loadedCards[1] ? (
                            <FeatureCard
                                badge="🔒 Segurança"
                                title="Proteção de Dados"
                                description="Segurança avançada para proteger informações sensíveis."
                                items={[
                                    {
                                        emoji: "🔑",
                                        label: "Criptografia",
                                        description: "Dados criptografados",
                                    },
                                    {
                                        emoji: "📝",
                                        label: "Logs",
                                        description: "Auditoria completa",
                                    },
                                    {
                                        emoji: "⚡",
                                        label: "2FA",
                                        description:
                                            "Autenticação de dois fatores",
                                    },
                                ]}
                                imageName="Users Screen"
                                imageAlt="Segurança de Usuários"
                                imagePosition="left"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {loadedCards[2] ? (
                            <FeatureCard
                                badge="⚙️ Administração"
                                title="Painel Administrativo"
                                description="Ferramentas completas para administração de usuários."
                                items={[
                                    {
                                        emoji: "➕",
                                        label: "Criar",
                                        description: "Adicionar novos usuários",
                                    },
                                    {
                                        emoji: "✏️",
                                        label: "Editar",
                                        description: "Modificar permissões",
                                    },
                                    {
                                        emoji: "🚫",
                                        label: "Suspender",
                                        description: "Desativar contas",
                                    },
                                ]}
                                imageName="Users Screen"
                                imageAlt="Administração de Usuários"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}
                    </div>

                    <div className="mt-20 text-center bg-gradient-to-b from-gray-900 to-gray-400 rounded-2xl p-12 text-white shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Pronto para gerenciar usuários com segurança?
                        </h3>
                        <p className="text-xl text-purple-100 mb-8">
                            Com <strong>PrimeFLOW</strong> tenha controle total
                            sobre acessos e permissões.
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
