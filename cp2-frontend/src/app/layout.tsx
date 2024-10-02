import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import Rodape from "../components/Rodape/Rodape";

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
      <body className="bg-slate-200">
        <Cabecalho />
        <main className="bg-white px-32 py-8 flex justify-start items-center flex-col gap-8">{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
