import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { month: 'Jan', proposals: 45, contributors: 30 },
  { month: 'Feb', proposals: 52, contributors: 35 },
  { month: 'Mar', proposals: 48, contributors: 32 },
  { month: 'Apr', proposals: 70, contributors: 45 },
  { month: 'May', proposals: 65, contributors: 50 },
  { month: 'Jun', proposals: 90, contributors: 61 },
  { month: 'Jul', proposals: 100, contributors: 75 },
  { month: 'Aug', proposals: 110, contributors: 80 },
  { month: 'Sep', proposals: 125, contributors: 90 },
  { month: 'Oct', proposals: 130, contributors: 95 },
  { month: 'Nov', proposals: 140, contributors: 100 },
  { month: 'Dec', proposals: 160, contributors: 120 },
];

export function ContributionTrendChart() {
  return (
    <Card className="col-span-2 h-[350px]">
      <CardHeader>
        <CardTitle>Contribution Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={270}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="proposalsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="contributorsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Area
              type="monotone"
              dataKey="proposals"
              stroke="hsl(var(--chart-1))"
              fillOpacity={1}
              fill="url(#proposalsGradient)"
            />
            <Area
              type="monotone"
              dataKey="contributors"
              stroke="hsl(var(--chart-2))"
              fillOpacity={1}
              fill="url(#contributorsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}