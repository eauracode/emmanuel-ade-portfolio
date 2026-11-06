"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { btnOutline, btnPrimary } from "@/components/ui";
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
    <section id="top" className="relative">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-12 px-6 pb-16 pt-32 lg:px-8 lg:pt-36">
        <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 self-start rounded-full border border-border-mid px-3.5 py-2 text-[13px] text-soft-foreground"
          >
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-live" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            {...fadeUp(0.08)}
            className="max-w-[680px] text-[2.6rem] font-bold leading-[1.04] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[64px]"
          >
            Your idea, built and live — <span className="text-accent">faster and cheaper</span>{" "}
            than you thought possible.
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="max-w-[680px] text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {hero.sub}
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3.5">
            <a
              href={site.whatsappLink(hero.primaryCta.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className={btnOutline}>
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.2)}
          className="relative mx-auto flex h-[420px] w-full max-w-[420px] flex-[0_1_420px] items-end justify-center sm:h-[500px]"
        >
          <div
            aria-hidden
            className="glow-portrait absolute bottom-10 left-1/2 h-[420px] w-[110%] -translate-x-1/2"
          />
          <div className="relative h-[400px] w-[340px] max-w-full overflow-hidden sm:h-[462px] sm:w-[400px]">
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={447}
              height={558}
              priority
              sizes="(min-width: 640px) 400px, 340px"
              className="block h-auto w-full"
            />
            <div aria-hidden className="fade-portrait absolute inset-x-0 bottom-0 h-36" />
          </div>
          <div className="absolute bottom-12 left-0 flex flex-col gap-0.5 rounded-[14px] border border-border-mid bg-surface px-4 py-3">
            <span className="font-display text-[15px] font-semibold text-foreground">
              {hero.portrait.name}
            </span>
            <span className="text-[13px] text-faint-foreground">{hero.portrait.role}</span>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <motion.dl
          {...fadeUp(0.38)}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5 bg-background p-6 sm:p-7">
              <dt className="order-last text-sm text-faint-foreground">{stat.label}</dt>
              <dd
                className={`font-display text-3xl font-bold sm:text-4xl ${
                  stat.accent ? "text-accent" : "text-foreground"
                }`}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
