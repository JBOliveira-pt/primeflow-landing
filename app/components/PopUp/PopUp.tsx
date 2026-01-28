"use client";

import React from "react";
import {
    UserCircle,
    User,
    Mail,
    Lock,
    Eye,
    Github,
    Globe,
    X,
} from "lucide-react";
import Image from "next/image";

const Modal = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all z-10"
                >
                    <X size={20} />
                </button>
                {children}
            </div>
        </div>
    );
};

export const RegisterModal = ({
    isOpen,
    onClose,
    onToggleLogin,
}: {
    isOpen: boolean;
    onClose: () => void;
    onToggleLogin: () => void;
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-8">
            <div className="text-center mb-8">
                <div className="w-25 h-12 flex items-center justify-center mx-auto mb-4">
                    <Image
                        src="https://raw.githubusercontent.com/EvertonClaudino/projetoGrup/refs/heads/main/primeflow-darkcirclelogo-nobg.png"
                        width={80}
                        height={80}
                        alt="PrimeFlow Logo"
                    />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Crie sua conta
                </h3>
                <p className="text-slate-400 text-sm">
                    Comece a transformar seus dados hoje mesmo.
                </p>
            </div>

            <form
                className="space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    onClose();
                }}
            >
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Nome Completo
                    </label>
                    <div className="relative">
                        <User
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Seu Nome"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        E-mail Corporativo
                    </label>
                    <div className="relative">
                        <Mail
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                            size={18}
                        />
                        <input
                            type="email"
                            placeholder="exemplo@empresa.com"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Senha
                    </label>
                    <div className="relative">
                        <Lock
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                            size={18}
                        />
                        <input
                            type="password"
                            placeholder="Mínimo 8 caracteres"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-10 text-white focus:outline-none focus:border-indigo-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
                >
                    <span className="relative z-10">
                        Criar Minha Conta Grátis
                    </span>
                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500"></div>
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
                Já possui uma conta?{" "}
                <button
                    onClick={onToggleLogin}
                    className="text-indigo-400 font-bold hover:underline cursor-pointer"
                >
                    Faça Login
                </button>
            </p>
        </div>
    </Modal>
);

export const LoginModal = ({
    isOpen,
    onClose,
    onToggleRegister,
}: {
    isOpen: boolean;
    onClose: () => void;
    onToggleRegister: () => void;
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-8">
            <div className="text-center mb-8">
                <div className="w-25 h-12 flex items-center justify-center mx-auto mb-4">
                    <Image
                        src="https://raw.githubusercontent.com/EvertonClaudino/projetoGrup/refs/heads/main/primeflow-darkcirclelogo-nobg.png"
                        width={80}
                        height={80}
                        alt="PrimeFlow Logo"
                    />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Bem-vindo de volta
                </h3>
                <p className="text-slate-400 text-sm">
                    Acesse sua conta para gerenciar seus dados.
                </p>
            </div>

            <form
                className="space-y-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    onClose();
                }}
            >
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        E-mail
                    </label>
                    <div className="relative">
                        <Mail
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                            size={18}
                        />
                        <input
                            type="email"
                            placeholder="exemplo@email.com"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Senha
                        </label>
                    </div>
                    <div className="relative">
                        <Lock
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                            size={18}
                        />
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-10 text-white focus:outline-none focus:border-indigo-500 transition-all"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                        >
                            <Eye size={18} />
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
                >
                    Entrar
                </button>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-800"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-slate-900 px-2 text-slate-500">
                            Ou continuar com
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 py-2.5 rounded-xl text-sm font-medium transition-all text-white cursor-pointer"
                    >
                        <Github size={18} /> GitHub
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 py-2.5 rounded-xl text-sm font-medium transition-all text-white cursor-pointer"
                    >
                        <Globe size={18} /> Google
                    </button>
                </div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
                Não tem uma conta?{" "}
                <button
                    onClick={onToggleRegister}
                    className="text-indigo-400 font-bold hover:underline cursor-pointer"
                >
                    Crie uma agora
                </button>
            </p>
        </div>
    </Modal>
);
