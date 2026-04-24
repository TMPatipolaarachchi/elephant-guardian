import { cn } from "@/lib/utils";
import type { RiskLevel } from "@/data/mockData";

const styles: Record<RiskLevel, string> = {
  none: "bg-[hsl(var(--risk-none)/0.15)] text-[hsl(var(--risk-none))] border-[hsl(var(--risk-none)/0.3)]",
  low: "bg-[hsl(var(--risk-low)/0.15)] text-[hsl(var(--risk-low))] border-[hsl(var(--risk-low)/0.3)]",
  medium: "bg-[hsl(var(--risk-medium)/0.15)] text-[hsl(var(--risk-medium))] border-[hsl(var(--risk-medium)/0.3)]",
  high: "bg-[hsl(var(--risk-high)/0.15)] text-[hsl(var(--risk-high))] border-[hsl(var(--risk-high)/0.3)]",
  critical: "bg-[hsl(var(--risk-critical)/0.2)] text-[hsl(var(--risk-critical))] border-[hsl(var(--risk-critical)/0.4)] animate-pulse-glow",
};

export const RiskBadge = ({ level, className }: { level: RiskLevel; className?: string }) => (
  <span className={cn(
    "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border uppercase tracking-wider",
    styles[level],
    className
  )}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {level}
  </span>
);

export default RiskBadge;