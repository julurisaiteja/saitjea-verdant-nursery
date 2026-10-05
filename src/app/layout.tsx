import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { WishlistProvider } from "@/lib/wishlist";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

const display = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400","700"],
});
const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400","500","600"],
});

export const metadata: Metadata = {
  title: "Verdant",
  description: "Leaf-led rooms that breathe with you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="organic-bohemian">
      <body className={`${display.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider slug="verdant-nursery">
          <WishlistProvider slug="verdant-nursery">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <AiAssistant />
            <StickyMobileCta />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
