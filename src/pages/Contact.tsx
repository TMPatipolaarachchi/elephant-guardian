import { useState } from "react";
import { Mail, Phone, MapPin, Building2, Send } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const PROJECT_EMAIL = "railguard31@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[RailGuard] ${form.subject}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROJECT_EMAIL)}&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:${PROJECT_EMAIL}?subject=${subject}&body=${body}`;

    const composeWindow = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    if (!composeWindow) {
      window.location.href = mailtoUrl;
    }

    toast.success("Email compose opened. Please review and send.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with the research team"
        description="Questions about the project, collaboration ideas or supervision? We'd love to hear from you."
      />
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Project Email", value: PROJECT_EMAIL, href: `mailto:${PROJECT_EMAIL}` },
              { icon: Phone, label: "Phone", value: "+94719161426" },
              { icon: Building2, label: "University", value: "Sri Lanka Institute of Information Technology" },
              { icon: MapPin, label: "Department", value: "Department of Information Technology, Malabe" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="mt-1 inline-block font-display hover:text-primary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <div className="mt-1 font-display">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-primary mb-2">Email Template</div>
              <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">{`Subject: [RailGuard] Your subject here

Dear RailGuard Research Team,

I'm reaching out regarding ...

Best regards,
[Your name]`}</pre>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
                <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-background/50 border-border/60" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 bg-background/50 border-border/60" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Subject</label>
              <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-1.5 bg-background/50 border-border/60" />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
              <Textarea required rows={7} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 bg-background/50 border-border/60 resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 shadow-glow">
              <Send className="h-4 w-4 mr-2" /> Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;