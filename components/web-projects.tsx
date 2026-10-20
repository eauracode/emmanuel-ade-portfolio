import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { webProjects, type ProjectCta } from "@/lib/content";
import { site } from "@/lib/site-config";

function ProjectCtaLink({ cta, primary }: { cta: ProjectCta; primary: boolean }) {
  const isWhatsApp = "waMessage" in cta;
  const href = isWhatsApp ? site.whatsappLink(cta.waMessage) : cta.href;

  if (primary) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-[#052e21] transition-all duration-200 hover:bg-accent hover:shadow-[0_0_28px_rgba(52,211,153,0.3)]"
      >
        {isWhatsApp ? <WhatsAppIcon className="h-4 w-4" /> : null}
        {cta.label}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent"
    >
      {cta.label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function WebProjects() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading eyebrow={webProjects.eyebrow} title={webProjects.title} />

        <div className="mt-14 space-y-6">
          {webProjects.projects.map((project, i) => (
            <Reveal key={project.name} delay={0.05}>
              <article
                className={`group grid overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-colors duration-300 hover:border-accent/40 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                <div className="flex flex-col p-8 sm:p-10">
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border-subtle px-2.5 py-0.5 font-mono text-[11px] text-faint-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                    {project.ctas.map((cta, ctaIndex) => {
                      const hasWhatsAppCta = project.ctas.some((c) => "waMessage" in c);
                      return (
                        <ProjectCtaLink
                          key={cta.label}
                          cta={cta}
                          primary={
                            "waMessage" in cta || (!hasWhatsAppCta && ctaIndex === 0)
                          }
                        />
                      );
                    })}
                  </div>
                </div>

                {project.image ? (
                  <div className="relative min-h-64 overflow-hidden border-t border-border-subtle lg:min-h-full lg:border-t-0">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"
                    />
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
