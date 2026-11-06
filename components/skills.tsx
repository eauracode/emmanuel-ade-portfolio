import { Reveal } from "@/components/reveal";
import { btnPrimary } from "@/components/ui";
import { SectionHeading } from "@/components/section-heading";
import { skillsSection } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border-subtle">
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
                      className="rounded-full border border-border-subtle px-2.5 py-1 text-xs text-muted-foreground"
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
            className={btnPrimary}
          >
            {skillsSection.ctaLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
