export type RiskLevel = "none" | "low" | "medium" | "high" | "critical";
export type Behavior = "calm" | "aggressive";
export type GroupType = "individual" | "herd" | "family";

export interface DetectionEvent {
  id: string;
  pillarId: string;
  timestamp: string;
  detected: boolean;
  groupType: GroupType;
  behavior: Behavior;
  adultCount: number;
  calfCount: number;
  confidence: number;
  distanceKm: number;
  riskLevel: RiskLevel;
  alertSent: boolean;
  deterrent: "activated" | "suspended" | "n/a";
  lat: number;
  lng: number;
}

export const liveStatus = {
  detected: true,
  behavior: "calm" as Behavior,
  groupType: "herd" as GroupType,
  adultCount: 4,
  calfCount: 1,
  totalCount: 5,
  confidence: 0.94,
  distanceKm: 2.3,
  riskLevel: "medium" as RiskLevel,
  lastUpdated: new Date().toISOString(),
  loraStatus: "transmitting",
  beeSound: "suspended" as "activated" | "suspended",
  beeReason: "Calf detected — vulnerable herd structure",
};

const pillarLocations = [
  { id: "PIL-001", name: "Habarana North", lat: 8.038, lng: 80.751 },
  { id: "PIL-002", name: "Habarana Mid", lat: 8.025, lng: 80.762 },
  { id: "PIL-003", name: "Galoya Junction", lat: 8.011, lng: 80.778 },
  { id: "PIL-004", name: "Minneriya West", lat: 7.998, lng: 80.792 },
  { id: "PIL-005", name: "Hingurakgoda", lat: 7.985, lng: 80.808 },
];

export const pillars = pillarLocations;

export const events: DetectionEvent[] = Array.from({ length: 18 }).map((_, i) => {
  const pillar = pillarLocations[i % pillarLocations.length];
  const groups: GroupType[] = ["individual", "herd", "family"];
  const behaviors: Behavior[] = ["calm", "calm", "calm", "aggressive"];
  const risks: RiskLevel[] = ["none", "low", "medium", "high", "critical"];
  const groupType = groups[i % groups.length];
  const behavior = behaviors[i % behaviors.length];
  const riskLevel = risks[i % risks.length];
  const distance = +(Math.random() * 12).toFixed(2);
  return {
    id: `EVT-${(2400 + i).toString()}`,
    pillarId: pillar.id,
    timestamp: new Date(Date.now() - i * 1000 * 60 * 17).toISOString(),
    detected: true,
    groupType,
    behavior,
    adultCount: groupType === "individual" ? 1 : 2 + (i % 4),
    calfCount: groupType === "family" ? 1 + (i % 2) : 0,
    confidence: +(0.78 + Math.random() * 0.2).toFixed(2),
    distanceKm: distance,
    riskLevel,
    alertSent: riskLevel !== "none",
    deterrent:
      behavior === "calm" && groupType !== "family" && riskLevel !== "critical"
        ? "activated"
        : "suspended",
    lat: pillar.lat + (Math.random() - 0.5) * 0.02,
    lng: pillar.lng + (Math.random() - 0.5) * 0.02,
  };
});

export const alertsByDay = [
  { day: "Mon", alerts: 4, critical: 1 },
  { day: "Tue", alerts: 7, critical: 2 },
  { day: "Wed", alerts: 3, critical: 0 },
  { day: "Thu", alerts: 9, critical: 3 },
  { day: "Fri", alerts: 6, critical: 1 },
  { day: "Sat", alerts: 11, critical: 4 },
  { day: "Sun", alerts: 8, critical: 2 },
];

export const riskDistribution = [
  { name: "None", value: 32, color: "hsl(var(--risk-none))" },
  { name: "Low", value: 41, color: "hsl(var(--risk-low))" },
  { name: "Medium", value: 27, color: "hsl(var(--risk-medium))" },
  { name: "High", value: 14, color: "hsl(var(--risk-high))" },
  { name: "Critical", value: 6, color: "hsl(var(--risk-critical))" },
];

export const behaviorDistribution = [
  { name: "Calm", value: 87 },
  { name: "Aggressive", value: 13 },
];

export const groupDistribution = [
  { name: "Individual", value: 38 },
  { name: "Herd", value: 47 },
  { name: "Family", value: 15 },
];

export const loraReliability = [
  { week: "W1", rate: 91 },
  { week: "W2", rate: 93 },
  { week: "W3", rate: 95 },
  { week: "W4", rate: 94 },
  { week: "W5", rate: 96 },
  { week: "W6", rate: 95 },
];

export const researchMetrics = {
  detectionAccuracy: 91.3,
  behaviorAccuracy: 87.6,
  combinedAccuracy: 89.5,
  avgLatencySec: 1.8,
  loraSuccessRate: 93.8,
  alertReliability: 95.2,
};

export const deviceHealth = [
  { name: "Raspberry Pi 5", status: "online", value: "98%", detail: "Edge processor" },
  { name: "ESP32 Receiver", status: "online", value: "100%", detail: "In-cab unit" },
  { name: "LoRa SX1278", status: "online", value: "RSSI -76dBm", detail: "Long-range link" },
  { name: "IR Camera", status: "online", value: "Streaming", detail: "Night vision" },
  { name: "GPS Module", status: "online", value: "12s ago", detail: "Last fix" },
  { name: "CPU Usage", status: "warning", value: "62%", detail: "Pi 5 cores" },
  { name: "Memory", status: "online", value: "3.1 / 8 GB", detail: "RAM in use" },
  { name: "Temperature", status: "warning", value: "58 °C", detail: "Edge device" },
  { name: "Service Uptime", status: "online", value: "14d 6h", detail: "Since reboot" },
];