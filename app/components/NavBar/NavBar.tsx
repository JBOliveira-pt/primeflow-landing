"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Monitoriza o scroll para mudar o estilo da navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloqueia o scroll do corpo quando o menu mobile está aberto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Início", href: "#home" },
        { name: "Plataforma", href: "#servicos" },
        { name: "Funcionalidades", href: "#precos" },
        { name: "Equipe", href: "#equipe" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-lg py-3 border-b border-gray-100"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <span
                        className={`text-2xl font-black tracking-tighter transition-colors ${
                            isScrolled ? "text-gray-900" : "text-white"
                        }`}
                    >
                        Prime <span className="text-white-600">FLOW</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`relative font-semibold text-sm uppercase tracking-widest transition-colors hover:text-red-600 group ${
                                        isScrolled
                                            ? "text-gray-700"
                                            : "text-white/90"
                                    }`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`md:hidden p-2 rounded-xl transition-colors ${
                        isScrolled
                            ? "text-gray-900 hover:bg-gray-100"
                            : "text-white hover:bg-white/10"
                    }`}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-gray-900/95 z-[110] transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                }`}
            >
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <ul className="text-center space-y-8">
                    {navLinks.map((link, idx) => (
                        <li
                            key={link.name}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            className={`transform transition-all duration-500 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                        >
                            <a
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-bold text-white hover:text-red-500 transition-colors block"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
