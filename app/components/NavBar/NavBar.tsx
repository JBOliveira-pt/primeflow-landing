"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isHomePage = pathname === "/";

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

    // Fecha o menu mobile quando a rota muda
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Função para clicar no logo
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (isHomePage) {
            // Se está na home, faz scroll suave para o topo
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // Se não está na home, redireciona para a home
            router.push("/");
        }
        setIsMobileMenuOpen(false);
    };

    // Função para scroll suave
    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setIsMobileMenuOpen(false); // Fecha o menu mobile após clicar
        }
    };

    const navLinks = [
        { name: "Início", href: "#Home" },
        { name: "Plataforma", href: "#Plataforma" },
        { name: "Funcionalidades", href: "#Funcionalidades" },
        { name: "Equipe", href: "#Equipe" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                isScrolled
                    ? "bg-white/70 backdrop-blur-lg shadow-lg py-1 border-b border-gray-100"
                    : "bg-transparent py-2"
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    href="/"
                    onClick={handleLogoClick}
                    className="flex items-center group"
                >
                    <Image
                        src="https://raw.githubusercontent.com/EvertonClaudino/projetoGrup/refs/heads/main/primeflow-darkcirclelogo-nobg.png"
                        width={80}
                        height={80}
                        alt="PrimeFlow Logo"
                    />
                    <span
                        className={`text-2xl font-black tracking-tighter transition-colors ${
                            isScrolled ? "text-gray-900" : "text-white"
                        }`}
                    >
                        Prime <span className="text-black-600">FLOW</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                {isHomePage && (
                    <div className="hidden md:flex items-center gap-10">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) =>
                                            handleSmoothScroll(e, link.href)
                                        }
                                        className={`relative font-semibold text-sm uppercase tracking-widest transition-colors hover:text-indigo-500 group ${
                                            isScrolled
                                                ? "text-gray-700"
                                                : "text-white/90"
                                        }`}
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Mobile Toggle */}
                {isHomePage && (
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
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {isHomePage && (
                <div
                    className={`fixed inset-0 bg-gray-900/95 z-[110] transition-all duration-500 md:hidden flex flex-col items-center justify-center  ${
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
                                    onClick={(e) =>
                                        handleSmoothScroll(e, link.href)
                                    }
                                    className="text-3xl font-bold text-white hover:text-red-500 transition-colors block"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
