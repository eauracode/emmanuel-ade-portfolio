"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/lib/site-config";

export function FloatingWhatsApp() {
  // The contact section already leads with WhatsApp — hide the floating button
  // there so it never covers the form or the card's own CTA on small screens.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.whatsappLink(
        "Hi Emmanuel, I found your portfolio and I'd like to discuss a project.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Emmanuel on WhatsApp"
      aria-hidden={hidden ? "true" : undefined}
      tabIndex={hidden ? -1 : 0}
      className={`group fixed bottom-5 right-5 z-50 flex h-14 items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-105 md:bottom-6 md:right-6 ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      {/* Pulse ring */}
      <span
        aria-hidden
        className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]"
      />
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
      {/* Desktop hover label */}
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width,padding] duration-300 ease-out group-hover:max-w-40 group-hover:pr-5 md:block">
        Chat with me
      </span>
    </a>
  );
}
