"use client";

import { useEffect } from "react";
import "./styles.css";

export default function Home() {
    useEffect(() => {
        function updateActiveNav() {
            document.querySelectorAll(".nav-link").forEach((link) => {
                link.classList.remove("active-nav");
            });
            const hash = window.location.hash || "#dashboard";
            const activeLink = document.querySelector(
                `.nav-link[href="${hash}"]`,
            );
            if (activeLink) {
                activeLink.classList.add("active-nav");
            }
        }

        function scrollSpy() {
            const sections = ["dashboard", "invoices", "costumers", "users"];
            const scrollPosition = window.scrollY + 120;
            let currentSection = sections[0];

            for (const id of sections) {
                const section = document.getElementById(id);
                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = id;
                }
            }

            if (window.location.hash !== "#" + currentSection) {
                history.replaceState(null, "", "#" + currentSection);
                updateActiveNav();
            }
        }

        updateActiveNav();
        window.addEventListener("hashchange", updateActiveNav);
        window.addEventListener("scroll", scrollSpy);

        return () => {
            window.removeEventListener("hashchange", updateActiveNav);
            window.removeEventListener("scroll", scrollSpy);
        };
    }, []);

    return (
        <>
            <section className="dashboard" id="dashboard">
                <div className="dashboard-col-esq">
                    <h2 className="dashboard-title">Dashboard</h2>
                    <div className="dashboard-block">
                        <h4>
                            <span className="icon">
                                <svg width="20" height="20" fill="none">
                                    <circle
                                        cx="10"
                                        cy="10"
                                        r="9"
                                        stroke="#398dc3"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M6 14l8-8M6 6.5V14h7.5"
                                        stroke="#398dc3"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            Desafios a Serem Superados
                        </h4>
                        <p>
                            A queda de produtividade nas empresas tem causado
                            prejuízos significativos e está ligada,
                            principalmente, à sobrecarga e à assimetria
                            informacional. O excesso de conteúdo digital, que
                            levou à escolha do termo{" "}
                            <i>&quot;brain rot&quot;</i> como palavra do ano em
                            2024, afeta a capacidade de foco dos colaboradores.
                            Já a má distribuição de informações entre membros da
                            equipe gera retrabalho e conflitos. Estudos recentes
                            revelam que equipes engajadas são mais produtivas e
                            rentáveis, especialmente quando há liderança
                            transparente e comunicação clara, fundamentais para
                            reduzir esses impactos.
                        </p>
                    </div>
                    <div className="dashboard-block">
                        <h4>
                            <span className="icon">
                                <svg width="20" height="20" fill="none">
                                    <circle
                                        cx="10"
                                        cy="10"
                                        r="9"
                                        stroke="#398dc3"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M6 10l2 2 5-5"
                                        stroke="#398dc3"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            Solução Apresentada
                        </h4>
                        <p>
                            Para enfrentar os desafios de produtividade e
                            comunicação, foi criada a plataforma
                            &quot;S.Inc&quot;. Nela a empresa parceira promove a
                            integração entre seus colaboradores por meio da
                            troca transparente de ideias e conhecimentos. A
                            solução estimula o engajamento social no ambiente de
                            trabalho, facilita a inclusão de novos membros à
                            cultura da empresa e valoriza afinidades
                            profissionais e pessoais.
                        </p>
                    </div>
                    <div className="dashboard-block">
                        <h4>
                            <span className="icon">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <g
                                        stroke="#398dc3"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 13.1a2.4 2.4 0 0 1-2.3-.3l-2 2a2.5 2.5 0 0 1-3.4 0c-1-1-1-2.6 0-3.6l2-2a2.4 2.4 0 0 1-.3-2.3l-2.1-2.1a2.4 2.4 0 1 1 .7-1.7" />
                                        <circle cx="5" cy="5" r="2.4" />
                                    </g>
                                </svg>
                            </span>
                            Ferramentas Utilizadas
                        </h4>
                        <ul className="dashboard-tools">
                            <li>
                                <span className="tool-label">IDE</span>{" "}
                                <span className="tool-value">IntelliJ</span>
                            </li>
                            <li>
                                <span className="tool-label">Framework</span>{" "}
                                <span className="tool-value">Spring Boot</span>
                            </li>
                            <li>
                                <span className="tool-label">Database</span>{" "}
                                <span className="tool-value">MySQL/XAMPP</span>
                            </li>
                            <li>
                                <span className="tool-label">Design</span>{" "}
                                <span className="tool-value">Figma</span>
                            </li>
                            <li>
                                <span className="tool-label">Management</span>{" "}
                                <span className="tool-value">Jira</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard-col-dir">
                    <img
                        src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/lateral.pic-demo.sinc.PNG?raw=true"
                        alt="Dashboard "
                        className="plataforma-img"
                    />
                </div>
            </section>

            <section className="mainfunctions" id="Invoices">
                <h2 className="invoices">Invoices</h2>
                <div className="cards-grid">
                    <div className="func-card">
                        <strong>Painel de Controle</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/painel.de.controle.png?raw=true"
                            alt="Painel de Controle"
                        />
                        <p>
                            Página de acesso exclusivo do administrador o
                            sistema, com um painel para analisar a validade das
                            interações na plataforma, possibilidade de criar
                            Posts Institucionais e de aplicar Sanções.{" "}
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Posts Institucionais</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/post.institucional.png?raw=true"
                            alt="Posts Institucionais"
                        />
                        <p>
                            Espaço para publicações e comunicados oficiais da
                            empresa, mantendo todos os colaboradores informados
                            sobre novidades e atualizações.
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Profile</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/profile.png?raw=true"
                            alt="Profile"
                        />
                        <p>
                            Área dedicada ao perfil do colaborador, com suas
                            informações pessoais públicas (incluindo os
                            interesses, utilizados para o Matching), foto e
                            opções de edição.
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Matching</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/matching.png?raw=true"
                            alt="Matching"
                        />
                        <p>
                            Funcionalidade que permite a visualização da
                            porcentagem de compatibilidade de interesses com os
                            demais colaboradores, facilitando sua conexão.{" "}
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Pedidos de Ajuda</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/pedido.de.ajuda.png?raw=true"
                            alt="Pedidos de Ajuda"
                        />
                        <p>
                            Permite aos colaboradores criarem Posts solicitando
                            apoio em situações diversas do dia a dia da empresa,
                            promovendo colaboração e solidariedade.
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Comentários</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/comentarios.png?raw=true"
                            alt="Comentários"
                        />
                        <p>
                            Espaço para interação em Posts, como os Pedidos de
                            Ajuda, incentivando o engajamento entre os
                            colaboradores.{" "}
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>Avaliações</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/avaliacoes.png?raw=true"
                            alt="Avaliações"
                        />
                        <p>
                            Avaliação feita pelo colaborador que criou o Post
                            acerca da qualidade da interação, contribuindo para
                            o melhor uso da plataforma.
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>S.InCoins</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/s.incoins.png?raw=true"
                            alt="S.InCoins"
                        />
                        <p>
                            Moedas virtuais obtidas em determinadas interações
                            na plataforma, como nas Avaliações, gerando
                            recompensas, trocas e incentivos dentro da
                            comunidade.
                        </p>
                    </div>
                    <div className="func-card">
                        <strong>S.tore</strong>
                        <img
                            src="https://github.com/JBOliveira-pt/sinc/blob/main/src/main/resources/static/images/s.tore.png?raw=true"
                            alt="S.tore"
                        />
                        <p>
                            Loja virtual integrada, onde usuários podem trocar
                            suas S.InCoins por produtos ou serviços exclusivos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="demonstracao" id="demonstracao">
                <h2 className="demonstracao">Demonstração</h2>
                <iframe
                    width="760"
                    height="515"
                    src="https://www.youtube.com/embed/HfKCAYEddIA"
                    title="Demonstração S.Inc"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
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
        </>
    );
}
