"use client";

import PaginaInicial from "./Home/page";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen w-full items-center justify-center font-sans bg-[#EAF2FF]">
            <PaginaInicial />
        </div>
    );
}

/* { */
/*
            
            <section className="mainfunctions" id="funcionalidades">
                <h2 className="invoices">Funcionalidades</h2>
                <div className="cards-grid">
                    <div className="func-card">
                        <strong>Dashboard</strong>
                        <Image
                            src="/images/dashboard-ecra.png" // Caminho relativo à pasta 'public'
                            alt="Descrição da imagem"
                            width={500} // Largura em pixels (exemplo)
                            height={300} // Altura em pixels (exemplo)
                            layout="responsive" // Opcional: para imagens responsivas
                        />
                        <p>
                            Página de acesso exclusivo do administrador o
                            sistema, com um painel para analisar a validade das
                            interações na plataforma, possibilidade de criar
                            Posts Institucionais e de aplicar Sanções.{" "}
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Invoices</strong>
                        <Image
                            src="/images/invoices-ecra.png" // Caminho relativo à pasta 'public'
                            alt="Descrição da imagem"
                            width={500} // Largura em pixels (exemplo)
                            height={300} // Altura em pixels (exemplo)
                            layout="responsive" // Opcional: para imagens responsivas
                        />
                        <p>
                            Espaço para publicações e comunicados oficiais da
                            empresa, mantendo todos os colaboradores informados
                            sobre novidades e atualizações.
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Customers</strong>
                        <Image
                            src="/images/customers-ecra.png" // Caminho relativo à pasta 'public'
                            alt="Descrição da imagem"
                            width={500} // Largura em pixels (exemplo)
                            height={300} // Altura em pixels (exemplo)
                            layout="responsive" // Opcional: para imagens responsivas
                        />
                        <p>
                            Área dedicada ao perfil do colaborador, com suas
                            informações pessoais públicas (incluindo os
                            interesses, utilizados para o Matching), foto e
                            opções de edição.
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Users</strong>
                        <Image
                            src="/images/users-ecra.png" // Caminho relativo à pasta 'public'
                            alt="Descrição da imagem"
                            width={500} // Largura em pixels (exemplo)
                            height={300} // Altura em pixels (exemplo)
                            layout="responsive" // Opcional: para imagens responsivas
                        />
                        <p>
                            Funcionalidade que permite a visualização da
                            porcentagem de compatibilidade de interesses com os
                            demais colaboradores, facilitando sua conexão.{" "}
                        </p>
                    </div>
                </div>
            </section>

            

            <section className="team" id="team">
                <h2 className="creators">Criadores</h2>
                <section className="team-section">
                    <div className="team-member">
                        <img
                            className="team-member-img"
                            src="https://media.licdn.com/dms/image/v2/D4D03AQEChGm5j7S8rw/profile-displayphoto-scale_400_400/B4DZfh05eOGkAg-/0/1751840432165?e=1757548800&v=beta&t=fnQYMaryKLI3OKRog5XpgJNTyl4O7iwAHIL_aeHEHO0"
                            alt="Foto de Jeison Oliveira"
                        />
                        <p className="member-name">
                            <span className="name">Jeison Oliveira</span>
                            <span className="title">
                                Java Developer | Digital Architect
                            </span>
                            <a
                                href="https://www.linkedin.com/in/jboliveira-pt/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil LinkedIn de Jeison Oliveira"
                                className="linkedin-link"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                    alt="LinkedIn"
                                    className="linkedin-logo"
                                />
                                <span className="linkedin-label">
                                    www.linkedin.com/in/jboliveira-pt
                                </span>
                            </a>
                        </p>
                    </div>
                    <div className="team-member">
                        <img
                            className="team-member-img"
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHRJOlawWZQfg/profile-displayphoto-shrink_400_400/B4DZOXGzFZHMAg-/0/1733406962831?e=1757548800&v=beta&t=eot4oDiAUHob2-glBh-kxBhW-h5O9ca54sqt0s1LxY4"
                            alt="Foto de Fernando Lino"
                        />
                        <p className="member-name">
                            <span className="name">Fernando Lino</span>
                            <span className="title">Software Architect</span>
                            <a
                                href="https://www.linkedin.com/in/fernando-giovani/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil LinkedIn de Fernando Lino"
                                className="linkedin-link"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                    alt="LinkedIn"
                                    className="linkedin-logo"
                                />
                                <span className="linkedin-label">
                                    www.linkedin.com/in/fernando-giovani
                                </span>
                            </a>
                        </p>
                    </div>
                    <div className="team-member">
                        <img
                            className="team-member-img"
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHHsNg74C974Q/profile-displayphoto-shrink_400_400/B4DZOsYLdnHYAg-/0/1733763840994?e=1757548800&v=beta&t=96o1wxDijh7oF0ecnrqWAzI2oLLNFdUEPlOE3kyrInk"
                            alt="Foto de Keyla Lima"
                        />
                        <p className="member-name">
                            <span className="name">Keyla Lima</span>
                            <span className="title">Assistant Engineer</span>
                            <a
                                href="https://www.linkedin.com/in/keyllalima/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil LinkedIn de Keyla Lima"
                                className="linkedin-link"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                    alt="LinkedIn"
                                    className="linkedin-logo"
                                />
                                <span className="linkedin-label">
                                    www.linkedin.com/in/keyllalima
                                </span>
                            </a>
                        </p>
                    </div>
                </section>
            </section>

            <section className="links-section">
                <h2 className="links-title">Links Úteis</h2>
                <div className="links-grid">
                    <a
                        className="link-card"
                        href="https://github.com/JBOliveira-pt/sinc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="link-icon">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="GitHub"
                            />
                        </div>
                        <span className="link-label">Repositório</span>
                    </a>
                    <a
                        className="link-card"
                        href="https://www.youtube.com/@S.Inc.ITSolutions"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="link-icon">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                                alt="YouTube"
                            />
                        </div>
                        <span className="link-label">Canal S.Inc</span>
                    </a>
                </div>
            </section>

            <footer className="bg-light py-3 mt-5">
                <p
                    className="text-center text-muted mb-0"
                    style={{ fontSize: "14px" }}
                >
                    &copy; 2025 Desenvolvido por{" "}
                    <strong>
                        Jeison Oliveira, Everton Santos e Bernardo
                        Rodrigues{" "}
                    </strong>
                </p>
            </footer>
           
            
        </div>
         */
/* } */
