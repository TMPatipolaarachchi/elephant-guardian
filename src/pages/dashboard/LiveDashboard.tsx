import { useEffect, useState } from "react";
import {
  Eye, Activity, Users, Baby, ScanSearch, Ruler, ShieldAlert, Radio, Volume2,
  Clock, AlertTriangle
} from "lucide-react";
import PageHeader from "@/components/dashboard/PageHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import RiskBadge from "@/components/site/RiskBadge";
import { liveStatus } from "@/data/mockData";

const LiveDashboard = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const s = liveStatus;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Live Dashboard"
        subtitle="Real-time telemetry from the active pillar node — PIL-002 Habarana Mid"
        right={
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-primary">LIVE</span>
            <span className="text-muted-foreground">· {now.toLocaleTimeString()}</span>
          </div>
        }
      />

      {/* Top status banner */}
      <div className="glass-strong rounded-2xl p-5 md:p-6 mb-6 border-primary/30 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative grid md:grid-cols-3 gap-6 items-center">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Detection Status</div>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-display text-2xl font-semibold">Elephant Detected</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Confidence {(s.confidence * 100).toFixed(1)}%</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Risk Level</div>
            <div className="mt-2"><RiskBadge level={s.riskLevel} className="text-sm" /></div>
            <div className="mt-2 text-xs text-muted-foreground">Train {s.distanceKm} km away</div>
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Bee Sound Deterrent</div>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-display text-lg font-semibold capitalize">{s.beeSound}</span>
            </div>
            <div className="mt-1 text-xs text-accent flex items-center gap-1.5">
              <AlertTriangle className="h-3 w-3" /> {s.beeReason}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MetricCard label="Detected" value="Yes" icon={Eye} tone="primary" hint="Live IR camera" />
        <MetricCard label="Behavior" value="Calm" icon={Activity} hint="Pose & motion model" />
        <MetricCard label="Group Type" value="Herd" icon={Users} hint="With one calf" />
        <MetricCard label="Total Count" value={s.totalCount} icon={Users} hint={`${s.adultCount} adults · ${s.calfCount} calf`} />
        <MetricCard label="Adult Count" value={s.adultCount} icon={Users} />
        <MetricCard label="Calf Count" value={s.calfCount} icon={Baby} tone="amber" />
        <MetricCard label="Confidence" value={`${(s.confidence * 100).toFixed(1)}%`} icon={ScanSearch} tone="primary" />
        <MetricCard label="Train Distance" value={`${s.distanceKm} km`} icon={Ruler} hint="GPS-derived" />
        <MetricCard label="Risk Level" value={<span className="capitalize">{s.riskLevel}</span>} icon={ShieldAlert} tone="amber" />
        <MetricCard label="LoRa Status" value="Transmitting" icon={Radio} tone="primary" hint="RSSI -76 dBm" />
        <MetricCard label="Bee Sound" value={<span className="capitalize">{s.beeSound}</span>} icon={Volume2} tone="amber" hint="Welfare lock active" />
        <MetricCard label="Last Updated" value={new Date(s.lastUpdated).toLocaleTimeString()} icon={Clock} hint="Auto-refresh 5s" />
      </div>

      <p className="mt-6 text-xs text-muted-foreground font-mono">
        {/* TODO: connect to /api/detections live stream via WebSocket */}
        // Mock data — connect to /api/detections WebSocket stream for production
      </p>
    </div>
  );
};

export default LiveDashboard;