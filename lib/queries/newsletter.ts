import { sql, NewsletterSubscriber } from "../db";

/**
 * Adiciona novo inscrito à newsletter
 */
export async function subscribeToNewsletter(
    name: string,
    email: string,
): Promise<{ success: boolean; message: string }> {
    try {
        await sql`
      INSERT INTO newsletter_subscribers (name, email)
      VALUES (${name}, ${email})
    `;
        return { success: true, message: "Inscrição realizada com sucesso!" };
    } catch (error: any) {
        if (error.code === "23505") {
            // Unique violation
            return {
                success: false,
                message: "Este email já está cadastrado.",
            };
        }
        return { success: false, message: "Erro ao realizar inscrição." };
    }
}

/**
 * Busca todos os inscritos ativos
 */
export async function getAllSubscribers(): Promise<NewsletterSubscriber[]> {
    const result = await sql`
    SELECT * FROM newsletter_subscribers 
    WHERE is_active = true 
    ORDER BY subscribed_at DESC
  `;
    return result as NewsletterSubscriber[];
}

/**
 * Cancela inscrição
 */
export async function unsubscribeNewsletter(
    email: string,
): Promise<{ success: boolean; message: string }> {
    try {
        await sql`
      UPDATE newsletter_subscribers 
      SET is_active = false, updated_at = CURRENT_TIMESTAMP
      WHERE email = ${email}
    `;
        return { success: true, message: "Inscrição cancelada com sucesso!" };
    } catch (error) {
        return { success: false, message: "Erro ao cancelar inscrição." };
    }
}
