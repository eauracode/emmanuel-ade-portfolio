import Link from "next/link";
import type { Cta } from "@/lib/content";
import { site } from "@/lib/site-config";

// Shared class strings for the "Midnight Studio" look, so every section's
// buttons and labels stay identical.
export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-hover";
export const btnOutline =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border-strong px-6 py-3.5 text-base font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent";
export const btnAccentOutline =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-accent px-5 py-3 text-[15px] font-semibold text-accent transition-colors duration-200 hover:bg-accent-dim";
export const eyebrow = "text-[13px] font-semibold uppercase tracking-[0.08em] text-accent";

/** A link for a Cta: WhatsApp messages and external URLs open in a new tab. */
export function CtaLink({
  cta,
  className,
  children,
}: {
  cta: Cta;
  className?: string;
  children?: React.ReactNode;
}) {
  const href = "waMessage" in cta ? site.whatsappLink(cta.waMessage) : cta.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children ?? cta.label}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children ?? cta.label}
    </a>
  );
}
