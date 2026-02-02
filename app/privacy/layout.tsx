import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | PrimeFlow",
    description:
        "Política de Privacidade da PrimeFlow em conformidade com o RGPD (Regulamento Geral sobre a Proteção de Dados) da União Europeia.",
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
