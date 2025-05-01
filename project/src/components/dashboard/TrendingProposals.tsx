import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Proposal } from '@/types';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const proposals: Partial<Proposal>[] = [
  {
    id: '1',
    title: 'Staking router',
    type: 'EIP',
    number: 6093,
    status: 'Review',
    category: 'Core',
  },
  {
    id: '2',
    title: 'EVM Object Format (EOF)',
    type: 'EIP',
    number: 5988,
    status: 'Last Call',
    category: 'Core',
  },
  {
    id: '3',
    title: 'PAY opcode',
    type: 'EIP',
    number: 5920,
    status: 'Draft',
    category: 'Core',
  },
  {
    id: '4',
    title: 'Supply validator deposits',
    type: 'EIP',
    number: 6110,
    status: 'Draft',
    category: 'Core',
  },
  {
    id: '5',
    title: 'ERC-4337 Account Abstraction',
    type: 'ERC',
    number: 4337,
    status: 'Final',
    category: 'Standards',
  },
];

export function TrendingProposals() {
  const getStatusColor = (status: Proposal['status']) => {
    switch (status) {
      case 'Draft':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Review':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Last Call':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Final':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Stagnant':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'Withdrawn':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="flex-1">
          <CardTitle>Trending Proposals</CardTitle>
        </div>
        <Badge className="flex items-center gap-1" variant="secondary">
          <ArrowUpRight className="h-3.5 w-3.5" />
          Popular
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="flex items-center justify-between rounded-md border p-3 transition-colors hover:bg-muted/50"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {proposal.type}-{proposal.number}
                  </span>
                  <Badge
                    className={`${getStatusColor(proposal.status || 'Draft')}`}
                    variant="outline"
                  >
                    {proposal.status}
                  </Badge>
                </div>
                <div className="mt-1 text-sm">{proposal.title}</div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}