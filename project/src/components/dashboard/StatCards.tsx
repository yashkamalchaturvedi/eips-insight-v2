import { FileText, GitPullRequest, Users } from 'lucide-react';
import { StatCard } from './StatCard';
import { Stat } from '@/types';

export function StatCards() {
  const stats: Stat[] = [
    {
      title: 'Total Proposals',
      value: '6,419',
      change: 12,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: 'Open PRs',
      value: '243',
      change: -4,
      icon: <GitPullRequest className="h-4 w-4" />,
    },
    {
      title: 'Active Contributors',
      value: '852',
      change: 8,
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: 'Final Status',
      value: '1,254',
      change: 5,
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
}