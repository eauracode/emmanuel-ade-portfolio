import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { pricing } from "@/lib/content";
import { site } from "@/lib/site-config";

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-16 border-t border-border-subtle">
      <div aria-hidden className="glow-ai pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.intro}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => {
            const featured = "badge" in plan;
            return (
              <Reveal key={plan.name} delay={0.06 * i}>
                <article
                  className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 sm:p-8 ${
                    featured
                      ? "border-accent/50 bg-surface-raised shadow-[0_0_48px_rgba(52,211,153,0.08)]"
                      : "border-border-subtle bg-surface hover:border-accent/40 hover:bg-surface-raised"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {plan.name}
                    </h3>
                    {featured ? (
                      <span className="rounded-full bg-accent-dim px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-5 text-4xl font-semibold tracking-tight text-foreground">
                    {plan.price}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-faint-foreground">
                    One-off · ₦0/month after
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {plan.tagline}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <a
                      href={site.whatsappLink(plan.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                        featured
                          ? "bg-accent-strong text-[#052e21] hover:bg-accent hover:shadow-[0_0_28px_rgba(52,211,153,0.3)]"
                          : "border border-border-strong text-foreground hover:border-accent/60 hover:text-accent"
                      }`}
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {plan.ctaLabel}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-faint-foreground">
            {pricing.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
