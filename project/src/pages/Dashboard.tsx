import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { ContributionTrendChart } from '@/components/dashboard/ContributionTrendChart';
import { ProposalStatusChart } from '@/components/dashboard/ProposalStatusChart';
import { StatCards } from '@/components/dashboard/StatCards';
import { TrendingProposals } from '@/components/dashboard/TrendingProposals';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of Ethereum Improvement Proposals ecosystem
        </p>
      </div>
      
      <StatCards />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ContributionTrendChart />
        <ProposalStatusChart />
        <ActivityFeed />
      </div>
      
      <TrendingProposals />
    </div>
  );
}