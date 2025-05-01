import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivityItem } from '@/types';
import { formatDistanceToNow } from 'date-fns';

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'creation',
    proposalId: 'EIP-6093',
    proposalTitle: 'Staking Router',
    user: {
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?u=alex',
    },
    timestamp: '2025-06-15T10:30:00Z',
    description: 'created a new proposal',
  },
  {
    id: '2',
    type: 'update',
    proposalId: 'EIP-5988',
    proposalTitle: 'EVM Object Format (EOF)',
    user: {
      name: 'Sam Wilson',
      avatar: 'https://i.pravatar.cc/150?u=sam',
    },
    timestamp: '2025-06-15T09:15:00Z',
    description: 'updated the specification',
  },
  {
    id: '3',
    type: 'statusChange',
    proposalId: 'EIP-5920',
    proposalTitle: 'PAY opcode',
    user: {
      name: 'Maya Rodriguez',
      avatar: 'https://i.pravatar.cc/150?u=maya',
    },
    timestamp: '2025-06-15T08:45:00Z',
    description: 'changed status to Last Call',
  },
  {
    id: '4',
    type: 'review',
    proposalId: 'EIP-6110',
    proposalTitle: 'Supply validator deposits',
    user: {
      name: 'Jordan Lee',
      avatar: 'https://i.pravatar.cc/150?u=jordan',
    },
    timestamp: '2025-06-15T07:30:00Z',
    description: 'reviewed and approved changes',
  },
  {
    id: '5',
    type: 'update',
    proposalId: 'EIP-5988',
    proposalTitle: 'EVM Object Format (EOF)',
    user: {
      name: 'Sam Wilson',
      avatar: 'https://i.pravatar.cc/150?u=sam',
    },
    timestamp: '2025-06-14T22:15:00Z',
    description: 'addressed reviewer comments',
  },
];

export function ActivityFeed() {
  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'creation':
        return '📄';
      case 'update':
        return '✏️';
      case 'statusChange':
        return '🔄';
      case 'review':
        return '👁️';
      default:
        return '📌';
    }
  };

  return (
    <Card className="col-span-1 h-[350px]">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 overflow-auto" style={{ maxHeight: '270px' }}>
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 rounded-lg border p-3 transition-colors hover:bg-muted/50"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>{' '}
                  {activity.description}{' '}
                  <span className="font-semibold">
                    {activity.proposalId}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(activity.timestamp), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="ml-auto text-lg">{getActivityIcon(activity.type)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}