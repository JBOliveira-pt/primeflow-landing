import { sql, SiteImage } from "../db";

/**
 * Busca todas as imagens ativas
 */
export async function getAllImages(): Promise<SiteImage[]> {
    const result = await sql`
    SELECT * FROM site_images 
    WHERE is_active = true 
    ORDER BY created_at DESC
  `;
    return result as SiteImage[];
}

/**
 * Busca imagens por localização da página
 */
export async function getImagesByPage(page: string): Promise<SiteImage[]> {
    const result = await sql`
    SELECT * FROM site_images 
    WHERE page_location = ${page} 
    AND is_active = true
  `;
    return result as SiteImage[];
}

/**
 * Busca uma imagem específica por nome
 */
export async function getImageByName(name: string): Promise<SiteImage | null> {
    const result = await sql`
    SELECT * FROM site_images 
    WHERE image_name = ${name} 
    AND is_active = true
    LIMIT 1
  `;
    return (result[0] as SiteImage) || null;
}

/**
 * Busca uma imagem por URL
 */
export async function getImageByUrl(url: string): Promise<SiteImage | null> {
    const result = await sql`
    SELECT * FROM site_images 
    WHERE image_url = ${url} 
    AND is_active = true
    LIMIT 1
  `;
    return (result[0] as SiteImage) || null;
}
