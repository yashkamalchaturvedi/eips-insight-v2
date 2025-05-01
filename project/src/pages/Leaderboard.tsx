import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Contributor } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { Award, FileCheck, Github, MessageSquare, User } from 'lucide-react';

const mockContributors: Contributor[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    githubUrl: 'https://github.com/alexj',
    contributions: 153,
    proposals: 12,
    reviews: 87,
    lastActive: '2024-06-15T10:30:00Z',
    role: 'Editor',
  },
  {
    id: '2',
    name: 'Sam Wilson',
    avatar: 'https://i.pravatar.cc/150?u=sam',
    githubUrl: 'https://github.com/samw',
    contributions: 142,
    proposals: 8,
    reviews: 90,
    lastActive: '2024-06-15T09:15:00Z',
    role: 'Author',
  },
  {
    id: '3',
    name: 'Maya Rodriguez',
    avatar: 'https://i.pravatar.cc/150?u=maya',
    githubUrl: 'https://github.com/mayar',
    contributions: 138,
    proposals: 5,
    reviews: 105,
    lastActive: '2024-06-15T08:45:00Z',
    role: 'Reviewer',
  },
  {
    id: '4',
    name: 'Jordan Lee',
    avatar: 'https://i.pravatar.cc/150?u=jordan',
    githubUrl: 'https://github.com/jordanl',
    contributions: 126,
    proposals: 10,
    reviews: 62,
    lastActive: '2024-06-15T07:30:00Z',
    role: 'Author',
  },
  {
    id: '5',
    name: 'Taylor Swift',
    avatar: 'https://i.pravatar.cc/150?u=taylor',
    githubUrl: 'https://github.com/taylors',
    contributions: 112,
    proposals: 7,
    reviews: 65,
    lastActive: '2024-06-14T22:15:00Z',
    role: 'Reviewer',
  },
  {
    id: '6',
    name: 'Chris Martinez',
    avatar: 'https://i.pravatar.cc/150?u=chris',
    githubUrl: 'https://github.com/chrism',
    contributions: 104,
    proposals: 4,
    reviews: 78,
    lastActive: '2024-06-14T18:30:00Z',
    role: 'Editor',
  },
  {
    id: '7',
    name: 'Jamie Parker',
    avatar: 'https://i.pravatar.cc/150?u=jamie',
    githubUrl: 'https://github.com/jamiep',
    contributions: 98,
    proposals: 6,
    reviews: 54,
    lastActive: '2024-06-14T15:45:00Z',
    role: 'Author',
  },
  {
    id: '8',
    name: 'Robin Chen',
    avatar: 'https://i.pravatar.cc/150?u=robin',
    githubUrl: 'https://github.com/robinc',
    contributions: 95,
    proposals: 3,
    reviews: 72,
    lastActive: '2024-06-14T12:00:00Z',
    role: 'Reviewer',
  },
];

export function Leaderboard() {
  const getRoleBadgeColor = (role: Contributor['role']) => {
    switch (role) {
      case 'Author':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Editor':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Reviewer':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
        <p className="text-muted-foreground">
          Recognizing top contributors to the Ethereum ecosystem
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/40">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <span>Top Contributors</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="all" className="w-full">
            <div className="border-b px-2">
              <TabsList className="h-12">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="authors">Authors</TabsTrigger>
                <TabsTrigger value="editors">Editors</TabsTrigger>
                <TabsTrigger value="reviewers">Reviewers</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="m-0">
              <LeaderboardTable contributors={mockContributors} getRoleBadgeColor={getRoleBadgeColor} />
            </TabsContent>

            <TabsContent value="authors" className="m-0">
              <LeaderboardTable 
                contributors={mockContributors.filter(c => c.role === 'Author')} 
                getRoleBadgeColor={getRoleBadgeColor} 
              />
            </TabsContent>

            <TabsContent value="editors" className="m-0">
              <LeaderboardTable 
                contributors={mockContributors.filter(c => c.role === 'Editor')} 
                getRoleBadgeColor={getRoleBadgeColor} 
              />
            </TabsContent>

            <TabsContent value="reviewers" className="m-0">
              <LeaderboardTable 
                contributors={mockContributors.filter(c => c.role === 'Reviewer')} 
                getRoleBadgeColor={getRoleBadgeColor} 
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

interface LeaderboardTableProps {
  contributors: Contributor[];
  getRoleBadgeColor: (role: Contributor['role']) => string;
}

function LeaderboardTable({ contributors, getRoleBadgeColor }: LeaderboardTableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/40 text-xs uppercase">
          <tr>
            <th className="whitespace-nowrap px-6 py-3">Rank</th>
            <th className="whitespace-nowrap px-6 py-3">Contributor</th>
            <th className="whitespace-nowrap px-6 py-3">Role</th>
            <th className="whitespace-nowrap px-6 py-3">Contributions</th>
            <th className="whitespace-nowrap px-6 py-3">Proposals</th>
            <th className="whitespace-nowrap px-6 py-3">Reviews</th>
            <th className="whitespace-nowrap px-6 py-3">Last Active</th>
            <th className="whitespace-nowrap px-6 py-3">GitHub</th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((contributor, index) => (
            <tr 
              key={contributor.id} 
              className="border-b transition-colors hover:bg-muted/50"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {index === 0 ? (
                  <div className="flex items-center justify-center rounded-full bg-yellow-100 p-1 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    <Award className="h-4 w-4" />
                  </div>
                ) : (
                  <span>{index + 1}</span>
                )}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={contributor.avatar} alt={contributor.name} />
                    <AvatarFallback>
                      {contributor.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{contributor.name}</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <Badge
                  variant="outline"
                  className={getRoleBadgeColor(contributor.role)}
                >
                  {contributor.role}
                </Badge>
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {contributor.contributions}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-1">
                  <FileCheck className="h-4 w-4 text-muted-foreground" />
                  {contributor.proposals}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  {contributor.reviews}
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-muted-foreground">
                {formatDistanceToNow(new Date(contributor.lastActive), {
                  addSuffix: true,
                })}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <a
                  href={contributor.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  <Github className="h-4 w-4" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}