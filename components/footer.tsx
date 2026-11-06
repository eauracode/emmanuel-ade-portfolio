import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { contact } from "@/lib/content";
import { site } from "@/lib/site-config";

const iconLink =
  "flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200 hover:text-accent";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-faint-foreground lg:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · Lagos, Nigeria · {contact.footerLine}
        </p>
        <div className="flex items-center gap-1">
          <a
            href={site.whatsappLink(contact.talkNow.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={iconLink}
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className={iconLink}>
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLink}
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
