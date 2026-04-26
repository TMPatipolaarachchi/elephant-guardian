import { useState } from "react";
import { Download, Eye, FileCheck2, FileQuestion } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type DocumentType = "markdown" | "pdf";

type DocumentFile = {
  label: string;
  path: string;
  type: DocumentType;
};

type ProjectDocument = {
  name: string;
  desc: string;
  status: "Available" | "Pending";
  files: DocumentFile[];
};

const docs: ProjectDocument[] = [
  { name: "Project Charter", desc: "Foundational scope, stakeholders and success criteria.", status: "Available", files: [] },
  {
    name: "Proposal Document",
    desc: "Approved research proposal with literature review and plan.",
    status: "Available",
    files: [
      { label: "IT22142450", path: "/doc/proposals/IT22142450-Proposal%20Report%20draft.pdf", type: "pdf" },
      { label: "IT22289452", path: "/doc/proposals/IT22289452_Proposal_Report_draft.pdf", type: "pdf" },
      { label: "IT22563682", path: "/doc/proposals/it22563682_proposal_report_draft.pdf", type: "pdf" },
      { label: "IT22579522", path: "/doc/proposals/It22579522_proposal_report_draft.pdf", type: "pdf" },
    ],
  },
  {
    name: "Checklist Documents",
    desc: "Mid-evaluation and final-evaluation deliverable checklists.",
    status: "Available",
    files: [{ label: "Checklist", path: "/doc/checklist/READMEMINE.md", type: "markdown" }],
  },
  { name: "Final Research Paper", desc: "Peer-review ready paper documenting methodology and results.", status: "Pending", files: [] },
  { name: "Individual Reports", desc: "Per-member reports detailing contributions and learning outcomes.", status: "Pending", files: [] },
  { name: "Final Group Report", desc: "Consolidated final report covering full project lifecycle.", status: "Pending", files: [] },
];

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<DocumentFile[]>([]);
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [docContent, setDocContent] = useState<string>("");

  const loadMarkdownFile = async (filePath: string) => {
    try {
      const response = await fetch(filePath);
      const content = await response.text();
      setDocContent(content);
    } catch (error) {
      console.error("Error loading document:", error);
      setDocContent("Error loading document content");
    }
  };

  const handleView = async (doc: ProjectDocument) => {
    if (!doc.files.length) return;

    setSelectedDoc(doc.name);
    setSelectedFiles(doc.files);
    setActiveFileIndex(0);
    setDocContent("");

    const firstFile = doc.files[0];
    if (firstFile.type === "markdown") {
      await loadMarkdownFile(firstFile.path);
    }
  };

  const handleFileSwitch = async (index: number) => {
    setActiveFileIndex(index);
    const file = selectedFiles[index];
    if (file?.type === "markdown") {
      await loadMarkdownFile(file.path);
    } else {
      setDocContent("");
    }
  };

  const renderMarkdown = (text: string) => {
    return text.split("\n").map((line, idx) => {
      if (line.startsWith("# ")) {
        return <h1 key={idx} className="text-2xl font-bold mt-6 mb-3">{line.substring(2)}</h1>;
      }
      if (line.startsWith("## ")) {
        return <h2 key={idx} className="text-xl font-bold mt-5 mb-2">{line.substring(3)}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={idx} className="text-lg font-semibold mt-4 mb-2">{line.substring(4)}</h3>;
      }
      if (line.startsWith("- ")) {
        return <li key={idx} className="ml-4 text-sm">{line.substring(2)}</li>;
      }
      if (line.startsWith("| ")) {
        return <div key={idx} className="text-xs font-mono bg-muted p-2 rounded my-1 overflow-x-auto">{line}</div>;
      }
      if (line.trim() === "") {
        return <div key={idx} className="h-2" />;
      }
      return <p key={idx} className="text-sm text-muted-foreground mb-2">{line}</p>;
    });
  };

  return (
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
                  <Button 
                    size="sm" 
                    variant="outline" 
                    disabled={!available || d.files.length === 0}
                    onClick={() => handleView(d)}
                    className="flex-1"
                  >
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

      <Dialog
        open={!!selectedDoc}
        onOpenChange={() => {
          setSelectedDoc(null);
          setSelectedFiles([]);
          setActiveFileIndex(0);
          setDocContent("");
        }}
      >
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedDoc}</DialogTitle>
          </DialogHeader>
          {selectedFiles.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedFiles.map((file, index) => (
                <Button
                  key={`${file.path}-${index}`}
                  size="sm"
                  variant={activeFileIndex === index ? "default" : "outline"}
                  onClick={() => handleFileSwitch(index)}
                >
                  {file.label}
                </Button>
              ))}
            </div>
          )}

          {selectedFiles[activeFileIndex]?.type === "pdf" ? (
            <iframe
              src={selectedFiles[activeFileIndex].path}
              title={selectedDoc ?? "Document Preview"}
              className="w-full h-[70vh] rounded-md border"
            />
          ) : (
            <div className="prose dark:prose-invert prose-sm max-w-none">
              {renderMarkdown(docContent)}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Documents;