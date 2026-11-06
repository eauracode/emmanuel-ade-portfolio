import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const title = "Emmanuel Ade — Launch Your Idea Faster. Cut Your Software Costs.";
const description =
  "I help founders launch investor-ready MVPs in weeks, business owners get online without monthly fees, and companies replace expensive subscriptions with software they actually own.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
