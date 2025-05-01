import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartData } from '@/types';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data: ChartData[] = [
  { name: 'Draft', value: 453, color: 'hsl(var(--chart-1))' },
  { name: 'Review', value: 124, color: 'hsl(var(--chart-2))' },
  { name: 'Last Call', value: 56, color: 'hsl(var(--chart-3))' },
  { name: 'Final', value: 212, color: 'hsl(var(--chart-4))' },
  { name: 'Stagnant', value: 187, color: 'hsl(var(--chart-5))' },
];

export function ProposalStatusChart() {
  return (
    <Card className="col-span-1 h-[350px]">
      <CardHeader>
        <CardTitle>Proposal Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={270}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value} proposals`, '']}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center" 
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}