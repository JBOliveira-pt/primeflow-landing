"use client";

import Image from "next/image";
import { useImage } from "@/hooks/useImages";

interface DynamicImageProps {
    imageName: string;
    fallbackSrc?: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
}

export default function DynamicImage({
    imageName,
    fallbackSrc = "/images/placeholder.svg",
    className = "",
    width = 500,
    height = 300,
    priority = false,
}: DynamicImageProps) {
    const { image, loading, error } = useImage(imageName);

    if (loading) {
        return (
            <div
                className={`animate-pulse bg-gray-300 rounded aspect-[3/2] w-full ${className}`}
            />
        );
    }

    if (error || !image) {
        return (
            <Image
                src={fallbackSrc}
                alt="Imagem não disponível"
                width={width}
                height={height}
                className={className}
                priority={priority}
            />
        );
    }

    return (
        <Image
            src={image.image_url}
            alt={image.alt_text || image.image_name}
            width={image.width || width}
            height={image.height || height}
            className={className}
            priority={priority}
        />
    );
}
