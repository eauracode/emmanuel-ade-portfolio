import { Reveal } from "@/components/reveal";
import { CtaLink } from "@/components/ui";
import { whoIHelp } from "@/lib/content";

export function WhoIHelp() {
  return (
    <section id="who" className="scroll-mt-20 border-y border-border-subtle bg-band">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 lg:px-8 lg:py-[88px]">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-[40px]">
            {whoIHelp.heading}
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whoIHelp.cards.map((card, i) => (
            <Reveal key={card.label} delay={0.05 * i}>
              <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-border-mid p-6">
                <span className="text-[13px] text-faint-foreground">{card.label}</span>
                <h3 className="text-[19px] font-semibold text-foreground">{card.lead}</h3>
                <CtaLink
                  cta={card.cta}
                  className="mt-auto inline-flex min-h-11 items-center text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-hover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
