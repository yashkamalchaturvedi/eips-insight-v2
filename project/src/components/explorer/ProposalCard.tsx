import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Proposal } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { Eye, Github, MessageSquare, User } from 'lucide-react';

interface ProposalCardProps {
  proposal: Proposal;
}

export function ProposalCard({ proposal }: ProposalCardProps) {
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

  const typeBadgeColor = () => {
    switch (proposal.type) {
      case 'EIP':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'ERC':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'RIP':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={typeBadgeColor()}>
              {proposal.type}
            </Badge>
            <Badge variant="outline" className={getStatusColor(proposal.status)}>
              {proposal.status}
            </Badge>
          </div>
          <Badge variant="secondary">{proposal.category}</Badge>
        </div>
        <CardTitle className="pt-2 line-clamp-2">
          {proposal.type}-{proposal.number}: {proposal.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <User className="h-3.5 w-3.5" />
          <span>{proposal.author}</span>
          <span>•</span>
          <span>
            Updated {formatDistanceToNow(new Date(proposal.updated), { addSuffix: true })}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {proposal.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/20 p-2">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>12 comments</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            <span>856 views</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="default" size="sm" className="h-8">
            View
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}