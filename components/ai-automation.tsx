import { Bot, Check, MessageCircle, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { ai } from "@/lib/content";
import { site } from "@/lib/site-config";

const icons = [Workflow, Bot, MessageCircle];

export function AiAutomation() {
  return (
    <section id="ai" className="relative scroll-mt-20 border-t border-border-subtle">
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading eyebrow={ai.eyebrow} title={ai.title} description={ai.intro} />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {ai.cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={card.name} delay={0.06 * i}>
                <article className="group flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface-raised">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-dim">
                      <Icon className="h-5 w-5 text-accent" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.06em] text-faint-foreground">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {card.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {card.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {card.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border-subtle px-2.5 py-0.5 text-xs text-faint-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* CTA banner strip */}
        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-accent/25 bg-accent-dim p-7 sm:p-8">
            <p className="max-w-xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
              {ai.banner.text}
            </p>
            <a
              href={site.whatsappLink(ai.banner.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:bg-accent-hover"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {ai.banner.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
