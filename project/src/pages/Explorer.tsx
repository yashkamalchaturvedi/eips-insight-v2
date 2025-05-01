import { FilterBar } from '@/components/explorer/FilterBar';
import { ProposalCard } from '@/components/explorer/ProposalCard';
import { Proposal } from '@/types';
import { useState } from 'react';

// Sample data for proposals
const mockProposals: Proposal[] = [
  {
    id: '1',
    title: 'Staking Router',
    type: 'EIP',
    number: 6093,
    status: 'Review',
    category: 'Core',
    author: 'Alex Johnson',
    created: '2024-05-10T12:00:00Z',
    updated: '2024-06-15T10:30:00Z',
    description: 'This proposal introduces a staking router mechanism that allows for multiple ways to stake ETH with different characteristics and trade-offs.',
  },
  {
    id: '2',
    title: 'EVM Object Format (EOF)',
    type: 'EIP',
    number: 5988,
    status: 'Last Call',
    category: 'Core',
    author: 'Sam Wilson',
    created: '2024-04-20T09:00:00Z',
    updated: '2024-06-15T09:15:00Z',
    description: 'EOF defines a new version of EVM bytecode in a new container format, allowing for more efficient execution and new features.',
  },
  {
    id: '3',
    title: 'PAY Opcode',
    type: 'EIP',
    number: 5920,
    status: 'Draft',
    category: 'Core',
    author: 'Maya Rodriguez',
    created: '2024-05-01T14:30:00Z',
    updated: '2024-06-15T08:45:00Z',
    description: 'This proposal adds a new opcode to the EVM that allows for more efficient ETH transfers within contracts.',
  },
  {
    id: '4',
    title: 'Supply Validator Deposits',
    type: 'EIP',
    number: 6110,
    status: 'Draft',
    category: 'Core',
    author: 'Jordan Lee',
    created: '2024-05-05T11:15:00Z',
    updated: '2024-06-15T07:30:00Z',
    description: 'A mechanism to supply validator deposits directly from contract accounts without requiring withdrawal to an EOA first.',
  },
  {
    id: '5',
    title: 'ERC-4337 Account Abstraction',
    type: 'ERC',
    number: 4337,
    status: 'Final',
    category: 'Standards',
    author: 'Ethan Moore',
    created: '2023-09-12T08:00:00Z',
    updated: '2024-06-10T15:45:00Z',
    description: 'Account abstraction via entry point contract specification, enabling user operations through higher-level abstraction.',
  },
  {
    id: '6',
    title: 'NFT Royalty Standard',
    type: 'ERC',
    number: 2981,
    status: 'Final',
    category: 'Standards',
    author: 'Emma Chen',
    created: '2022-12-10T10:20:00Z',
    updated: '2024-05-20T13:10:00Z',
    description: 'A standardized way to retrieve royalty payment information for NFTs to enable universal support across all NFT marketplaces and ecosystem participants.',
  },
];

export function Explorer() {
  const [filters, setFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProposals = mockProposals.filter((proposal) => {
    // If no filters are applied, show all proposals
    if (filters.length === 0) return true;

    // Check if any of the proposal properties match the filters
    return (
      filters.includes(proposal.status.toLowerCase()) ||
      filters.includes(proposal.type.toLowerCase()) ||
      filters.includes(proposal.category.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Proposal Explorer</h1>
        <p className="text-muted-foreground">
          Browse and search through all Ethereum proposals
        </p>
      </div>

      <FilterBar onFiltersChange={setFilters} />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>

      {filteredProposals.length === 0 && (
        <div className="flex h-[200px] w-full items-center justify-center rounded-lg border border-dashed">
          <div className="text-center">
            <h3 className="text-lg font-medium">No proposals found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search term
            </p>
          </div>
        </div>
      )}
    </div>
  );
}