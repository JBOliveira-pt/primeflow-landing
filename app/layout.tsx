import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PrimeFlow - MVP",
    description: "The future of financial clarity starts here.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 overflow-x-hidden`}
            >
                <Navbar />
                <main className="w-full max-w-full overflow-x-hidden">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
