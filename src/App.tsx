import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import SiteLayout from "./components/layout/SiteLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import Domain from "./pages/Domain";
import Milestones from "./pages/Milestones";
import Documents from "./pages/Documents";
import Presentations from "./pages/Presentations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LiveDashboard from "./pages/dashboard/LiveDashboard";
import Events from "./pages/dashboard/Events";
import MapView from "./pages/dashboard/MapView";
import Health from "./pages/dashboard/Health";
import Reports from "./pages/dashboard/Reports";
import Config from "./pages/dashboard/Config";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/live" element={<DashboardLayout />}>
            <Route index element={<LiveDashboard />} />
            <Route path="events" element={<Events />} />
            <Route path="map" element={<MapView />} />
            <Route path="health" element={<Health />} />
            <Route path="reports" element={<Reports />} />
            <Route path="config" element={<Config />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
