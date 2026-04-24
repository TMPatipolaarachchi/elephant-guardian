import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, CircleMarker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PageHeader from "@/components/dashboard/PageHeader";
import RiskBadge from "@/components/site/RiskBadge";
import { events, pillars } from "@/data/mockData";

const trackLine: [number, number][] = pillars.map(p => [p.lat, p.lng]);

// Fix default icon paths for leaflet in bundlers
// Build inline DivIcons instead of importing image assets
const pillarIcon = L.divIcon({
  className: "",
  html: `<div style="background:hsl(152,70%,45%);border:2px solid #fff;width:14px;height:14px;border-radius:50%;box-shadow:0 0 12px hsl(152,90%,60%,.7)"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});
const trainIcon = L.divIcon({
  className: "",
  html: `<div style="background:hsl(210,90%,60%);border:2px solid #fff;width:18px;height:18px;border-radius:4px;box-shadow:0 0 14px hsl(210,90%,60%,.8)"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

const riskColor = (r: string) =>
  r === "critical" ? "hsl(0,85%,58%)" :
  r === "high" ? "hsl(18,90%,55%)" :
  r === "medium" ? "hsl(38,95%,55%)" :
  r === "low" ? "hsl(152,70%,45%)" : "hsl(210,30%,50%)";

const MapView = () => {
  useEffect(() => {
    // ensure container resize
    setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
  }, []);

  const recent = events.slice(0, 6);
  const trainPos: [number, number] = [pillars[0].lat - 0.04, pillars[0].lng - 0.02];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <PageHeader
        title="Map View"
        subtitle="Live geographic overview of railway corridor, pillars and detections"
      />
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 glass rounded-2xl overflow-hidden border-border/60">
          <div className="h-[520px] w-full">
            <MapContainer
              center={[pillars[2].lat, pillars[2].lng]}
              zoom={12}
              style={{ height: "100%", width: "100%", background: "hsl(220 30% 6%)" }}
              scrollWheelZoom
            >
              <TileLayer
                attribution='&copy; OpenStreetMap'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              <Polyline positions={trackLine} pathOptions={{ color: "hsl(38,95%,55%)", weight: 4, opacity: 0.9 }} />
              {pillars.map((p) => (
                <Marker key={p.id} position={[p.lat, p.lng]} icon={pillarIcon}>
                  <Popup>
                    <div style={{ fontFamily: "Inter,sans-serif" }}>
                      <strong>{p.name}</strong><br />
                      <span style={{ fontFamily: "monospace", fontSize: 11 }}>{p.id}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <Marker position={trainPos} icon={trainIcon}>
                <Popup><strong>Train T-417</strong><br />Speed: 62 km/h</Popup>
              </Marker>
              {recent.map((e) => (
                <CircleMarker
                  key={e.id}
                  center={[e.lat, e.lng]}
                  radius={9}
                  pathOptions={{ color: riskColor(e.riskLevel), fillColor: riskColor(e.riskLevel), fillOpacity: 0.5, weight: 2 }}
                >
                  <Popup>
                    <div style={{ fontFamily: "Inter,sans-serif" }}>
                      <strong>{e.id}</strong><br />
                      Risk: {e.riskLevel}<br />
                      Group: {e.groupType}<br />
                      Distance: {e.distanceKm} km
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="space-y-3">
          <div className="glass rounded-2xl p-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3">Legend</div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-primary" /> Pillar node</div>
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-[hsl(210,90%,60%)]" /> Train position</div>
              <div className="flex items-center gap-2"><span className="h-1 w-6 rounded bg-accent" /> Railway track</div>
              <div className="pt-2 mt-2 border-t border-border/40 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Risk markers</div>
              {[
                ["Critical","hsl(0,85%,58%)"],["High","hsl(18,90%,55%)"],
                ["Medium","hsl(38,95%,55%)"],["Low","hsl(152,70%,45%)"]
              ].map(([n,c]) => (
                <div key={n} className="flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: c }} /> {n}</div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3">Recent detections</div>
            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
              {recent.map((e) => (
                <div key={e.id} className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-muted/40 transition-colors">
                  <div>
                    <div className="font-mono text-xs text-primary">{e.id}</div>
                    <div className="text-[11px] text-muted-foreground">{e.pillarId} · {e.distanceKm} km</div>
                  </div>
                  <RiskBadge level={e.riskLevel} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;