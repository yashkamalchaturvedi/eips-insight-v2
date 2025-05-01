export interface Proposal {
  id: string;
  title: string;
  type: 'EIP' | 'ERC' | 'RIP';
  status: 'Draft' | 'Review' | 'Last Call' | 'Final' | 'Stagnant' | 'Withdrawn';
  number: number;
  author: string;
  created: string;
  updated: string;
  category: string;
  description: string;
}

export interface Contributor {
  id: string;
  name: string;
  avatar: string;
  githubUrl: string;
  contributions: number;
  proposals: number;
  reviews: number;
  lastActive: string;
  role: 'Author' | 'Editor' | 'Reviewer';
}

export interface ActivityItem {
  id: string;
  type: 'creation' | 'update' | 'statusChange' | 'review';
  proposalId: string;
  proposalTitle: string;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  description: string;
}

export interface Stat {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}