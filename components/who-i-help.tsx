import { Lightbulb, Store, ShoppingCart, DatabaseZap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whoIHelp } from "@/lib/content";
import { site } from "@/lib/site-config";

const icons = [Lightbulb, Store, ShoppingCart, DatabaseZap];

export function WhoIHelp() {
  return (
    <section id="who" className="scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Who I Help
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {whoIHelp.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {whoIHelp.cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={card.title} delay={0.05 * i}>
                <article className="group flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface-raised sm:p-8">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-dim">
                      <Icon className="h-5 w-5 text-accent" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint-foreground">
                      {card.title}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                    {card.lead}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>

                  <div className="mt-auto pt-7">
                    <a
                      href={site.whatsappLink(card.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-[#052e21] transition-all duration-200 hover:bg-accent hover:shadow-[0_0_28px_rgba(52,211,153,0.3)]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {card.ctaLabel}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
