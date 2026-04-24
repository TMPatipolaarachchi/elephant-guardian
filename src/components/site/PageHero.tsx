import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export const PageHero = ({ eyebrow, title, description, className }: Props) => (
  <section className={cn("relative overflow-hidden", className)}>
    <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    <div className="container max-w-5xl mx-auto px-4 py-16 md:py-24 relative">
      <div className="text-center space-y-5 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-primary/30 bg-primary/10 text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;