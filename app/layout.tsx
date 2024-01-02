import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Head from "next/head";
import FooterDesign from "@/components/FooterDesign/FooterDesign";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tactical Edge",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    as="style"
                    rel="stylesheet preload prefetch"
                    type="text/css"
                    crossOrigin="anonymous"
                />
            </Head>
            <body
                className={inter.className}
                style={{
                    height: "100vh",
                }}
            >
                {children}
                <FooterDesign />
            </body>
        </html>
    );
}
