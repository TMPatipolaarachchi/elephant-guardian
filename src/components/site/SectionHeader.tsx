import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, description, align = "center", className }: Props) => (
  <div className={cn(
    "max-w-2xl space-y-4",
    align === "center" ? "mx-auto text-center" : "",
    className
  )}>
    {eyebrow && (
      <div className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-primary/30 bg-primary/10 text-primary",
      )}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
        {eyebrow}
      </div>
    )}
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;