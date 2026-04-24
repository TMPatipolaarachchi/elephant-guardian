import { Download, Eye, FileText, FileCheck2, FileQuestion } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const docs = [
  { name: "Project Charter", desc: "Foundational scope, stakeholders and success criteria.", status: "Available" },
  { name: "Proposal Document", desc: "Approved research proposal with literature review and plan.", status: "Available" },
  { name: "Checklist Documents", desc: "Mid-evaluation and final-evaluation deliverable checklists.", status: "Available" },
  { name: "Final Research Paper", desc: "Peer-review ready paper documenting methodology and results.", status: "Pending" },
  { name: "Individual Reports", desc: "Per-member reports detailing contributions and learning outcomes.", status: "Pending" },
  { name: "Final Group Report", desc: "Consolidated final report covering full project lifecycle.", status: "Pending" },
];

const Documents = () => (
  <>
    <PageHero
      eyebrow="Project Documents"
      title="Research artifacts & deliverables"
      description="All formal documents associated with the research project, available for reviewers and supervisors."
    />
    <section className="container max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {docs.map((d) => {
          const available = d.status === "Available";
          const Icon = available ? FileCheck2 : FileQuestion;
          return (
            <div key={d.name} className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "h-12 w-12 rounded-xl border flex items-center justify-center",
                  available ? "bg-primary/10 border-primary/30 text-primary" : "bg-muted/40 border-border/60 text-muted-foreground"
                )}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={cn(
                  "text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border",
                  available
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "bg-accent/10 border-accent/30 text-accent"
                )}>
                  {d.status}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg">{d.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed min-h-[40px]">{d.desc}</p>
              <div className="flex gap-2 mt-5">
                <Button size="sm" variant="outline" disabled={!available} className="flex-1">
                  <Eye className="h-3.5 w-3.5 mr-1.5" /> View
                </Button>
                <Button size="sm" disabled={!available} className="flex-1 bg-gradient-primary text-primary-foreground border-0 hover:opacity-90">
                  <Download className="h-3.5 w-3.5 mr-1.5" /> Download
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Documents;