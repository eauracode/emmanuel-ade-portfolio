import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillsSection } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          eyebrow={skillsSection.eyebrow}
          title={skillsSection.title}
          description={skillsSection.intro}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillsSection.groups.map((group, i) => (
            <Reveal key={group.group} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6">
                <h3 className="text-sm font-semibold leading-snug text-accent">
                  {group.group}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-[#052e21] transition-all duration-200 hover:bg-accent hover:shadow-[0_0_32px_rgba(52,211,153,0.35)]"
          >
            {skillsSection.ctaLabel}
            <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
