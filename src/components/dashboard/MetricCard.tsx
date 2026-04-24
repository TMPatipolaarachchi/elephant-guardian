import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: React.ReactNode;
  icon?: LucideIcon;
  hint?: string;
  tone?: "default" | "primary" | "amber" | "danger";
  className?: string;
}

const tones = {
  default: "border-border/60",
  primary: "border-primary/30 bg-primary/5",
  amber: "border-accent/30 bg-accent/5",
  danger: "border-[hsl(var(--risk-critical)/0.4)] bg-[hsl(var(--risk-critical)/0.05)]",
};

export const MetricCard = ({ label, value, icon: Icon, hint, tone = "default", className }: Props) => (
  <div className={cn("glass rounded-2xl p-5", tones[tone], className)}>
    <div className="flex items-center justify-between">
      <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
      {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
    </div>
    <div className="mt-2 font-display text-2xl md:text-3xl font-semibold tracking-tight">{value}</div>
    {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
  </div>
);

export default MetricCard;