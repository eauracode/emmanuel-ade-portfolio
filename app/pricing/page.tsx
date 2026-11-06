import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import {
  PricingClosing,
  PricingCustom,
  PricingHeader,
  PricingPlans,
} from "@/components/pricing";

const title = "Online store pricing — Emmanuel Ade";
const description =
  "Your own online store from ₦75,000, one-off with ₦0/month after. Starter, Premium and Gold plans for SMEs and online vendors, with payments and WhatsApp built in.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function PricingPage() {
  return (
    <>
      <Nav current="pricing" />
      <main>
        <PricingHeader />
        <PricingPlans />
        <PricingCustom />
        <PricingClosing />
      </main>
      <Footer />
    </>
  );
}
