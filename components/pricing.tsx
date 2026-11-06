import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { btnAccentOutline, btnPrimary, eyebrow } from "@/components/ui";
import { pricing } from "@/lib/content";
import { site } from "@/lib/site-config";

/** Centred page header for /pricing. */
export function PricingHeader() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 pb-14 pt-36 text-center lg:px-8 lg:pt-40">
      <p className={eyebrow}>{pricing.eyebrow}</p>
      <h1 className="max-w-[860px] text-[2.6rem] font-bold leading-[1.04] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[64px]">
        {pricing.title} <span className="text-accent">{pricing.titleAccent}</span>
      </h1>
      <p className="max-w-[640px] text-lg leading-relaxed text-muted-foreground sm:text-[19px]">
        {pricing.intro}
      </p>
    </section>
  );
}

/** The three plan cards, the footnote and the benefits strip. */
export function PricingPlans() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-3">
        {pricing.plans.map((plan, i) => {
          const featured = "badge" in plan;
          return (
            <Reveal key={plan.name} delay={0.06 * i}>
              <article
                className={`flex h-full flex-col gap-5 rounded-3xl p-8 ${
                  featured
                    ? "border-2 border-accent bg-surface"
                    : "border border-border-mid"
                }`}
              >
                <div className="flex min-h-[30px] items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-foreground">{plan.name}</h2>
                  {featured ? (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-on-accent">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-display text-5xl font-bold tracking-[-0.02em] text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-faint-foreground">One-off · ₦0/month after</span>
                </div>

                <p className="text-[15px] text-soft-foreground">{plan.tagline}</p>

                <ul className="flex flex-grow flex-col gap-3 text-[15px] text-foreground/90">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={site.whatsappLink(plan.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    featured
                      ? `${btnPrimary} w-full`
                      : "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border-strong px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                  }
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {plan.ctaLabel}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-faint-foreground">{pricing.footnote}</p>

      <Reveal className="mt-14">
        <div className="grid gap-px overflow-hidden rounded-[20px] border border-border-subtle bg-border-subtle sm:grid-cols-3">
          {pricing.benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-2 bg-background p-7">
              <h3 className="text-[19px] font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-[15px] leading-relaxed text-faint-foreground">{benefit.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/** "Need something other than a store?" band on /pricing. */
export function PricingCustom() {
  return (
    <section className="border-y border-border-subtle bg-band">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-16 lg:px-8 lg:py-[72px]">
        <div className="flex max-w-[640px] flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-[34px]">
            {pricing.custom.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">{pricing.custom.body}</p>
        </div>
        <a
          href={site.whatsappLink(pricing.custom.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={btnAccentOutline}
        >
          {pricing.custom.ctaLabel}
        </a>
      </div>
    </section>
  );
}

/** Closing amber panel on /pricing. */
export function PricingClosing() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-7 rounded-[28px] bg-accent px-7 py-12 text-on-accent sm:px-12 sm:py-16">
        <h2 className="max-w-[620px] text-4xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
          {pricing.closing.title}
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.whatsappLink(pricing.closing.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-background px-6 py-4 font-semibold text-foreground transition-opacity duration-200 hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {pricing.closing.waLabel}
          </a>
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center rounded-xl border-2 border-on-accent px-5 py-3.5 font-semibold text-on-accent transition-colors duration-200 hover:bg-on-accent/10"
          >
            {pricing.closing.workLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

/** One-line pointer to /pricing on the home page. */
export function PricingTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] border border-border-mid px-7 py-7 sm:px-8">
          <div className="flex flex-col gap-1.5">
            <p className="font-display text-xl font-semibold text-foreground sm:text-[22px]">
              {pricing.teaser.title}
            </p>
            <p className="text-[15px] text-faint-foreground">{pricing.teaser.body}</p>
          </div>
          <Link href="/pricing" className={btnAccentOutline}>
            {pricing.teaser.ctaLabel}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
