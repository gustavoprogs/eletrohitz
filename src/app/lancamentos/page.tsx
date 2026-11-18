import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Lancamentos() {
  return <section className="container section"><div className="eyebrow">EXPLORAR / 02</div><h1 className="section-title">Lançamentos<span>.</span></h1><p className="page-intro">Singles, EPs e álbuns para descobrir novos caminhos sonoros.</p><div className="empty-state"><span>02 — NEW MUSIC</span><h2>Seu próximo som favorito está por vir.</h2><p>Em breve: curadoria de lançamentos e novidades dos artistas.</p><Link href="/" className="text-link">VOLTAR AO INÍCIO <ArrowUpRight size={16}/></Link></div></section>;
}
