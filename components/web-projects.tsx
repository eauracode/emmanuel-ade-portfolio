import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CtaLink, eyebrow } from "@/components/ui";
import { work, type Project } from "@/lib/content";

const linkClass =
  "inline-flex min-h-11 items-center text-[15px] font-semibold text-accent transition-colors duration-200 hover:text-accent-hover";

function Shot({ project, height }: { project: Project; height: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-border-subtle bg-surface-raised ${height}`}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export function WebProjects() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-24 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[44px]">
            {work.title}
            <br />
            {work.titleLine2}
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-5">
          {work.featured.map((project, i) => (
            <Reveal
              key={project.name}
              delay={0.05 * i}
              className={i === 0 ? "min-w-0 flex-[2_1_560px]" : "min-w-0 flex-[1_1_320px]"}
            >
              <article className="group flex h-full flex-col gap-5 rounded-[20px] border border-border-subtle bg-surface p-6 transition-colors duration-300 hover:border-border-strong sm:p-7">
                <Shot project={project} height="h-56 sm:h-[300px]" />
                <div className="mt-auto flex flex-wrap items-end justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    <span className={eyebrow}>{project.category}</span>
                    <h3 className="text-2xl font-semibold text-foreground sm:text-[28px]">
                      {project.name}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                  <CtaLink cta={project.cta} className={linkClass} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {work.more.map((project, i) => (
            <Reveal key={project.name} delay={0.05 * i}>
              <article className="group flex h-full flex-col gap-4 rounded-[20px] border border-border-subtle bg-surface p-6 transition-colors duration-300 hover:border-border-strong">
                <Shot project={project} height="h-[170px]" />
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <CtaLink cta={project.cta} className={`${linkClass} mt-auto`} />
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <article className="flex h-full flex-col justify-between gap-4 rounded-[20px] bg-accent p-6 text-on-accent">
              <span className="text-xs font-bold uppercase tracking-[0.06em]">
                {work.aiTile.category}
              </span>
              <h3 className="text-2xl font-semibold leading-[1.2]">{work.aiTile.text}</h3>
              <CtaLink
                cta={work.aiTile.cta}
                className="inline-flex min-h-11 items-center text-[15px] font-bold underline decoration-2 underline-offset-4"
              />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
