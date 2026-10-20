"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { hero, stats } from "@/lib/content";
import { site } from "@/lib/site-config";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="glow-hero pointer-events-none absolute inset-0" />
      <div aria-hidden className="grid-hero pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pb-20 pt-32">
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Your idea,{" "}
          <span className="bg-gradient-to-r from-accent via-emerald-300 to-teal-200 bg-clip-text text-transparent">
            built and live
          </span>{" "}
          — faster and cheaper than you thought possible.
        </motion.h1>

        <motion.p
          {...fadeUp(0.18)}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {hero.sub}
        </motion.p>

        <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={site.whatsappLink(hero.primaryCta.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-[#052e21] transition-all duration-200 hover:bg-accent hover:shadow-[0_0_32px_rgba(52,211,153,0.35)]"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            {hero.secondaryCta.label}
            <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.dl
          {...fadeUp(0.38)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-6 py-5">
              <dt className="order-last mt-1 text-xs leading-snug text-faint-foreground">
                {stat.label}
              </dt>
              <dd className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
