import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
