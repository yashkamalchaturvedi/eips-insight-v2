import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stat } from '@/types';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  const { title, value, change, icon } = stat;
  
  const renderChangeIndicator = (): ReactNode => {
    if (typeof change === 'undefined') return null;
    
    const isPositive = change > 0;
    return (
      <div className={`flex items-center text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? (
          <ArrowUpIcon className="mr-1 h-3 w-3" />
        ) : (
          <ArrowDownIcon className="mr-1 h-3 w-3" />
        )}
        <span>{Math.abs(change)}%</span>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="rounded-full bg-secondary p-2">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {renderChangeIndicator()}
      </CardContent>
    </Card>
  );
}