"use client";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import React from "react";

export default function Footer() {
    const [email, setEmail] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage("Por favor, insira um email válido.");
            return;
        }

        setIsLoading(true);
        setMessage("");
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Email cadastrado com sucesso!");
                setEmail("");
            } else {
                setMessage(data.error || "Ocorreu um erro. Tente novamente.");
            }
        } catch (error) {
            setMessage("Ocorreu um erro. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <footer
            id="Footer"
            className="bg-slate-950 border-t border-slate-900 pt-20 pb-10"
        >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            {/* Decorative corner glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex justify-center px-4">
                <div className="flex flex-col items-center text-center space-y-12 w-full max-w-6xl">
                    <div className="w-full grid  justify-items-center grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
                        <div className="space-y-6 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start">
                                <Image
                                    src="https://raw.githubusercontent.com/EvertonClaudino/projetoGrup/refs/heads/main/primeflow-darkcirclelogo-nobg.png"
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                                <span className="text-xl font-bold text-white">
                                    Prime FLOW
                                </span>
                            </div>

                            <p className="text-slate-500 text-sm  leading-relaxed">
                                Desbloqueando o potencial oculto nos seus
                                números. Conectamos tecnologia e estratégia para
                                impulsionar o futuro do seu negócio.
                            </p>
                        </div>

                        <div className="text-center md:text-left">
                            <h4 className="font-bold mb-6 text-white">
                                Funcionalidades
                            </h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className="hover:text-white transition-colors hover:underline underline-offset-4"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/invoices"
                                        className="hover:text-white transition-colors hover:underline underline-offset-4"
                                    >
                                        Invoices
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/customers"
                                        className="hover:text-white transition-colors hover:underline underline-offset-4"
                                    >
                                        Customers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/users"
                                        className="hover:text-white transition-colors hover:underline underline-offset-4"
                                    >
                                        Usuários
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-white">
                                Notificações
                            </h4>
                            <p className="text-sm text-slate-400 mb-4">
                                Receba novidades e dicas de análise de dados.
                            </p>
                            <form
                                onSubmit={handleNewsletterSubmit}
                                className="space-y-2"
                            >
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition-colors font-medium whitespace-nowrap"
                                    >
                                        {isLoading ? "Enviando..." : "OK"}
                                    </button>
                                </div>
                                {message && (
                                    <p
                                        className={`text-xs ${message.includes("OK") ? "text-green-400" : "text-red-400"}`}
                                    >
                                        {message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
                        <p>© 2026 Prime FLOW Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
