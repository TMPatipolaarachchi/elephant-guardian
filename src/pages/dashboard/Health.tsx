import { Cpu, CheckCircle2, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import { deviceHealth } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Health = () => (
  <div className="p-4 md:p-8 max-w-7xl mx-auto">
    <PageHeader title="Device Health" subtitle="Edge hardware and connectivity diagnostics" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {deviceHealth.map((d) => {
        const ok = d.status === "online";
        return (
          <div key={d.name} className={cn(
            "glass rounded-2xl p-5 border",
            ok ? "border-primary/20" : "border-accent/30"
          )}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className={cn(
                  "h-9 w-9 rounded-lg flex items-center justify-center",
                  ok ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                )}>
                  <Cpu className="h-4 w-4" />
                </div>
                <div className="font-display font-medium text-sm">{d.name}</div>
              </div>
              <span className={cn(
                "text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1.5",
                ok ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
              )}>
                {ok ? <CheckCircle2 className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
                {d.status}
              </span>
            </div>
            <div className="font-display text-2xl font-semibold">{d.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{d.detail}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Health;