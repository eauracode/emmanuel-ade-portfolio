"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#who", label: "Who I Help" },
  { href: "#work", label: "Proof of Work" },
  { href: "#projects", label: "What I've Built" },
  { href: "#pricing", label: "Pricing" },
  { href: "#skills", label: "How It Works" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-dim font-mono text-xs font-medium text-accent">
            EA
          </span>
          Emmanuel Ade
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-accent-strong px-4 py-1.5 text-sm font-semibold text-[#052e21] transition-all duration-200 hover:bg-accent hover:shadow-[0_0_24px_rgba(52,211,153,0.3)]"
        >
          Start a Project
        </a>
      </nav>
    </header>
  );
}
