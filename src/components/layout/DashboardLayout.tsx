import { NavLink, Outlet, Link } from "react-router-dom";
import {
  Activity, ListChecks, Map as MapIcon, Cpu, BarChart3, Settings, Radar, ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/live", end: true, label: "Live Dashboard", icon: Activity },
  { to: "/live/events", label: "Event Timeline", icon: ListChecks },
  { to: "/live/map", label: "Map View", icon: MapIcon },
  { to: "/live/health", label: "Device Health", icon: Cpu },
  { to: "/live/reports", label: "Reports & Analytics", icon: BarChart3 },
  { to: "/live/config", label: "Configuration", icon: Settings },
];

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden lg:flex flex-col w-64 border-r border-border/50 sticky top-0 h-screen">
        <div className="p-5 border-b border-border/50">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Radar className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-semibold text-sm">RailGuard AI</div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Control Center</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-border/50">
          <Link to="/" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to website
          </Link>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Mobile top nav */}
        <div className="lg:hidden sticky top-0 z-40 glass-strong border-b border-border/50 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Radar className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="font-display font-semibold text-sm">RailGuard Control</div>
          </Link>
          <div className="flex gap-1 overflow-x-auto pb-1 -mx-1 px-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => cn(
                  "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all",
                  isActive
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-muted-foreground border border-transparent"
                )}
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;