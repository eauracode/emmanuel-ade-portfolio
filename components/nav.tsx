"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Absolute paths so the same nav works on the home page and /pricing.
const links = [
  { href: "/#work", label: "Work" },
  { href: "/#who", label: "Who I help" },
  { href: "/pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ current }: { current?: "pricing" }) {
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
          ? "border-b border-border-subtle bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-display text-base font-bold text-on-accent">
            EA
          </span>
          <span className="font-display text-[17px] font-semibold">Emmanuel Ade</span>
        </Link>

        <div className="hidden items-center gap-7 text-[15px] md:flex">
          {links.map((link) => {
            const active = current === "pricing" && link.href === "/pricing";
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "border-b-2 border-accent pb-1 text-foreground"
                    : "text-soft-foreground transition-colors duration-200 hover:text-foreground"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a
          href="#contact"
          className="inline-flex min-h-11 items-center rounded-[10px] bg-accent px-5 text-[15px] font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-hover"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
