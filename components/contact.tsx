import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/content";
import { site } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16 border-t border-border-subtle">
      <div aria-hidden className="glow-contact pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {contact.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contact.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7 sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {contact.formTitle}
              </h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-7 sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {contact.talkNow.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Skip the form — send me a message and get an answer today.
              </p>
              <a
                href={site.whatsappLink(contact.talkNow.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(37,211,102,0.35)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {contact.talkNow.ctaLabel}
              </a>

              <div className="mt-auto space-y-3 pt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="relative border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-faint-foreground">
          <p>
            © {new Date().getFullYear()} {site.name} · Lagos, Nigeria ·{" "}
            {contact.footerLine}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.whatsappLink(contact.talkNow.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-colors duration-200 hover:text-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="transition-colors duration-200 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-200 hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
