import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Headphones, Radio, Sparkles } from "lucide-react";
import { schedule, stories } from "@/lib/site";

export default function Home() {
  const [lead, ...secondary] = stories;

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> CULTURA ELETRÔNICA EM MOVIMENTO</div>
          <h1>O som do<br /><span>agora.</span> E do<br />que vem depois.</h1>
          <p>Um ponto de encontro para quem vive música eletrônica. Descubra sons, histórias, artistas e experiências que movem a cena.</p>
          <div className="hero-actions">
            <Link href="/noticias" className="button-primary">EXPLORAR A CENA <ArrowUpRight size={17} /></Link>
            <a href="#radio" className="button-ghost"><Radio size={17} /> OUVIR A RÁDIO</a>
          </div>
          <div className="hero-meta"><span><Sparkles size={14} /> NOVAS FREQUÊNCIAS, TODA SEMANA</span><span>001 — BRASIL</span></div>
        </div>
        <div className="hero-visual">
          <Image src={lead.image} alt="Público em um festival de música eletrônica" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="image-shade" />
          <div className="hero-image-label"><span>EM DESTAQUE</span><strong>A pista é onde tudo acontece.</strong><small>EXPLORE A CULTURA QUE NOS CONECTA</small></div>
          <div className="visual-index">EH / 001</div>
        </div>
      </section>

      <section className="ticker" aria-label="Manifesto"><div className="ticker-track">FEEL THE FREQUENCY <span>✳</span> LIVE THE MOMENT <span>✳</span> DISCOVER WHAT&apos;S NEXT <span>✳</span> FEEL THE FREQUENCY <span>✳</span></div></section>

      <section className="section container" id="destaques">
        <div className="section-heading"><div><div className="eyebrow">01 / AGORA NA CENA</div><h2>Em destaque<span>.</span></h2></div><Link className="text-link" href="/noticias">VER TODAS AS MATÉRIAS <ArrowRight size={16} /></Link></div>
        <div className="story-grid">
          {secondary.map((story, index) => (
            <article className="story-card" key={story.title}>
              <Link href={index === 0 ? "/lancamentos" : "/festivais"} className="story-image">
                <Image src={story.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span className="story-number">0{index + 2}</span>
              </Link>
              <div className="story-content"><div className="story-category">{story.category}</div><h3><Link href={index === 0 ? "/lancamentos" : "/festivais"}>{story.title}</Link></h3><p>{story.excerpt}</p><div className="story-foot"><span>{story.read}</span><ArrowUpRight size={17} /></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="radio-promo">
        <div className="container radio-promo-inner"><div className="radio-icon"><Headphones size={31} /></div><div><div className="eyebrow">SUA FREQUÊNCIA FAVORITA</div><h2>Uma pista. Infinitas possibilidades.</h2><p>Em breve, sets e faixas selecionadas para acompanhar seu dia.</p></div><a href="#radio" className="button-primary">CONHECER A RÁDIO <ArrowRight size={16} /></a></div>
      </section>

      <section className="section container agenda-section">
        <div className="section-heading"><div><div className="eyebrow">02 / MARQUE NA AGENDA</div><h2>Próximas pistas<span>.</span></h2></div><Link className="text-link" href="/agenda">AGENDA COMPLETA <ArrowRight size={16} /></Link></div>
        <div className="agenda-list">{schedule.map((event) => <article className="agenda-row" key={event.name}><div className="event-date">{event.day}</div><div className="event-name"><h3>{event.name}</h3><span>{event.city}</span></div><div className="event-genre">{event.genre}</div><ArrowUpRight className="event-arrow" size={20} /></article>)}</div>
      </section>

      <footer className="footer"><div className="container footer-inner"><Link href="/" className="brand"><span className="brand-mark">E</span><span>ELETRO<span className="brand-accent">HITZ</span></span></Link><p>Conectando pessoas através da música eletrônica.</p><span>© 2026 ELETROHITZ</span></div></footer>
    </>
  );
}
