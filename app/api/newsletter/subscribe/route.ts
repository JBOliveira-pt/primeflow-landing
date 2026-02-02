import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/queries/newsletter";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Nome e email são obrigatórios" },
                { status: 400 },
            );
        }

        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Email inválido" },
                { status: 400 },
            );
        }

        const result = await subscribeToNewsletter(name, email);

        if (result.success) {
            return NextResponse.json(result, { status: 201 });
        } else {
            return NextResponse.json(result, { status: 400 });
        }
    } catch (error) {
        console.error("Erro ao processar inscrição:", error);
        return NextResponse.json(
            { success: false, message: "Erro interno do servidor" },
            { status: 500 },
        );
    }
}
