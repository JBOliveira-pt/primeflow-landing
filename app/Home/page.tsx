import Hero from "../components/Hero/Hero";
import Plataforma from "../components/Plataforma/Plataforma";
import Image from "next/image";
import Features from "../components/Features/Features";
import Criadores from "../components/Criadores/Criadores";
import Planos from "../components/Planos/Planos";

export default function PaginaInicial() {
    return (
        <div className="w-full overflow-x-hidden">
            <section id="Home" className="w-full">
                <Hero />
            </section>
            <section id="Plataforma" className="w-full">
                <Plataforma />
            </section>
            <section id="Funcionalidades" className="w-full">
                <Features />
            </section>
            <section id="Planos" className="w-full">
                <Planos />
            </section>
            <section id="Equipe" className="w-full">
                <Criadores />
            </section>
        </div>
    );
}
