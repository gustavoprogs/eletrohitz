import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Festivais() {
  return <section className="container section"><div className="eyebrow">EXPLORAR / 04</div><h1 className="section-title">Festivais<span>.</span></h1><p className="page-intro">Os palcos, experiências e encontros que definem a cultura eletrônica.</p><div className="empty-state"><span>04 — EXPERIENCES</span><h2>Nos encontramos na pista.</h2><p>Coberturas, guias e novidades dos festivais que movimentam o mundo.</p><Link href="/" className="text-link">VOLTAR AO INÍCIO <ArrowUpRight size={16}/></Link></div></section>;
}
