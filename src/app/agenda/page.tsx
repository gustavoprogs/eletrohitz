import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { schedule } from "@/lib/site";

export default function Agenda() {
  return <section className="container section"><div className="eyebrow">EXPLORAR / 05</div><h1 className="section-title">Agenda<span>.</span></h1><p className="page-intro">Encontre seu próximo encontro com a música eletrônica.</p><div className="agenda-list">{schedule.map((event) => <article className="agenda-row" key={event.name}><div className="event-date">{event.day}</div><div className="event-name"><h3>{event.name}</h3><span>{event.city}</span></div><div className="event-genre">{event.genre}</div><ArrowUpRight className="event-arrow" size={20}/></article>)}</div><p className="page-intro">Eventos ilustrativos para demonstrar o layout; a agenda real será conectada a uma fonte editorial.</p><Link href="/" className="text-link">VOLTAR AO INÍCIO <ArrowUpRight size={16}/></Link></section>;
}
