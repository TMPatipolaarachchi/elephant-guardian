import { useState } from "react";
import PageHeader from "@/components/dashboard/PageHeader";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Save, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const Config = () => {
  const [confidence, setConfidence] = useState([85]);
  const [alertDist, setAlertDist] = useState([10]);
  const [emergDist, setEmergDist] = useState([1]);
  const [cooldown, setCooldown] = useState([30]);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <PageHeader title="Configuration Center" subtitle="Admin-only system parameters" right={
        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent">
          <ShieldAlert className="h-3 w-3" /> Read-only mock UI
        </span>
      } />

      <div className="glass rounded-2xl p-4 mb-6 flex items-start gap-3 border-accent/30">
        <AlertTriangle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
        <div className="text-xs text-muted-foreground">
          Controls below are simulated. Save actions do not affect real hardware. Production wiring requires
          authenticated admin role and audit logging via <span className="font-mono text-primary">/api/config</span>.
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <section className="glass rounded-2xl p-6 space-y-5">
          <h3 className="font-display font-semibold">Detection Thresholds</h3>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <Label>Confidence threshold</Label>
              <span className="font-mono text-primary">{confidence[0]}%</span>
            </div>
            <Slider value={confidence} onValueChange={setConfidence} min={50} max={99} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <Label>Alert distance threshold</Label>
              <span className="font-mono text-primary">{alertDist[0]} km</span>
            </div>
            <Slider value={alertDist} onValueChange={setAlertDist} min={1} max={20} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <Label>Emergency distance threshold</Label>
              <span className="font-mono text-[hsl(var(--risk-critical))]">{emergDist[0]} km</span>
            </div>
            <Slider value={emergDist} onValueChange={setEmergDist} min={0.2} max={5} step={0.1} />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <Label>Alert cooldown</Label>
              <span className="font-mono text-primary">{cooldown[0]}s</span>
            </div>
            <Slider value={cooldown} onValueChange={setCooldown} min={5} max={120} />
          </div>
        </section>

        <section className="glass rounded-2xl p-6 space-y-5">
          <h3 className="font-display font-semibold">Bee Sound Window</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-sm">Start time</Label>
              <Input type="time" defaultValue="06:00" className="mt-1.5 bg-background/50" />
            </div>
            <div>
              <Label className="text-sm">End time</Label>
              <Input type="time" defaultValue="18:00" className="mt-1.5 bg-background/50" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <div>
              <div className="text-sm">Suppress for family / vulnerable herds</div>
              <div className="text-xs text-muted-foreground">Welfare safety lock</div>
            </div>
            <Switch defaultChecked disabled />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm">Suppress for aggressive behavior</div>
              <div className="text-xs text-muted-foreground">Mandatory ethical rule</div>
            </div>
            <Switch defaultChecked disabled />
          </div>
        </section>

        <section className="glass rounded-2xl p-6 space-y-4">
          <h3 className="font-display font-semibold">LoRa Settings</h3>
          <div className="grid grid-cols-2 gap-3">
            <div><Label className="text-sm">Frequency</Label><Input defaultValue="433 MHz" className="mt-1.5 bg-background/50 font-mono text-sm" /></div>
            <div><Label className="text-sm">Spreading factor</Label><Input defaultValue="SF9" className="mt-1.5 bg-background/50 font-mono text-sm" /></div>
            <div><Label className="text-sm">Bandwidth</Label><Input defaultValue="125 kHz" className="mt-1.5 bg-background/50 font-mono text-sm" /></div>
            <div><Label className="text-sm">Coding rate</Label><Input defaultValue="4/5" className="mt-1.5 bg-background/50 font-mono text-sm" /></div>
          </div>
        </section>

        <section className="glass rounded-2xl p-6 space-y-4">
          <h3 className="font-display font-semibold">ESP32 Configuration</h3>
          <div><Label className="text-sm">Receiver IP</Label><Input defaultValue="192.168.4.21" className="mt-1.5 bg-background/50 font-mono text-sm" /></div>
          <div><Label className="text-sm">API endpoint</Label><Input defaultValue="https://api.railguard.lk/v1" className="mt-1.5 bg-background/50 font-mono text-sm" /></div>
          <div><Label className="text-sm">Heartbeat interval</Label><Input defaultValue="15s" className="mt-1.5 bg-background/50 font-mono text-sm" /></div>
        </section>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline">Reset</Button>
        <Button onClick={() => toast.info("Mock save — no hardware changes applied.")} className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90">
          <Save className="h-4 w-4 mr-2" /> Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default Config;