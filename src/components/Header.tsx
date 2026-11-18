import Link from "next/link";
import { Menu, Radio } from "lucide-react";
import { navigation } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="EletroHitz início">
          <span className="brand-mark">E</span>
          <span>ELETRO<span className="brand-accent">HITZ</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <a className="header-radio" href="#radio"><Radio size={16} /> AO VIVO</a>
        <button className="mobile-menu" aria-label="Menu"><Menu size={22} /></button>
      </div>
    </header>
  );
}
