import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CheckIcon,
  ChevronDownIcon,
  FilterIcon,
  LucideIcon,
  SlidersHorizontal,
  TagIcon,
  XIcon,
} from 'lucide-react';
import { useState } from 'react';

interface FilterOption {
  value: string;
  label: string;
  icon?: LucideIcon;
}

const statusOptions: FilterOption[] = [
  { value: 'draft', label: 'Draft' },
  { value: 'review', label: 'Review' },
  { value: 'last-call', label: 'Last Call' },
  { value: 'final', label: 'Final' },
  { value: 'stagnant', label: 'Stagnant' },
  { value: 'withdrawn', label: 'Withdrawn' },
];

const typeOptions: FilterOption[] = [
  { value: 'eip', label: 'EIP' },
  { value: 'erc', label: 'ERC' },
  { value: 'rip', label: 'RIP' },
];

const categoryOptions: FilterOption[] = [
  { value: 'core', label: 'Core' },
  { value: 'networking', label: 'Networking' },
  { value: 'interface', label: 'Interface' },
  { value: 'erc', label: 'ERC' },
  { value: 'meta', label: 'Meta' },
  { value: 'informational', label: 'Informational' },
];

interface FilterBarProps {
  onFiltersChange?: (filters: string[]) => void;
}

export function FilterBar({ onFiltersChange }: FilterBarProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [openStatus, setOpenStatus] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const toggleFilter = (value: string) => {
    setSelectedFilters((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const handleFilterChange = (newFilters: string[]) => {
    setSelectedFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const removeFilter = (filter: string) => {
    const newFilters = selectedFilters.filter((item) => item !== filter);
    handleFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    handleFilterChange([]);
  };

  return (
    <div className="mb-4 flex flex-wrap gap-2 rounded-lg border bg-card p-3">
      {/* Status filter */}
      <Popover open={openStatus} onOpenChange={setOpenStatus}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-dashed"
          >
            <FilterIcon className="mr-2 h-4 w-4" />
            Status
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Filter status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statusOptions.map((option) => {
                  const isSelected = selectedFilters.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleFilter(option.value)}
                    >
                      <div
                        className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border ${
                          isSelected
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'opacity-50 [&_svg]:invisible'
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Type filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-dashed"
          >
            <TagIcon className="mr-2 h-4 w-4" />
            Type
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Filter type..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {typeOptions.map((option) => {
                  const isSelected = selectedFilters.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleFilter(option.value)}
                    >
                      <div
                        className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border ${
                          isSelected
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'opacity-50 [&_svg]:invisible'
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Category filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-dashed"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Category
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Filter category..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {categoryOptions.map((option) => {
                  const isSelected = selectedFilters.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleFilter(option.value)}
                    >
                      <div
                        className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border ${
                          isSelected
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'opacity-50 [&_svg]:invisible'
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <div className="ml-auto flex items-center space-x-2">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="h-8 w-[130px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="most-viewed">Most Viewed</SelectItem>
            <SelectItem value="most-active">Most Active</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active filters display */}
      {selectedFilters.length > 0 && (
        <div className="mt-2 flex w-full flex-wrap items-center gap-1">
          <span className="text-xs text-muted-foreground">Active filters:</span>
          {selectedFilters.map((filter) => {
            const option = [...statusOptions, ...typeOptions, ...categoryOptions].find(
              (opt) => opt.value === filter
            );
            return (
              <Badge
                key={filter}
                variant="outline"
                className="flex items-center gap-1 bg-secondary/50"
              >
                {option?.label || filter}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 p-0"
                  onClick={() => removeFilter(filter)}
                >
                  <XIcon className="h-2 w-2" />
                  <span className="sr-only">Remove filter</span>
                </Button>
              </Badge>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={clearAllFilters}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}