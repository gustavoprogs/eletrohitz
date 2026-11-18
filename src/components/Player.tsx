"use client";
import { useState } from "react";
import { Pause, Play, Radio, Volume2 } from "lucide-react";
import { radioStreamUrl } from "@/lib/site";
export function Player() {
  const [playing, setPlaying] = useState(false);
  return <aside className="player-bar" id="radio" aria-label="Player da rádio"><div className="container player-inner">
    <div className="player-station"><span className="live-dot"/><div><strong>ELETROHITZ RADIO</strong><small>ELETRÔNICA SEM PAUSA</small></div></div>
    <div className="player-track"><Radio size={18}/><div><strong>Em sintonia com a cena</strong><small>{radioStreamUrl ? "Transmissão online" : "Rádio em preparação"}</small></div></div>
    <button className="play-button" onClick={() => { if (radioStreamUrl) setPlaying(!playing); }} aria-label={playing ? "Pausar rádio" : "Tocar rádio"} title={radioStreamUrl ? "Reproduzir rádio" : "Stream será configurado na próxima etapa"} disabled={!radioStreamUrl}>{playing ? <Pause size={18}/> : <Play size={18} fill="currentColor"/>}</button>
    <div className="volume"><Volume2 size={18}/><span>STREAM</span></div>
  </div></aside>;
}
