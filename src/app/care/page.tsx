"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { items } from "@/lib/data";

const lightOpts = ["Bright indirect", "Low / shade", "Direct sun"];
const humidityOpts = ["Average", "High", "Dry"];

export default function CarePage() {
  const [light, setLight] = useState(lightOpts[0]);
  const [humidity, setHumidity] = useState(humidityOpts[0]);

  const match = useMemo(() => {
    if (light.includes("Low")) return items.find((i) => i.title.includes("Snake")) ?? items[2];
    if (humidity === "High") return items.find((i) => i.title.includes("Calathea")) ?? items[6];
    if (light.includes("Direct")) return items.find((i) => i.title.includes("Olive")) ?? items[1];
    return items[0];
  }, [light, humidity]);

  return (
    <div data-style="organic-bohemian" className="leaf-wash kraft mx-auto max-w-4xl px-5 py-16 md:px-8">
      <h1 className="font-display text-4xl">Care matcher</h1>
      <p className="mt-2 text-mute">Tune light and humidity — demo recommendations only.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-semibold">Light
          <select value={light} onChange={(e) => setLight(e.target.value)} className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-2">{lightOpts.map((o) => <option key={o}>{o}</option>)}</select>
        </label>
        <label className="block text-sm font-semibold">Humidity
          <select value={humidity} onChange={(e) => setHumidity(e.target.value)} className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-2">{humidityOpts.map((o) => <option key={o}>{o}</option>)}</select>
        </label>
      </div>
      <div className="mt-10 rounded-2xl border border-line bg-surface/90 p-6 anim-rise">
        <p className="text-xs uppercase tracking-widest text-mute">Suggested</p>
        <p className="mt-2 font-display text-2xl">{match?.title}</p>
        <p className="text-sm text-mute">{match?.description}</p>
        <Link href={`/shop/${match?.id}`} className="mt-4 inline-block rounded-full bg-accent px-5 py-2 text-sm text-white">View plant</Link>
      </div>
    </div>
  );
}
