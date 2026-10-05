import Image from "next/image";
import Link from "next/link";
import { brand, items, formatMoney } from "@/lib/data";
import { AddButton } from "@/components/AddButton";
import { PromoStrip } from "@/components/PromoStrip";
import { ReviewRail } from "@/components/ReviewRail";

export default function HomePage() {
  const featured = items.slice(0, 4);
  return (
    <div data-style="organic-bohemian" className="leaf-wash kraft min-h-screen">
      <PromoStrip />
      <section className="relative min-h-[92svh] overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover opacity-55 anim-drift" autoPlay muted loop playsInline poster={brand.heroStill}>
          <source src={brand.heroVideo!} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-5xl flex-col justify-end px-5 pb-16 md:px-8">
          <p className="font-display text-5xl md:text-7xl anim-rise">{brand.name}</p>
          <h1 className="mt-3 max-w-lg text-lg text-mute anim-rise" style={{animationDelay:"100ms"}}>{brand.tagline}</h1>
          <div className="mt-8 flex flex-wrap gap-3 anim-rise" style={{animationDelay:"200ms"}}>
            <Link href="/care" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">{brand.cta}</Link>
            <Link href="/shop" className="rounded-full border border-line bg-surface/80 px-6 py-3 text-sm backdrop-blur">Bench stock</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-display text-3xl">Greenhouse bench</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {featured.map((item) => (
            <article key={item.id} className="rounded-2xl border border-line bg-surface/90 p-4 shadow-sm">
              <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-xl">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="25vw" />
              </div>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="text-sm text-mute">{item.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-accent font-semibold">{formatMoney(item.price)}</span>
                <AddButton item={item} label="Pot it" />
              </div>
            </article>
          ))}
        </div>
      </section>
      
      <section className="kraft mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-display text-3xl">Bench notes</h2>
        <p className="mt-2 max-w-lg text-mute">Each plant ships with light + water card. Match your room on /care.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface/90 p-6 anim-rise">
            <p className="font-display text-xl">Morning mist</p>
            <p className="mt-2 text-sm text-mute">Calatheas and ferns love humidity trays — not misting at night.</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface/90 p-6 anim-rise" style={{animationDelay:"120ms"}}>
            <p className="font-display text-xl">South window</p>
            <p className="mt-2 text-sm text-mute">Olive and fiddle want bright hours — sheer curtain diffuses peak sun.</p>
          </div>
        </div>
      </section>
      <section className="leaf-wash border-t border-line py-14 text-center">
        <p className="font-display text-2xl anim-pulse">Leaf-led rooms</p>
        <p className="mt-2 text-sm text-mute">Greenhouse bench stock refreshed Thursdays (demo).</p>
      </section>

      <ReviewRail />
    </div>
  );
}
