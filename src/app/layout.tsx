import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Player } from "@/components/Player";
import "./globals.css";
export const metadata: Metadata = { title: "EletroHitz — Cultura eletrônica em movimento", description: "Notícias, lançamentos, DJs, festivais e agenda da música eletrônica." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header/><main>{children}</main><Player/></body></html>;
}
