import itemsA from "./items-a.json";
import itemsB from "./items-b.json";

export type CatalogItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  badge: string | null;
  rating: number;
  reviews: number;
  specs: Record<string, string>;
  options: string[];
  pdpFaqs: { q: string; a: string }[];
};

export const brand = {
  name: "Verdant",
  tagline: "Leaf-led rooms that breathe with you.",
  slug: "verdant-nursery",
  style: "organic-bohemian",
  coupon: "LEAF12",
  cta: "Find your light",
  heroStill: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1800&q=80",
  heroVideo: "https://videos.pexels.com/video-files/3201762/3201762-uhd_2560_1440_25fps.mp4" as string | null,
  shopLabel: "Bench stock",
  nichePath: "care",
  nicheLabel: "Care",
  isBooking: false,
  stickyCta: "Order ahead",
  stickyHref: "/order",
};

export const items: CatalogItem[] = [...itemsA, ...itemsB] as CatalogItem[];

export const reviewList = [
  {
    "name": "Garden Lea",
    "quote": "Care matcher saved my calathea."
  },
  {
    "name": "Theo B.",
    "quote": "Bench stock felt like a greenhouse walk."
  },
  {
    "name": "Iris M.",
    "quote": "Leaf textures, honest light notes."
  }
];

export const aiFaqs = [
  {
    "q": "Low light plants?",
    "a": "Snake Plant Tower and Pothos Cascade tolerate shade."
  },
  {
    "q": "Care help?",
    "a": "/care matches light + humidity to plants."
  },
  {
    "q": "LEAF12?",
    "a": "$12 off Soil + Care Kit in demo."
  }
];

export const counselTips = [
  {
    "title": "Drainage",
    "body": "Every pot needs a hole or cache pot."
  },
  {
    "title": "Quarantine",
    "body": "Isolate new plants for two weeks."
  },
  {
    "title": "Mist",
    "body": "Calatheas love humidity trays — see /care."
  }
];

export const categories = Array.from(new Set(items.map((i) => i.category)).sort());

export function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getItem(id: string) {
  return items.find((i) => i.id === id);
}

export function relatedItems(id: string, limit = 3) {
  const item = getItem(id);
  if (!item) return [];
  return items.filter((i) => i.category === item.category && i.id !== id).slice(0, limit);
}
