import { Mail, GraduationCap, Award } from "lucide-react";
import PageHero from "@/components/site/PageHero";

const team = [
  { name: "Kumarasena S.T", id: "IT22289452", role: "Real-Time Elephant Detection and Group Classification Function", email: "it22289452@my.sliit.lk" },
  { name: "Gunapala R.A.P.J", id: "IT22579522", role: "Behavioral State Classification Function.", email: "it22579522@my.sliit.lk" },
  { name: "Patipolaarachchi P.A.T.M ", id: "IT22563682", role: "Context-Aware Protection and Alert Functionality", email: "it22563682@my.sliit.lk" },
  { name: "Yashoda W.C.M.N", id: "IT22142450", role: "Risk Forecasting and Collision Prediction Function.", email: "it22142450@my.sliit.lk" },
];

const supervisors = [
  {
    name: "Mr. Buddika Harshanath SM",
    role: "Supervisor",
    department: "Department of Information Technology",
    institute: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "harshanath.s@sliit.lk",
  },
  {
    name: "Prof. Pradeep K.W. Abeygunawardhana ",
    role: "Co-Supervisor",
    department: "Department of Information Technology",
    institute: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "Pradeep.a@sliit.lk",
  },
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
            <div key={s.name} className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                {s.role === "Supervisor" ? <GraduationCap className="h-6 w-6" /> : <Award className="h-6 w-6" />}
              </div>
              <div className="min-w-0">
                <div className="font-display font-semibold">{s.name}</div>
                <div className="text-xs font-mono text-primary mt-0.5">{s.role}</div>
                <div className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  <div>{s.department}</div>
                  <div>{s.institute}</div>
                  <div>{s.location}</div>
                </div>
                {s.email && (
                  <a
                    href={`mailto:${s.email}`}
                    className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" /> {s.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;