import { useMemo, useState } from "react";
import PageHeader from "@/components/dashboard/PageHeader";
import RiskBadge from "@/components/site/RiskBadge";
import { events, type Behavior, type GroupType, type RiskLevel } from "@/data/mockData";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { CheckCircle2, X } from "lucide-react";

const Events = () => {
  const [behavior, setBehavior] = useState<Behavior | "all">("all");
  const [risk, setRisk] = useState<RiskLevel | "all">("all");
  const [group, setGroup] = useState<GroupType | "all">("all");

  const filtered = useMemo(() =>
    events.filter((e) =>
      (behavior === "all" || e.behavior === behavior) &&
      (risk === "all" || e.riskLevel === risk) &&
      (group === "all" || e.groupType === group)
    ), [behavior, risk, group]);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Event Timeline"
        subtitle="Recent detection events streamed from all pillar nodes"
      />

      <div className="glass rounded-2xl p-4 mb-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        <Select value={behavior} onValueChange={(v) => setBehavior(v as never)}>
          <SelectTrigger className="bg-background/50"><SelectValue placeholder="Behavior" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All behaviors</SelectItem>
            <SelectItem value="calm">Calm</SelectItem>
            <SelectItem value="aggressive">Aggressive</SelectItem>
          </SelectContent>
        </Select>
        <Select value={risk} onValueChange={(v) => setRisk(v as never)}>
          <SelectTrigger className="bg-background/50"><SelectValue placeholder="Risk level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All risk levels</SelectItem>
            {(["none","low","medium","high","critical"] as RiskLevel[]).map(r =>
              <SelectItem key={r} value={r} className="capitalize">{r}</SelectItem>
            )}
          </SelectContent>
        </Select>
        <Select value={group} onValueChange={(v) => setGroup(v as never)}>
          <SelectTrigger className="bg-background/50"><SelectValue placeholder="Group type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All groups</SelectItem>
            <SelectItem value="individual">Individual</SelectItem>
            <SelectItem value="herd">Herd</SelectItem>
            <SelectItem value="family">Family</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="7d">
          <SelectTrigger className="bg-background/50"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/30 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="text-left px-4 py-3">Event ID</th>
                <th className="text-left px-4 py-3">Pillar</th>
                <th className="text-left px-4 py-3">Time</th>
                <th className="text-left px-4 py-3">Group</th>
                <th className="text-left px-4 py-3">Behavior</th>
                <th className="text-left px-4 py-3">Risk</th>
                <th className="text-left px-4 py-3">Distance</th>
                <th className="text-left px-4 py-3">Alert</th>
                <th className="text-left px-4 py-3">Deterrent</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-t border-border/40 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{e.id}</td>
                  <td className="px-4 py-3 font-mono text-xs">{e.pillarId}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{new Date(e.timestamp).toLocaleString()}</td>
                  <td className="px-4 py-3 capitalize">{e.groupType}</td>
                  <td className="px-4 py-3">
                    <span className={"capitalize text-xs px-2 py-0.5 rounded-full border " + (e.behavior === "calm" ? "border-primary/30 bg-primary/10 text-primary" : "border-[hsl(var(--risk-critical)/0.4)] bg-[hsl(var(--risk-critical)/0.1)] text-[hsl(var(--risk-critical))]")}>
                      {e.behavior}
                    </span>
                  </td>
                  <td className="px-4 py-3"><RiskBadge level={e.riskLevel} /></td>
                  <td className="px-4 py-3 font-mono text-xs">{e.distanceKm} km</td>
                  <td className="px-4 py-3">
                    {e.alertSent
                      ? <span className="inline-flex items-center gap-1 text-xs text-primary"><CheckCircle2 className="h-3.5 w-3.5" /> Sent</span>
                      : <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><X className="h-3.5 w-3.5" /> No</span>}
                  </td>
                  <td className="px-4 py-3">
                    <span className={"text-xs capitalize " + (e.deterrent === "activated" ? "text-primary" : "text-accent")}>
                      {e.deterrent}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={9} className="px-4 py-12 text-center text-muted-foreground">No events match current filters.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Events;