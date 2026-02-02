import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL não está definida nas variáveis de ambiente");
}

// Conexão com o Neon
export const sql = neon(process.env.DATABASE_URL);

// Tipos TypeScript
export interface NewsletterSubscriber {
    id: number;
    name: string;
    email: string;
    subscribed_at: Date;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface SiteImage {
    id: number;
    image_name: string;
    image_url: string;
    image_path: string;
    description: string | null;
    alt_text: string | null;
    page_location: string | null;
    file_size_kb: number | null;
    width: number | null;
    height: number | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
