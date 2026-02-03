import { NextResponse } from "next/server";
import { getImageByName } from "@/lib/queries/images";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ name: string }> },
) {
    try {
        const { name: imageName } = await params;

        if (!imageName) {
            return NextResponse.json(
                { success: false, error: "Nome da imagem não fornecido" },
                { status: 400 },
            );
        }

        const image = await getImageByName(imageName);

        if (!image) {
            return NextResponse.json(
                { success: false, error: "Imagem não encontrada" },
                { status: 404 },
            );
        }

        return NextResponse.json({ success: true, data: image });
    } catch (error) {
        console.error("Erro ao buscar imagem:", error);
        return NextResponse.json(
            { success: false, error: "Erro ao buscar imagem" },
            { status: 500 },
        );
    }
}
