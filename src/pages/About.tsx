import { Mail, GraduationCap, Award } from "lucide-react";
import PageHero from "@/components/site/PageHero";

const team = [
  { name: "Member One", id: "IT21000001", role: "AI / Computer Vision Developer", email: "it21000001@my.sliit.lk", contribution: "YOLOv8 model training, dataset curation, edge deployment optimisation." },
  { name: "Member Two", id: "IT21000002", role: "Behavior Classification Developer", email: "it21000002@my.sliit.lk", contribution: "Pose & motion-based classifier for calm vs aggressive behavior." },
  { name: "Member Three", id: "IT21000003", role: "IoT / Communication Developer", email: "it21000003@my.sliit.lk", contribution: "LoRa SX1278 link, ESP32 firmware and pillar node hardware." },
  { name: "Member Four", id: "IT21000004", role: "Web / Dashboard Developer", email: "it21000004@my.sliit.lk", contribution: "React dashboard, analytics, map view and admin controls." },
  { name: "Member Five", id: "IT21000005", role: "Documentation / Research Coordinator", email: "it21000005@my.sliit.lk", contribution: "Research documentation, evaluation planning and stakeholder liaison." },
];

const supervisors = [
  { name: "Dr. Supervisor Name", role: "Supervisor", dept: "Department of Information Technology, SLIIT" },
  { name: "Mr. Co-Supervisor Name", role: "Co-Supervisor", dept: "Department of Information Technology, SLIIT" },
];

const initials = (n: string) => n.split(" ").map(p => p[0]).slice(0, 2).join("");

const About = () => (
  <>
    <PageHero
      eyebrow="About Us"
      title="The team behind RailGuard AI"
      description="A multidisciplinary team of final-year SLIIT undergraduates working at the intersection of AI, IoT and conservation."
    />
    <section className="container max-w-7xl mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((m) => (
          <div key={m.id} className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center font-display font-semibold text-xl text-primary-foreground shadow-glow">
                {initials(m.name)}
              </div>
              <div>
                <div className="font-display font-semibold">{m.name}</div>
                <div className="text-xs font-mono text-muted-foreground">{m.id}</div>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xs uppercase tracking-wider text-primary font-mono">{m.role}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.contribution}</p>
            </div>
            <a href={`mailto:${m.email}`} className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" /> {m.email}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold mb-6 text-center">Supervisors</h2>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {supervisors.map((s) => (
            <div key={s.name} className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                {s.role === "Supervisor" ? <GraduationCap className="h-6 w-6" /> : <Award className="h-6 w-6" />}
              </div>
              <div>
                <div className="font-display font-semibold">{s.name}</div>
                <div className="text-xs font-mono text-primary mt-0.5">{s.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.dept}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;