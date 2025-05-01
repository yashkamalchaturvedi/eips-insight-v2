import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';

const proposalsByMonth = [
  { month: 'Jan', count: 12 },
  { month: 'Feb', count: 18 },
  { month: 'Mar', count: 15 },
  { month: 'Apr', count: 22 },
  { month: 'May', count: 20 },
  { month: 'Jun', count: 28 },
  { month: 'Jul', count: 32 },
  { month: 'Aug', count: 35 },
  { month: 'Sep', count: 30 },
  { month: 'Oct', count: 25 },
  { month: 'Nov', count: 28 },
  { month: 'Dec', count: 24 },
];

const contributorsByMonth = [
  { month: 'Jan', count: 45 },
  { month: 'Feb', count: 52 },
  { month: 'Mar', count: 48 },
  { month: 'Apr', count: 70 },
  { month: 'May', count: 65 },
  { month: 'Jun', count: 90 },
  { month: 'Jul', count: 100 },
  { month: 'Aug', count: 110 },
  { month: 'Sep', count: 125 },
  { month: 'Oct', count: 130 },
  { month: 'Nov', count: 140 },
  { month: 'Dec', count: 160 },
];

const proposalsByCategory = [
  { name: 'Core', value: 53, color: 'hsl(var(--chart-1))' },
  { name: 'ERC', value: 124, color: 'hsl(var(--chart-2))' },
  { name: 'Interface', value: 45, color: 'hsl(var(--chart-3))' },
  { name: 'Networking', value: 32, color: 'hsl(var(--chart-4))' },
  { name: 'Meta', value: 18, color: 'hsl(var(--chart-5))' },
];

const proposalsByStatus = [
  { name: 'Draft', value: 453, color: 'hsl(var(--chart-1))' },
  { name: 'Review', value: 124, color: 'hsl(var(--chart-2))' },
  { name: 'Last Call', value: 56, color: 'hsl(var(--chart-3))' },
  { name: 'Final', value: 212, color: 'hsl(var(--chart-4))' },
  { name: 'Stagnant', value: 187, color: 'hsl(var(--chart-5))' },
];

const mergeTimeData = [
  { day: 'Mon', time: 4.2 },
  { day: 'Tue', time: 3.8 },
  { day: 'Wed', time: 5.1 },
  { day: 'Thu', time: 4.5 },
  { day: 'Fri', time: 6.2 },
  { day: 'Sat', time: 2.1 },
  { day: 'Sun', time: 1.8 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          In-depth analysis of Ethereum improvement proposals ecosystem
        </p>
      </div>

      <Tabs defaultValue="proposals" className="w-full">
        <TabsList className="w-full grid grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="proposals">Proposals</TabsTrigger>
          <TabsTrigger value="contributors">Contributors</TabsTrigger>
          <TabsTrigger value="github">GitHub Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="proposals" className="space-y-6 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Proposals by Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={proposalsByMonth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                      <Bar 
                        dataKey="count"
                        fill="hsl(var(--chart-1))" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Proposals by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={proposalsByCategory}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {proposalsByCategory.map((entry, index) => (
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
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contributors" className="space-y-6 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contributors Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={contributorsByMonth}>
                      <defs>
                        <linearGradient id="contributorsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="count"
                        stroke="hsl(var(--chart-2))"
                        fillOpacity={1}
                        fill="url(#contributorsGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Proposal Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={proposalsByStatus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {proposalsByStatus.map((entry, index) => (
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
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="github" className="space-y-6 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Average Merge Time (days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mergeTimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: 'var(--radius)',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="time"
                        stroke="hsl(var(--chart-4))"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contribution Activity Heatmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex h-[300px] items-center justify-center">
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 52 }).map((_, weekIndex) => (
                      <div key={weekIndex} className="grid grid-rows-7 gap-1">
                        {Array.from({ length: 7 }).map((_, dayIndex) => {
                          const activity = Math.random();
                          let bgClass = 'bg-muted';
                          
                          if (activity > 0.8) bgClass = 'bg-chart-1 dark:bg-chart-1';
                          else if (activity > 0.6) bgClass = 'bg-chart-1/80 dark:bg-chart-1/80';
                          else if (activity > 0.4) bgClass = 'bg-chart-1/60 dark:bg-chart-1/60';
                          else if (activity > 0.2) bgClass = 'bg-chart-1/40 dark:bg-chart-1/40';
                          else if (activity > 0.1) bgClass = 'bg-chart-1/20 dark:bg-chart-1/20';
                          
                          return (
                            <div
                              key={dayIndex}
                              className={`h-2 w-2 rounded-sm ${bgClass}`}
                              title={`${activity.toFixed(2)} activity`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}