"use client";

import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import SobreNos from "../SobreNos/SobreNos";
import GaleriaAnimada from "../GaleriaAnimada/GaleriaAnimada";

function Plataforma() {
    return (
        <div className="bg-slate-950 font-sans">
            {/* Seção com 2 colunas - Sobre Nós e Galeria */}
            <section id="Plataforma" className="w-full relative pt-16 pb-16">
                {/* Desktop: 2 colunas */}
                <div className="hidden md:flex items-start">
                    {/* Coluna Esquerda - Sobre Nós (Fixo) */}
                    <div className="w-1/2">
                        <SobreNos />
                    </div>

                    {/* Coluna Direita - Galeria Animada */}
                    <div className="w-1/2">
                        <GaleriaAnimada />
                    </div>
                </div>

                {/* Mobile: Stack vertical */}
                <div className="md:hidden">
                    <SobreNos />
                    <GaleriaAnimada />
                </div>
            </section>

            {/* Icons Section - Tecnologias Utilizadas */}
            <section className="w-full bg-slate-950 mt-8 pt-16 pb-10 flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 drop-shadow-lg">
                    Tecnologias Utilizadas
                </h2>
                <div className="flex justify-center gap-8 flex-wrap px-4">
                    {/* Next.js */}
                    <div className="group flex flex-col items-center justify-center gap-3 p-5 w-28 h-28 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-115 cursor-pointer border border-gray-700 hover:border-gray-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <SiNextdotjs className="text-4xl text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300 relative z-10" />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                            Next.js
                        </span>
                    </div>

                    {/* React */}
                    <div className="group flex flex-col items-center justify-center gap-3 p-5 w-28 h-28 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-115 cursor-pointer border border-cyan-700/50 hover:border-cyan-400 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <SiReact
                            className="text-4xl text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300 relative z-10 animate-spin-slow"
                            style={{ animationDuration: "3s" }}
                        />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                            React
                        </span>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="group flex flex-col items-center justify-center gap-3 p-5 w-28 h-28 bg-gradient-to-br from-cyan-950 via-teal-900 to-slate-900 rounded-2xl shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 transform hover:scale-115 cursor-pointer border border-teal-700/50 hover:border-cyan-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <SiTailwindcss className="text-4xl text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300 relative z-10 animate-wave-sine" />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                            Tailwind
                        </span>
                    </div>

                    {/* TypeScript */}
                    <div className="group flex flex-col items-center justify-center gap-3 p-5 w-28 h-28 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-115 cursor-pointer border border-blue-700/50 hover:border-blue-400 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <SiTypescript className="text-4xl text-blue-400 group-hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.6)] transition-all duration-300 relative z-10" />
                        <span className="text-xs font-bold text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                            TypeScript
                        </span>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 4s linear infinite;
                }                
            `}</style>
        </div>
    );
}

export default Plataforma;
