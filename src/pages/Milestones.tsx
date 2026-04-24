import { useState } from "react";
import { CheckCircle2, Circle, Calendar, Award } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { cn } from "@/lib/utils";

const milestones = [
  { title: "Project Proposal", desc: "Initial proposal defending research direction, scope and methodology.", date: "Aug 2024", marks: "10%", status: "Completed" },
  { title: "Progress Presentation 1", desc: "Demonstration of YOLOv8 detection prototype and pillar node mock-up.", date: "Nov 2024", marks: "15%", status: "Completed" },
  { title: "Progress Presentation 2", desc: "Behavior classification, risk engine and end-to-end LoRa pipeline integration.", date: "Mar 2025", marks: "20%", status: "Pending" },
  { title: "Final Assessment", desc: "Full system demonstration including dashboard and field deployment results.", date: "Jul 2025", marks: "40%", status: "Pending" },
  { title: "Viva", desc: "Final oral examination and individual contribution defence.", date: "Aug 2025", marks: "15%", status: "Pending" },
];

const filters = ["All", "Completed", "Pending"] as const;

const Milestones = () => {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const list = milestones.filter((m) => filter === "All" || m.status === filter);

  return (
    <>
      <PageHero
        eyebrow="Project Milestones"
        title="Tracking research progress"
        description="Each milestone reflects a formal SLIIT evaluation point during the research lifecycle."
      />
      <section className="container max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all",
                filter === f
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-card/40 text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/40"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
          <div className="space-y-8">
            {list.map((m, i) => {
              const completed = m.status === "Completed";
              const left = i % 2 === 0;
              return (
                <div key={m.title} className="relative">
                  <div className={cn(
                    "absolute left-5 md:left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full border-2 z-10",
                    completed ? "bg-primary border-primary shadow-glow" : "bg-background border-border"
                  )} />
                  <div className={cn(
                    "md:w-1/2 pl-12 md:pl-0",
                    left ? "md:pr-12" : "md:ml-auto md:pl-12"
                  )}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                        <span className={cn(
                          "text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border inline-flex items-center gap-1.5",
                          completed
                            ? "bg-primary/10 border-primary/30 text-primary"
                            : "bg-accent/10 border-accent/30 text-accent"
                        )}>
                          {completed ? <CheckCircle2 className="h-3 w-3" /> : <Circle className="h-3 w-3" />}
                          {m.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{m.date}</span>
                        <span className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-accent" />{m.marks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Milestones;