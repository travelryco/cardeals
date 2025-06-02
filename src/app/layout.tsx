import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarDeals - Premium Car Deals & Finds",
  description: "Get the best car deals before anyone else. Access rare finds, clean titles, and flip-worthy gems with our premium car deals platform.",
  keywords: ["car deals", "used cars", "car marketplace", "automotive deals", "car finder"],
  authors: [{ name: "CarDeals Team" }],
  openGraph: {
    title: "CarDeals - Premium Car Deals & Finds",
    description: "Get the best car deals before anyone else. Access rare finds, clean titles, and flip-worthy gems.",
    type: "website",
    locale: "en_US",
    siteName: "CarDeals",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarDeals - Premium Car Deals & Finds",
    description: "Get the best car deals before anyone else. Access rare finds, clean titles, and flip-worthy gems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
