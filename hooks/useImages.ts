"use client";

import { useState, useEffect } from "react";
import { SiteImage } from "@/lib/db";

export function useImages(page?: string) {
    const [images, setImages] = useState<SiteImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                setLoading(true);
                const url = page ? `/api/images?page=${page}` : "/api/images";
                const response = await fetch(url);
                const data = await response.json();

                if (data.success) {
                    setImages(data.data);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                setError("Erro ao carregar imagens");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, [page]);

    return { images, loading, error };
}

export function useImage(imageName: string) {
    const [image, setImage] = useState<SiteImage | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImage() {
            try {
                setLoading(true);
                const response = await fetch(`/api/images/${imageName}`);
                const data = await response.json();

                if (data.success) {
                    setImage(data.data);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                setError("Erro ao carregar imagem");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        if (imageName) {
            fetchImage();
        }
    }, [imageName]);

    return { image, loading, error };
}
