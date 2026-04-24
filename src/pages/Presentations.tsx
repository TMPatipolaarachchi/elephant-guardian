import { Download, Eye, Presentation } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

const slides = [
  { title: "Proposal Presentation", desc: "Defending the research direction and proposed methodology.", date: "Aug 2024" },
  { title: "Progress Presentation 1", desc: "YOLOv8 prototype, pillar node design and early results.", date: "Nov 2024" },
  { title: "Progress Presentation 2", desc: "Behavior model, LoRa integration and risk engine demo.", date: "Mar 2025" },
  { title: "Final Presentation", desc: "Complete system, field results and contribution summary.", date: "Jul 2025" },
];

const Presentations = () => (
  <>
    <PageHero
      eyebrow="Presentations"
      title="Slide decks & defence materials"
      description="Each presentation milestone summarised with quick access to slides."
    />
    <section className="container max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-5">
        {slides.map((s) => (
          <div key={s.title} className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Presentation className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{s.date}</span>
              </div>
              <h3 className="font-display font-semibold text-xl">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              <div className="flex gap-2 mt-5">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="h-3.5 w-3.5 mr-1.5" /> View Slides
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary text-primary-foreground border-0 hover:opacity-90">
                  <Download className="h-3.5 w-3.5 mr-1.5" /> Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Presentations;