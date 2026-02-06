"use client";

import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import SobreNos from "../SobreNos/SobreNos";
import GaleriaAnimada from "../GaleriaAnimada/GaleriaAnimada";
import GaleriaAnimadaMobile from "../GaleriaAnimadaMobile/GaleriaAnimadaMobile";

function Plataforma() {
    return (
        <div className="pt-12 bg-slate-950 font-sans w-full max-w-full overflow-hidden">
            {/* Seção com 2 colunas - Sobre Nós e Galeria */}
            <section
                id="Plataforma"
                className="w-full max-w-full relative pt-16 pb-8"
            >
                {/* Desktop: 2 colunas */}
                <div className="hidden md:flex items-start w-full max-w-full pb-8">
                    {/* Coluna Esquerda - Sobre Nós (Fixo) */}
                    <div className="w-2/5 max-w-[100%]">
                        <SobreNos />
                    </div>

                    {/* Coluna Direita - Galeria Animada */}
                    <div className="w-3/5 max-w-[100%] mt-[-2.5rem]">
                        <GaleriaAnimada />
                    </div>
                </div>

                {/* Mobile: Stack vertical */}
                <div className="md:hidden text-center overflow-hidden">
                    <div className="mb-16 px-6">
                        <SobreNos />
                    </div>
                    <div className="mb-18 px-6">
                        <GaleriaAnimadaMobile />
                    </div>
                </div>
            </section>

            {/* Icons Section - Tecnologias Utilizadas */}

            {/* Icons Section - Tecnologias Utilizadas */}
            <section className="w-full bg-slate-950 mt-8 pt-16 pb-16 flex flex-col items-center justify-center px-4">
                {/* Divisória Superior */}
                <div className="mb-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

                <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">
                    Alto Valor agregado
                </h2>

                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                    Tecnologias Embarcadas
                </h2>

                <p className="text-slate-400 max-w-2xl mx-auto justify-center text-center mb-16">
                    As ferramentas mais modernas para criar interfaces
                    intuitivas e marcantes, garantindo que sua marca se destaque
                    no mercado desde o primeiro clique
                </p>

                {/* Grid de 5 colunas */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 bg-gradient-to-b from-slate-800/25 to-slate-900/25 backdrop-blur-md rounded-3xl p-8 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    {/* Coluna 1 - DevOps & Management */}
                    <div className="flex flex-col items-center">
                        <h3 className="flex justify-center text-center text-xs font-bold text-white px-3 py-1 rounded mb-8 tracking-wider">
                            DevOps &<br />
                            Management
                        </h3>
                        <div className="grid grid-cols-2 gap-12 items-center justify-items-center">
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/vscode.png"
                                alt="VS Code"
                                className="w-12 h-12 object-contain"
                            />
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/github.svg"
                                alt="GitHub"
                                className="w-12 h-12 object-contain"
                            />
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/git.png"
                                alt="Git"
                                className="w-12 h-12 object-contain"
                            />
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/jira.png"
                                alt="Jira"
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                    </div>

                    {/* Coluna 2 - Infraestrutura & Confiabilidade (Cloud) */}
                    <div className="flex flex-col items-center">
                        <h3 className="flex justify-center text-center text-xs font-bold text-white px-3 py-1 rounded mb-4 tracking-wider">
                            Infraestrutura &<br />
                            Confiabilidade (Cloud)
                        </h3>
                        <div className="flex flex-col items-center gap-8 py-2">
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/vercel.png"
                                alt="Vercel"
                                className="w-28 h-14 object-contain"
                            />
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/cloudflare.png"
                                alt="Cloudflare"
                                className="w-32 h-14 object-contain"
                            />
                        </div>
                    </div>

                    {/* Coluna 3 - Backend & Auth */}
                    <div className="flex flex-col items-center">
                        <h3 className="flex justify-center text-center text-xs font-bold text-white px-3 py-2 rounded mb-8 tracking-wider">
                            Backend & Auth
                        </h3>
                        <div className="flex flex-col items-center gap-8 py-2">
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/neondatabase.webp"
                                alt="Neon"
                                className="w-14 h-14 object-contain"
                            />
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/clerk.png"
                                alt="Clerk"
                                className="w-20 h-14 object-contain"
                            />
                        </div>
                    </div>

                    {/* Coluna 4 - Frontend & Interface */}
                    <div className="flex flex-col items-center">
                        <h3 className="flex justify-center text-center text-xs font-bold text-white px-3 py-2 rounded mb-8 tracking-wider">
                            Frontend & Interface
                        </h3>
                        <div className="grid grid-cols-3 gap-4 items-center justify-items-center max-w-[180px]">
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/next-js.png"
                                alt="Next.js"
                                className="w-12 h-12 object-contain"
                            />
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/react.png"
                                alt="React"
                                className="w-12 h-12 object-contain"
                            />
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/tailwind.png"
                                alt="Tailwind CSS"
                                className="w-12 h-12 object-contain"
                            />
                            <div className="col-span-3 flex items-center gap-12 justify-center mt-4">
                                <img
                                    src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/typescript.png"
                                    alt="TypeScript"
                                    className="w-12 h-12 object-contain"
                                />
                                <img
                                    src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/javascript.webp"
                                    alt="JavaScript"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Coluna 5 - Design */}
                    <div className="flex flex-col items-center">
                        <h3 className="flex justify-center text-center text-xs font-bold text-white px-3 py-1 rounded mb-8 tracking-wider">
                            Design
                        </h3>
                        <div className="flex items-center gap-12 justify-center">
                            <img
                                src="https://pub-b07f842ba4ae41bc8cf97ca6adeff08b.r2.dev/primeflow-images/logos/canva.svg"
                                alt="Canva"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
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
