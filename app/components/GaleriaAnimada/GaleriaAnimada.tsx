"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface ImagemGaleria {
    id: number;
    src: string;
}

const imagens: ImagemGaleria[] = [
    {
        id: 1,
        src: "/images/customers-ecra.png",
    },
    {
        id: 2,
        src: "/images/invoices-ecra.png",
    },
    {
        id: 3,
        src: "/images/dashboard-ecra.png",
    },
];

export default function GaleriaAnimada() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const element = containerRef.current;
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Início da animação: quando o topo do elemento entra na parte inferior da viewport
            // Fim da animação: quando o centro do elemento está no centro da viewport
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const elementCenter = elementTop + elementHeight / 2;
            const viewportCenter = viewportHeight / 2;

            // Calcula o progress:
            // progress = 0 quando elementTop = viewportHeight (começa a entrar)
            // progress = 1 quando elementCenter = viewportCenter (centralizado)
            const startPosition = viewportHeight + 150; // Começa quando entra na parte inferior
            const endPosition = viewportCenter; // Termina quando centro está no meio
            const distanceToTravel = startPosition - endPosition;

            const currentPosition = elementCenter;
            const progress = Math.max(
                0,
                Math.min(
                    1,
                    (startPosition - currentPosition) / distanceToTravel,
                ),
            );

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Chamar uma vez no mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center justify-start min-h-fit bg-slate-950 px-4 sm:px-8 pt-8 pb-2 relative overflow-hidden w-full max-w-full"
        >
            {/* Container com posição relativa para sobrepor imagens */}
            <div className="relative w-full max-w-3xl flex-1 min-h-[320px]">
                {imagens.map((imagem, index) => {
                    const topOffset = index * 15;
                    const delay = index * 0.08;

                    // Calcula o progresso individual de cada imagem com delay
                    const imageProgress = Math.max(
                        0,
                        Math.min(1, scrollProgress * 1.1 - delay),
                    );

                    // Define o limite de saída para cada imagem
                    // Primeira imagem (index 0): vai até 125% para esquerda
                    // Segunda imagem (index 1): para em 75%
                    // Terceira imagem (index 2): para em 50%
                    const maxTranslate =
                        index === 0 ? 100 : index === 1 ? 50 : -25;

                    // Animação:
                    // imageProgress 0 = 100% à direita (fora da tela)
                    // imageProgress 0.5 = 0% (posição final, centro)
                    // imageProgress 1 = -maxTranslate% (sai pela esquerda)
                    const translateX =
                        ((1 - imageProgress * 2) * maxTranslate) / 10;

                    return (
                        <div
                            key={imagem.id}
                            className="absolute rounded-xl overflow-hidden shadow-2xl border border-gray-700 w-full"
                            style={{
                                height: "100%",
                                top: `${topOffset}%`,
                                zIndex: imagens.length + index,
                                opacity: Math.min(1, imageProgress * 2),
                                transform: `translateX(${translateX}%)`,
                                transition:
                                    "opacity 0.3s ease-out, transform 0.3s ease-out",
                            }}
                        >
                            <Image
                                src={imagem.src}
                                alt=""
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// Função auxiliar para uso em outros componentes (navegação)
export const scrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
