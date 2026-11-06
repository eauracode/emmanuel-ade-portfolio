import { Reveal } from "@/components/reveal";
import { eyebrow as eyebrowClass } from "@/components/ui";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-[40px] sm:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
