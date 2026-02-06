"use client";

import {
    BarChart3,
    Zap,
    ShieldCheck,
    Globe,
    ChevronRight,
    Twitter,
    Github,
    Linkedin,
    Instagram,
} from "lucide-react";

import Link from "next/link";
import React from "react";

const CreatorCard = ({
    name,
    role,
    bio,
    img,
    github,
    linkedin,
}: {
    name: string;
    role: string;
    bio: string;
    img: string;
    github?: string;
    linkedin?: string;
}) => (
    <div className="perspective">
        <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-[2rem] md:hover:bg-slate-900/50 md:hover:border-indigo-500/40 transition-all duration-300 group md:hover:scale-95 md:hover:shadow-2xl md:hover:shadow-indigo-500/20">
            <div className="relative w-24 h-24 mb-6 mx-auto">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl md:group-hover:bg-indigo-500/40 transition-all duration-300"></div>
                <img
                    src={img}
                    alt={name}
                    className="relative w-full h-full rounded-full border-2 border-slate-800 object-cover md:hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="text-center space-y-2">
                <h4 className="text-xl font-bold text-white md:group-hover:text-indigo-300 transition-colors duration-300">
                    {name}
                </h4>
                <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">
                    {role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed px-4">
                    {bio}
                </p>
                <div className="flex justify-center gap-4 pt-6 opacity-100 transition-opacity duration-300">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                        >
                            <Linkedin size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default function Criadores() {
    return (
        <section
            id="Equipe"
            className="py-28 bg-slate-950 relative overflow-hidden"
        >
            <div className="absolute top-14 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            {/* Decorative corner glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">
                        Criado por quem entende
                    </h2>
                    <p className="text-4xl md:text-5xl font-black mb-6 text-white">
                        Conheça os Criadores
                    </p>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Nossa equipa une a experiência em back e front-end para
                        entregar o melhor produto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
                    <div className="w-full max-w-sm">
                        <CreatorCard
                            name="Jeison Oliveiras"
                            role="Java Developer | Digital Architect"
                            bio=" "
                            img="https://avatars.githubusercontent.com/u/166177538?v=4"
                            linkedin="https://www.linkedin.com/in/jboliveira-pt/"
                            github="https://github.com/JBOliveira-pt"
                        />
                    </div>

                    <div className="w-full max-w-sm">
                        <CreatorCard
                            name="Everton Claudino"
                            role="Software developer "
                            bio=" "
                            img="https://media.licdn.com/dms/image/v2/D4E03AQGgWUrgZE6DCQ/profile-displayphoto-crop_800_800/B4EZsM72DDHoAI-/0/1765448573750?e=1770854400&v=beta&t=11S0YVOs6l8737Ixe1MGBzR2dG-n0_F1W32cZoIg1oU"
                            linkedin="https://www.linkedin.com/in/evertonclaudino/"
                            github="https://github.com/EvertonClaudino"
                        />
                    </div>

                    <div className="w-full max-w-sm">
                        <CreatorCard
                            name="Bernardo Rodrigues"
                            role="Full Stack Developer"
                            bio=" "
                            img="https://avatars.githubusercontent.com/u/74968732?v=4"
                            linkedin="https://www.linkedin.com/in/bernardo-silva-rodrigues-6a6b6722b/"
                            github="https://github.com/BernardoR18"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
