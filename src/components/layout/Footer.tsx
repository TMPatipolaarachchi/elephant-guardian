import { Link } from "react-router-dom";
import { Github, Mail, MapPin, Radar } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/50 pointer-events-none" />
      <div className="container max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Radar className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-semibold">RailGuard AI</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                  SLIIT Research Project
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Real-time AI–IoT elephant detection and train collision prevention system —
              protecting wildlife and lives across Sri Lankan railways.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Research</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/domain" className="hover:text-primary transition-colors">Domain</Link></li>
              <li><Link to="/milestones" className="hover:text-primary transition-colors">Milestones</Link></li>
              <li><Link to="/documents" className="hover:text-primary transition-colors">Documents</Link></li>
              <li><Link to="/presentations" className="hover:text-primary transition-colors">Presentations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>SLIIT, Malabe, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:railguard@my.sliit.lk" className="hover:text-primary transition-colors">
                  railguard@my.sliit.lk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Github className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>github.com/sliit-railguard</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} RailGuard AI · Department of Information Technology, SLIIT</div>
          <div className="font-mono">v1.0 · Research Prototype</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;