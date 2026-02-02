import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos e Condições | PrimeFlow",
    description:
        "Termos e Condições de Uso da plataforma PrimeFlow, em conformidade com a legislação portuguesa e europeia.",
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
