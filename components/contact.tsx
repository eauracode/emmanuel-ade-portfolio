import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/content";
import { site } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 lg:px-8">
        {/* Amber call-to-action panel */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-7 rounded-[28px] bg-accent px-7 py-12 text-on-accent sm:px-12 sm:py-16">
            <h2 className="max-w-[620px] text-4xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              {contact.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.whatsappLink(contact.talkNow.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-background px-6 py-4 font-semibold text-foreground transition-opacity duration-200 hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href="#contact-form"
                className="inline-flex min-h-11 items-center rounded-xl border-2 border-on-accent px-5 py-3.5 font-semibold text-on-accent transition-colors duration-200 hover:bg-on-accent/10"
              >
                Send my idea
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <Reveal>
            <div
              id="contact-form"
              className="h-full scroll-mt-24 rounded-[20px] border border-border-subtle bg-surface p-7 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-foreground">{contact.formTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{contact.intro}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-[20px] border border-border-subtle bg-surface p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">{contact.talkNow.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Skip the form — send me a message and get an answer today.
              </p>
              <a
                href={site.whatsappLink(contact.talkNow.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-[#0b2e17] transition-opacity duration-200 hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {contact.talkNow.ctaLabel}
              </a>

              <div className="mt-auto space-y-1 pt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-11 items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
