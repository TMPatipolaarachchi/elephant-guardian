import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, Legend
} from "recharts";
import PageHeader from "@/components/dashboard/PageHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import {
  alertsByDay, riskDistribution, behaviorDistribution, groupDistribution,
  loraReliability, researchMetrics
} from "@/data/mockData";

const tooltipStyle = {
  background: "hsl(220 28% 9% / 0.95)",
  border: "1px solid hsl(220 20% 16%)",
  borderRadius: "8px",
  fontSize: "12px",
  color: "hsl(200 20% 96%)",
};

const ChartCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="glass rounded-2xl p-5">
    <div className="text-sm font-display font-medium mb-4">{title}</div>
    <div className="h-64">{children}</div>
  </div>
);

const Reports = () => {
  const m = researchMetrics;
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <PageHeader title="Reports & Analytics" subtitle="Aggregated performance and research metrics" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <MetricCard tone="primary" label="Detection Acc." value={`${m.detectionAccuracy}%`} />
        <MetricCard tone="primary" label="Behavior Acc." value={`${m.behaviorAccuracy}%`} />
        <MetricCard tone="primary" label="Combined Acc." value={`${m.combinedAccuracy}%`} />
        <MetricCard tone="amber" label="Avg Latency" value={`${m.avgLatencySec}s`} />
        <MetricCard tone="amber" label="LoRa Success" value={`${m.loraSuccessRate}%`} />
        <MetricCard tone="amber" label="Alert Reliability" value={`${m.alertReliability}%`} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ChartCard title="Alerts by day">
          <ResponsiveContainer>
            <AreaChart data={alertsByDay}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(152,70%,45%)" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="hsl(152,70%,45%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="hsl(220,20%,16%)" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="hsl(215,15%,65%)" fontSize={11} />
              <YAxis stroke="hsl(215,15%,65%)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area dataKey="alerts" stroke="hsl(152,70%,45%)" strokeWidth={2} fill="url(#g1)" />
              <Area dataKey="critical" stroke="hsl(0,85%,58%)" strokeWidth={2} fill="hsl(0,85%,58%,0.15)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Risk level distribution">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={riskDistribution} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={3}>
                {riskDistribution.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 11, color: "hsl(215,15%,65%)" }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Behavior classification">
          <ResponsiveContainer>
            <BarChart data={behaviorDistribution}>
              <CartesianGrid stroke="hsl(220,20%,16%)" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="hsl(215,15%,65%)" fontSize={11} />
              <YAxis stroke="hsl(215,15%,65%)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" fill="hsl(152,70%,45%)" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Group type distribution">
          <ResponsiveContainer>
            <BarChart data={groupDistribution}>
              <CartesianGrid stroke="hsl(220,20%,16%)" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="hsl(215,15%,65%)" fontSize={11} />
              <YAxis stroke="hsl(215,15%,65%)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" fill="hsl(38,95%,55%)" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="LoRa delivery reliability (weekly %)">
          <ResponsiveContainer>
            <LineChart data={loraReliability}>
              <CartesianGrid stroke="hsl(220,20%,16%)" strokeDasharray="3 3" />
              <XAxis dataKey="week" stroke="hsl(215,15%,65%)" fontSize={11} />
              <YAxis domain={[80,100]} stroke="hsl(215,15%,65%)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line dataKey="rate" stroke="hsl(210,90%,60%)" strokeWidth={3} dot={{ r: 4, fill: "hsl(210,90%,60%)" }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Detection accuracy metrics">
          <ResponsiveContainer>
            <BarChart data={[
              { name: "Detection", v: m.detectionAccuracy },
              { name: "Behavior", v: m.behaviorAccuracy },
              { name: "Combined", v: m.combinedAccuracy },
              { name: "Reliability", v: m.alertReliability },
            ]}>
              <CartesianGrid stroke="hsl(220,20%,16%)" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="hsl(215,15%,65%)" fontSize={11} />
              <YAxis domain={[80,100]} stroke="hsl(215,15%,65%)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="v" fill="hsl(152,70%,45%)" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default Reports;