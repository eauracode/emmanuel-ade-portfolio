"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/lib/site-config";

const projectTypes = [
  "MVP / Prototype for investors",
  "Business website",
  "Online store",
  "Internal system / Replace subscriptions",
  "Automation / Save my team time",
  "Something else",
];

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-border-subtle bg-surface-raised px-4 py-3 text-sm text-foreground placeholder:text-faint-foreground transition-colors duration-200 focus:border-accent/60 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields — silently drop those submissions.
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New project inquiry from your portfolio",
          from_name: "Portfolio Contact Form",
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || "not provided",
          project_type: data.get("project_type"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-accent/30 bg-accent-dim p-8">
        <p className="text-lg font-semibold text-foreground">
          Got it — I&apos;ll reply within 24 hours.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Want a faster answer?</p>
        <a
          href={site.whatsappLink("Hi Emmanuel, I just sent you a message through your portfolio form.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#0b2e17] transition-transform duration-200 hover:scale-[1.03]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      {/* Honeypot — hidden from humans, tempting for bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          WhatsApp / Phone <span className="text-faint-foreground">(optional)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          placeholder="+234..."
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="cf-type" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          What do you want to build? <span className="text-accent">*</span>
        </label>
        <select id="cf-type" name="project_type" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Choose one...
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-surface-raised text-foreground">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your idea, your business, or the problem you want to solve..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === "error" ? (
        <div className="rounded-xl border border-border-strong bg-surface-raised p-4 text-sm text-muted-foreground" role="alert">
          Something went wrong sending your message. Reach me directly instead:{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-accent hover:text-accent-hover">
            {site.email}
          </a>{" "}
          or{" "}
          <a
            href={site.whatsappLink("Hi Emmanuel, I'd like to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:text-accent-hover"
          >
            WhatsApp
          </a>
          .
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send my idea
          </>
        )}
      </button>
      <p className="text-xs text-faint-foreground">
        Goes straight to my inbox — I reply within 24 hours.
      </p>
    </form>
  );
}
