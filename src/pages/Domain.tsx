import { BookOpen, Search, AlertOctagon, HelpCircle, Target, Workflow, Cpu } from "lucide-react";
import PageHero from "@/components/site/PageHero";

const sections = [
  {
    icon: BookOpen, id: "intro", title: "Introduction",
    body: "Human–elephant conflict and elephant–train collisions are escalating concerns in Sri Lanka, particularly along railway corridors that pass through traditional elephant habitats such as Habarana, Galoya and Minneriya. Existing approaches — manual patrols, static warning boards and basic seismic sensors — provide neither continuous monitoring nor a fast operational response. This research introduces a real-time AI–IoT framework that delivers detection, classification, risk assessment and ethical deterrence as a single integrated pipeline."
  },
  {
    icon: Search, id: "literature", title: "Literature Survey",
    body: "We review prior work across four domains: (1) AI-based wildlife detection using YOLO and similar CNN architectures; (2) acoustic and pose-based behavior analysis for large mammals; (3) IoT monitoring frameworks for protected areas; and (4) long-range, low-power communication using LoRa for remote deployments. Each domain offers strong individual results but limited end-to-end integration suitable for railway scenarios."
  },
  {
    icon: AlertOctagon, id: "gap", title: "Research Gap",
    body: "Existing systems exhibit limited real-time detection performance, poor coverage in remote railway zones, weak behavior understanding, lack of elephant group structure classification, and limited decision logic to govern when deterrents should — and should not — be triggered. No published system jointly combines edge-based detection, behavior reasoning, GPS-aware risk assessment and welfare-conscious deterrent control."
  },
  {
    icon: HelpCircle, id: "problem", title: "Research Problem",
    body: "How can an AI–IoT-based system reliably detect elephants near railway tracks, classify their behavior and group composition, calculate risk based on the approaching train’s distance, and deliver real-time alerts to operators — while ensuring elephant welfare by suppressing acoustic deterrence in vulnerable or aggressive scenarios?"
  },
  {
    icon: Target, id: "objectives", title: "Research Objectives",
    list: [
      "Detect elephants in real time using computer vision on an edge device.",
      "Classify elephant behavior as calm or aggressive.",
      "Identify group type: individual, herd, or family / three-part herd.",
      "Calculate distance between train and elephant location using GPS.",
      "Evaluate risk level using rule-based decision logic.",
      "Send real-time alerts to train operators via LoRa and ESP32.",
      "Activate deterrent only under safe and ethically permissible conditions.",
    ],
  },
];

const methodology = [
  { step: "01", title: "IR Camera / Sensor Input", desc: "Continuous low-light video stream from pillar nodes." },
  { step: "02", title: "Raspberry Pi Edge Processing", desc: "On-device inference avoids dependency on cloud links." },
  { step: "03", title: "YOLOv8 Detection", desc: "Identifies elephants and counts adults vs calves." },
  { step: "04", title: "Behavior Classification", desc: "Pose and motion analysis label calm vs aggressive states." },
  { step: "05", title: "Risk Assessment", desc: "Rule-based engine fuses distance, behavior, group type." },
  { step: "06", title: "LoRa Communication", desc: "Compact alert packets reach trains over long distances." },
  { step: "07", title: "ESP32 Receiver", desc: "In-cab unit decodes alerts and drives the UI." },
  { step: "08", title: "Driver Alert Interface", desc: "Mobile/web alert with risk level and recommended action." },
  { step: "09", title: "Bee Sound Deterrent Logic", desc: "Activated only when safe — never for vulnerable herds." },
];

const tech = [
  "Python", "YOLOv8", "Raspberry Pi 5", "IR Camera", "LoRa SX1278", "ESP32",
  "GPS NEO-6M", "React", "Node.js", "Express", "MongoDB", "Firebase (optional)",
  "Tailwind CSS", "Leaflet", "Recharts",
];

const Domain = () => (
  <>
    <PageHero
      eyebrow="Research Domain"
      title="Wildlife conservation meets railway safety"
      description="A multi-disciplinary domain spanning computer vision, behavioral ecology, embedded systems and long-range IoT communication."
    />

    <section className="container max-w-5xl mx-auto px-4 py-12 space-y-10">
      {sections.map((s) => (
        <article key={s.id} id={s.id} className="glass rounded-2xl p-6 md:p-8 scroll-mt-32">
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
              {s.body && <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>}
              {s.list && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>
      ))}

      {/* Methodology */}
      <article className="glass rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <Workflow className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl font-semibold">Methodology</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {methodology.map((m) => (
            <div key={m.step} className="relative rounded-xl border border-border/60 bg-card/40 p-4 hover:border-primary/40 transition-colors">
              <div className="font-mono text-xs text-primary">{m.step}</div>
              <div className="font-display font-medium mt-1">{m.title}</div>
              <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{m.desc}</div>
            </div>
          ))}
        </div>
      </article>

      {/* Tech */}
      <article className="glass rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <Cpu className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl font-semibold">Technologies Used</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-full text-xs font-mono bg-muted/60 border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </article>
    </section>
  </>
);

export default Domain;