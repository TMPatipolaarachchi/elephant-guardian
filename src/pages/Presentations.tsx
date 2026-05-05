import { useState } from "react";
import { Download, Eye, Presentation } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const slides = [
  {
    title: "Progress Presentation",
    desc: "Defending the research direction and proposed methodology.",
    date: "Aug 2024",
    filePath: "/doc/presentation/Presentation%20-%20Real-Time%20AI-IoT%20Elephant%20Detection%20and%20Acoustic%20Deterrent%20(2).pdf",
  },
  {
    title: "Progress Presentation 1",
    desc: "YOLOv8 prototype, pillar node design and early results.",
    date: "Nov 2024",
    filePath: "/doc/presentation/Presentation%20-%20Real-Time%20AI-IoT%20Elephant%20Detection%20and%20Acoustic%20Deterrent%20(2).pdf",
  },
  {
    title: "Progress Presentation 2",
    desc: "Behavior model, LoRa integration and risk engine demo.",
    date: "Mar 2025",
    filePath: "/doc/presentation/Presentation%20-%20Real-Time%20AI-IoT%20Elephant%20Detection%20and%20Acoustic%20Deterrent%20(2).pdf",
  },
  { title: "Final Presentation", desc: "Complete system, field results and contribution summary.", date: "Jul 2025", filePath: null },
];

const Presentations = () => {
  const [selectedSlide, setSelectedSlide] = useState<{ title: string; filePath: string } | null>(null);

  const handleDownload = async (filePath: string, title: string) => {
    try {
      const response = await fetch(filePath);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(filePath, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Presentations"
        title="Slide decks & defence materials"
        description="Each presentation milestone summarised with quick access to slides."
      />
      <section className="container max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-5">
          {slides.map((s) => {
            const available = Boolean(s.filePath);
            return (
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      disabled={!available}
                      onClick={() => s.filePath && setSelectedSlide({ title: s.title, filePath: s.filePath })}
                    >
                      <Eye className="h-3.5 w-3.5 mr-1.5" /> View Slides
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary text-primary-foreground border-0 hover:opacity-90"
                      disabled={!available}
                      onClick={() => s.filePath && handleDownload(s.filePath, s.title)}
                    >
                      <Download className="h-3.5 w-3.5 mr-1.5" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Dialog open={!!selectedSlide} onOpenChange={() => setSelectedSlide(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedSlide?.title}</DialogTitle>
          </DialogHeader>
          {selectedSlide?.filePath && (
            <iframe
              src={selectedSlide.filePath}
              title={selectedSlide.title}
              className="w-full h-[70vh] rounded-md border"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Presentations;