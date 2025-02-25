import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bierwagen Immobilien - Ihr Immobilienexperte in Dresden",
  description: "Professionelle Immobilienvermittlung in Dresden und Umgebung. Seit 1990 Ihr zuverlässiger Partner für Gewerbeimmobilien, Büros, Einzelhandelsflächen und mehr.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
