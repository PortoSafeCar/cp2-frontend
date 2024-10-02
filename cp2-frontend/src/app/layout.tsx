import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export const metadata: Metadata = {
  title: "Worlds in Collision",
  description: "Explorando as ideias de Immanuel Velikovsky com Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
