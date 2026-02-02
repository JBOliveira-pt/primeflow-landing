import { NextResponse } from "next/server";
import { getAllImages, getImagesByPage } from "@/lib/queries/images";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page");

        let images;
        if (page) {
            images = await getImagesByPage(page);
        } else {
            images = await getAllImages();
        }

        return NextResponse.json({ success: true, data: images });
    } catch (error) {
        console.error("Erro ao buscar imagens:", error);
        return NextResponse.json(
            { success: false, error: "Erro ao buscar imagens" },
            { status: 500 },
        );
    }
}
