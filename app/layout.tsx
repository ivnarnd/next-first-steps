import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//metadata del sitio o de la pagina principal
export const metadata: Metadata = {
  title: "Ivan 's Home Page",
  description: "Generated with love by vercel",
};
//aca se crea todo la pagina con el retorno de html que tiene
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
          <div className="flex flex-col">
            {children}
          </div>
      </body>
    </html>
  );
}
