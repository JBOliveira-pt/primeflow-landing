import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="Home"
            className="relative w-full max-w-full h-screen flex items-center justify-center mt-0 pt-0 text-center overflow-hidden"
        >
            {/* IMAGEM DE FUNDO */}
            <Image
                src="https://raw.githubusercontent.com/EvertonClaudino/projetoGrup/refs/heads/main/image-bf644a50-4491-426f-9594-153534c60518.png"
                alt="Visualização de dados e dashboards"
                fill
                priority
                className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70" />

            {/* CONTEÚDO */}
            <div className="flex flex-col justify-center items-center z-10 max-w-5xl px-4 sm:px-6 mx-auto text-white gap-8 w-full">
                <h1 className="text-4xl md:text-7xl lg:text-7xl font-black tracking-tight leading-[1.1] text-center">
                    Visualize seu sucesso <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
                        em tempo real
                    </span>
                </h1>

                <p className="max-w-2xl  text-lg md:text-xl text-slate-400 ">
                    A <strong>PrimeFLOW</strong> transforma dados complexos em
                    insights visuais claros. Tome decisões mais inteligentes com
                    o dashboard mais rápido e intuitivo do mercado.
                </p>
            </div>
        </section>
    );
}
