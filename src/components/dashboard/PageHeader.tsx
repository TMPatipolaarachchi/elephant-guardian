interface Props { title: string; subtitle?: string; right?: React.ReactNode; }

export const PageHeader = ({ title, subtitle, right }: Props) => (
  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
    <div>
      <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
    </div>
    {right}
  </div>
);

export default PageHeader;