"use client";

import React, { useState, useEffect } from "react";
import FeatureCard from "@/app/components/FeatureCard/FeatureCard";
import FeatureSkeleton from "@/app/components/Skeleton/Skeleton";
import { RegisterModal, LoginModal } from "@/app/components/PopUp/PopUp";
import { usePathname, useRouter } from "next/navigation";

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

        const router = useRouter();
    

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
        <div className="relative min-h-screen py-24 bg-slate-950 relative overflow-hidden">
            <div className="relative z-0">
                <div className="text-center text-white mt-20">
                    <h1 className="text-5xl font-bold mb-4">
                        PrimeFLOW <strong>Clientes</strong>
                    </h1>
                    <p className="text-xl text-gray-200">
                        Gerencie sua base de clientes de forma eficiente
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                    <div className="space-y-20">
                        {loadedCards[0] ? (
                            <FeatureCard
                                badge="🔍 Pesquisa de Clientes"
                                title="Encontre Qualquer Cliente"
                                description="Sistema de busca avançada para encontrar clientes rapidamente."
                                items={[
                                    {
                                        emoji: "👤",
                                        label: "Nome",
                                        description: "Busque por nome completo",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "Email",
                                        description:
                                            "Filtre por endereço de email",
                                    },
                                    {
                                        emoji: "📞",
                                        label: "Telefone",
                                        description:
                                            "Encontre por número de telefone",
                                    },
                                ]}
                                imageName="Customers Screen"
                                imageAlt="Busca de Clientes"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {loadedCards[1] ? (
                            <FeatureCard
                                badge="📋 Lista Completa"
                                title="Base de Clientes"
                                description="Visualize todos os seus clientes em uma interface organizada."
                                items={[
                                    {
                                        emoji: "👥",
                                        label: "Avatar e Nome",
                                        description: "Identificação visual",
                                    },
                                    {
                                        emoji: "📧",
                                        label: "Email",
                                        description: "Contato direto",
                                    },
                                    {
                                        emoji: "📄",
                                        label: "Paginação",
                                        description: "Navegue facilmente",
                                    },
                                ]}
                                imageName="Customers Screen"
                                imageAlt="Lista de Clientes"
                                imagePosition="left"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}

                        {loadedCards[2] ? (
                            <FeatureCard
                                badge="⚙️ Gestão"
                                title="Criar e Editar Clientes"
                                description="Controle total sobre sua base de clientes."
                                items={[
                                    {
                                        emoji: "➕",
                                        label: "Adicionar",
                                        description:
                                            "Novos clientes facilmente",
                                    },
                                    {
                                        emoji: "✏️",
                                        label: "Editar",
                                        description: "Atualize informações",
                                    },
                                    {
                                        emoji: "🗑️",
                                        label: "Remover",
                                        description: "Delete quando necessário",
                                    },
                                ]}
                                imageName="Customers Screen"
                                imageAlt="Gestão de Clientes"
                                imagePosition="right"
                            />
                        ) : (
                            <FeatureSkeleton />
                        )}
                    </div>

                    <div className="mt-20 text-center bg-gradient-to-b from-gray-900 to-gray-400 rounded-2xl p-12 text-white shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Pronto para otimizar sua gestão de clientes?
                        </h3>
                        <p className="text-xl text-purple-100 mb-8">
                            Com <strong>PrimeFLOW</strong> mantenha sua base de
                            clientes organizada e acessível.
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
