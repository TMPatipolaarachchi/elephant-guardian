import { Link } from "react-router-dom";
import {
  ArrowRight, Brain, Radio, Activity, MapPin, ShieldAlert, Volume2,
  TrainFront, TreePine, UserCheck, Bell, Globe2, Cpu, Wifi, Bell as BellIcon,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/site/SectionHeader";
import heroImg from "@/assets/hero-elephant.jpg";
import herdImg from "@/assets/elephant-herd.jpg";
import iotImg from "@/assets/iot-device.jpg";

const features = [
  { icon: Brain, title: "AI Elephant Detection", desc: "YOLOv8-based detection on edge with high accuracy in low-light environments." },
  { icon: Activity, title: "Behavior Classification", desc: "Distinguishes calm vs aggressive behavior using pose and motion cues." },
  { icon: MapPin, title: "GPS Distance Calculation", desc: "Real-time train-to-elephant distance via geospatial computation." },
  { icon: Radio, title: "LoRa Alert Transmission", desc: "Long-range, low-power alerts to in-cab ESP32 receivers." },
  { icon: ShieldAlert, title: "Risk Assessment", desc: "Rule-based engine evaluates distance, behavior and herd structure." },
  { icon: Volume2, title: "Safe Acoustic Deterrence", desc: "Bee-like sound only activates when ethically and safely permitted." },
];

const impacts = [
  { icon: TreePine, title: "Wildlife Conservation", desc: "Reduces fatal injuries to endangered Sri Lankan elephants." },
  { icon: UserCheck, title: "Driver Safety", desc: "Provides early warnings to train operators in real time." },
  { icon: TrainFront, title: "Railway Protection", desc: "Prevents costly derailments and infrastructure damage." },
  { icon: Bell, title: "Real-Time Warning", desc: "Sub-2-second alert latency from detection to driver." },
  { icon: Globe2, title: "Remote-Area Operation", desc: "Works in connectivity-poor regions via LoRa mesh." },
];

const workflow = [
  { icon: Cpu, label: "Camera & Sensors" },
  { icon: Brain, label: "Pi 5 AI Processing" },
  { icon: Wifi, label: "LoRa / ESP32" },
  { icon: BellIcon, label: "Driver Alert" },
  { icon: Volume2, label: "Safe Deterrent" },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] -mt-24 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elephant standing on Sri Lankan railway track at dusk"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative pt-24 pb-12">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border border-primary/30 bg-primary/10 text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              SLIIT Final Year Research · 2024/25
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              Real-Time <span className="text-gradient-primary">AI–IoT</span> Elephant
              Detection & Train Collision Prevention
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              An intelligent edge-based wildlife safety framework for Sri Lankan railways —
              uniting computer vision, IoT and ethical acoustic deterrence to protect both
              elephants and human lives.
            </p>
            <p className="text-sm md:text-base text-muted-foreground/90 max-w-2xl leading-relaxed">
              Combining YOLOv8 detection, behavior analysis, GPS-based distance calculation
              and LoRa communication, the system delivers sub-2-second alerts to train
              operators and selectively triggers bee-like acoustic deterrence only when safe.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 border-0 shadow-glow">
                <Link to="/domain">
                  Explore Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/60 backdrop-blur bg-card/30">
                <Link to="/live">View Live Dashboard</Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-8 border-t border-border/40">
              {[
                { v: "91.3%", l: "Detection accuracy" },
                { v: "1.8s", l: "Avg alert latency" },
                { v: "95.2%", l: "Alert reliability" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-semibold text-gradient-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 font-mono animate-float">
          scroll to explore ↓
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="System Capabilities"
            title="Six pillars of safe, intelligent monitoring"
            description="Each subsystem is designed for reliability in remote railway environments while preserving elephant welfare."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <SectionHeader
            eyebrow="System Workflow"
            title="From detection to deterrent — in under 2 seconds"
          />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {workflow.map((w, i) => (
                <div key={w.label} className="relative flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-2xl group-hover:bg-primary/50 transition-colors" />
                    <div className="relative h-16 w-16 rounded-2xl glass-strong border border-primary/40 flex items-center justify-center text-primary">
                      <w.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-display font-medium">{w.label}</div>
                  <div className="mt-1 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Stage {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="System Impact"
                title="Built for both wildlife and human safety"
                align="left"
                description="Every design decision balances railway safety with elephant welfare — informed by conservation science and field evidence from Sri Lanka."
              />
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {impacts.map((imp) => (
                  <div key={imp.title} className="glass rounded-xl p-4 hover:border-primary/40 transition-colors">
                    <imp.icon className="h-5 w-5 text-primary mb-2" />
                    <div className="font-display font-medium text-sm">{imp.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{imp.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={herdImg} alt="Family of Sri Lankan elephants in jungle" loading="lazy" width={1200} height={800}
                  className="rounded-2xl aspect-[4/5] object-cover border border-border/60" />
             
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass rounded-2xl p-5">
                  <div className="text-3xl font-display font-semibold text-gradient-amber">93.8%</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">LoRa transmission success</div>
                </div>
                <img src={iotImg} alt="Raspberry Pi edge device with LoRa antenna" loading="lazy" width={1200} height={800}
                  className="rounded-2xl aspect-[4/5] object-cover border border-border/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative space-y-5">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Step into the <span className="text-gradient-primary">control center</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Explore the live dashboard with real-time mock telemetry, event timelines,
                map view and analytics from across all pillar nodes.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 border-0 shadow-glow">
                <Link to="/live">Open Live Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;