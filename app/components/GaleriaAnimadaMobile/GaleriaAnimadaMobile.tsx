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
        src: "/images/dashboard-ecramobile.png",
    },
    {
        id: 2,
        src: "/images/invoices-ecramobile.png",
    },
    {
        id: 3,
        src: "/images/dashboardrevenue-ecramobile.png",
    },
];

export default function GaleriaAnimadaMobile() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const element = containerRef.current;
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const elementTop = rect.top;
            const elementHeight = rect.height;
            const elementCenter = elementTop + elementHeight / 2;
            const viewportCenter = viewportHeight / 2;

            const startPosition = viewportHeight + 150;
            const endPosition = viewportCenter + 150;
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
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center justify-start bg-slate-950 px-4 sm:px-8 pt-8 pb-2 relative w-full max-w-full"
        >
            {/* Container com posição relativa para sobrepor imagens */}
            <div className="relative w-full max-w-[180px] flex-1 min-h-[420px]">
                {imagens.map((imagem, index) => {
                    const leftOffset = index * 20; // Deslocamento horizontal entre as imagens
                    const delay = index * 0.01;

                    // Calcula o progresso individual de cada imagem com delay
                    const imageProgress = Math.max(
                        0,
                        Math.min(1, scrollProgress * 1 - delay),
                    );

                    // Define o limite de saída para cada imagem (vertical)
                    // Primeira imagem (index 0): vai até 100% para cima
                    // Segunda imagem (index 1): para em 50%
                    // Terceira imagem (index 2): para em -25%
                    const maxTranslate =
                        index === 0 ? 80 : index === 1 ? -0 : -100;

                    // Animação vertical:
                    // imageProgress 0 = 100% abaixo (fora da tela)
                    // imageProgress 0.5 = 0% (posição final, centro)
                    // imageProgress 1 = -maxTranslate% (sai por cima)
                    const translateY =
                        ((1 - imageProgress * 2) * maxTranslate) / 5;

                    return (
                        <div
                            key={imagem.id}
                            className="absolute rounded-xl overflow-hidden shadow-2xl border border-gray-700 w-full"
                            style={{
                                height: "100%",
                                left: `${leftOffset}%`,
                                zIndex: imagens.length + index,
                                opacity: Math.min(1, imageProgress * 2),
                                transform: `translateY(${translateY}%)`,
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
