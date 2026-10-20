import {
  ArrowUpRight,
  Bike,
  MessageSquareText,
  PackageCheck,
  Sparkles,
  Warehouse,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { vendoor } from "@/lib/content";
import { site } from "@/lib/site-config";

const pipelineIcons = [MessageSquareText, Sparkles, Warehouse, Bike, PackageCheck];

export function VendoorCaseStudy() {
  return (
    <section id="work" className="relative scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {vendoor.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {vendoor.title}
          </h2>
          <p className="mt-4 text-lg font-medium text-foreground sm:text-xl">
            {vendoor.lead}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {vendoor.summary}
          </p>
        </Reveal>

        {/* Order-to-doorstep pipeline */}
        <Reveal delay={0.1} className="mt-14">
          <div className="no-scrollbar overflow-x-auto rounded-2xl border border-border-subtle bg-surface p-6">
            <ol className="flex min-w-max items-center gap-3 sm:gap-4">
              {vendoor.pipeline.map((label, i) => {
                const Icon = pipelineIcons[i % pipelineIcons.length];
                return (
                  <li key={label} className="flex items-center gap-3 sm:gap-4">
                    <span className="flex max-w-56 items-center gap-3 rounded-xl border border-border-subtle bg-surface-raised px-4 py-3">
                      <Icon className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm font-medium leading-snug text-foreground">
                        {label}
                      </span>
                    </span>
                    {i < vendoor.pipeline.length - 1 ? (
                      <span
                        aria-hidden
                        className="h-px w-6 shrink-0 bg-gradient-to-r from-border-strong to-accent/40 sm:w-8"
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
              {vendoor.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {vendoor.highlights.map((highlight, i) => (
            <Reveal key={highlight.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
                <h3 className="text-base font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {highlight.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <ul className="flex flex-wrap gap-1.5">
            {vendoor.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border-subtle px-2.5 py-0.5 font-mono text-[11px] text-faint-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.whatsappLink(vendoor.primaryCta.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-[#052e21] transition-all duration-200 hover:bg-accent hover:shadow-[0_0_32px_rgba(52,211,153,0.35)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {vendoor.primaryCta.label}
            </a>
            <a
              href={vendoor.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent"
            >
              {vendoor.secondaryCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
