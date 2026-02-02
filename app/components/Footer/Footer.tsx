"use client";

import NewsletterForm from "@/app/components/NewsletterForm/NewsletterForm";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white relative overflow-hidden">
            {/* Linha decorativa no topo */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            {/* Glow decorativo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Grid Principal - Desktop mantém ordem original */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* MOBILE: Newsletter em primeiro (order-1) */}
                    {/* DESKTOP: Newsletter em terceiro (lg:order-3) */}
                    <div className="order-1 lg:order-3 lg:col-span-1 flex justify-center md:justify-start">
                        <div className="w-full max-w-md">
                            <NewsletterForm />
                        </div>
                    </div>

                    {/* MOBILE: Sobre PrimeFlow em segundo (order-2) */}
                    {/* DESKTOP: Sobre PrimeFlow em primeiro (lg:order-1) */}
                    <div className="order-2 lg:order-1 space-y-6 text-center md:text-left">
                        <div>
                            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                PrimeFlow
                            </h3>
                            <p className="text-indigo-400 text-sm font-semibold">
                                MVP - Financial Platform
                            </p>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            The future of financial clarity starts here.
                            Simplifique a gestão de clientes e faturas com uma
                            plataforma moderna e intuitiva.
                        </p>

                        {/* Links Rápidos */}
                        <div className="space-y-3">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                                Navegação
                            </h4>
                            <nav className="flex flex-col space-y-2 items-center md:items-start">
                                <Link
                                    href="/#Home"
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/#Plataforma"
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                                >
                                    Plataforma
                                </Link>
                                <Link
                                    href="/#Funcionalidades"
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                                >
                                    Funcionalidades
                                </Link>
                                <Link
                                    href="/#Equipe"
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                                >
                                    Equipe
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* MOBILE: Funcionalidades em terceiro (order-3) */}
                    {/* DESKTOP: Funcionalidades em segundo (lg:order-2) */}
                    <div className="order-3 lg:order-2 space-y-6 text-center md:text-left">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                            Funcionalidades
                        </h4>
                        <nav className="flex flex-col space-y-2 items-center md:items-start">
                            <Link
                                href="/dashboard"
                                className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                            >
                                <span className="text-lg"></span>
                                <span>Dashboard</span>
                            </Link>
                            <Link
                                href="/invoices"
                                className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                            >
                                <span className="text-lg"></span>
                                <span>Invoices</span>
                            </Link>
                            <Link
                                href="/customers"
                                className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                            >
                                <span className="text-lg"></span>
                                <span>Customers</span>
                            </Link>
                            <Link
                                href="/users"
                                className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                            >
                                <span className="text-lg"></span>
                                <span>Users</span>
                            </Link>
                        </nav>

                        {/* Contato */}
                        <div className="space-y-3 pt-6">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                                Contato
                            </h4>
                            <div className="space-y-2 flex flex-col items-center md:items-start">
                                <a
                                    href="mailto:contato@primeflow.com"
                                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                                >
                                    <Mail size={16} />
                                    <span>contato@primeflow.com</span>
                                </a>
                                <div className="text-slate-400 text-sm flex items-center gap-2">
                                    <MapPin size={16} />
                                    <span>São Paulo, Brasil</span>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="space-y-3">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                                Siga-nos
                            </h4>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <a
                                    href="https://github.com/JBOliveira-pt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                                    aria-label="GitHub"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jboliveira-pt/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Linha divisória */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-slate-400 text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()} PrimeFlow.
                            Desenvolvido por{" "}
                            <strong className="text-indigo-400">
                                Jeison Oliveira, Everton Santos e Bernardo
                                Rodrigues
                            </strong>
                        </p>

                        {/* Links Legais */}
                        <div className="flex gap-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-slate-400 hover:text-indigo-400 transition-colors"
                            >
                                Privacidade
                            </Link>
                            <Link
                                href="/terms"
                                className="text-slate-400 hover:text-indigo-400 transition-colors"
                            >
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
