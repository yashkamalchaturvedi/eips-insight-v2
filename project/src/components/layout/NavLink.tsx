import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  title: string;
  icon: LucideIcon;
  external?: boolean;
  onClick?: () => void;
}

export function NavLink({
  href,
  title,
  icon: Icon,
  external = false,
  onClick,
}: NavLinkProps) {
  const isActive = window.location.pathname === href;

  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group flex h-10 w-full items-center justify-start gap-x-2 rounded-md px-3 py-2 text-sm font-medium',
        isActive
          ? 'bg-secondary text-secondary-foreground'
          : 'hover:bg-secondary/50 hover:text-secondary-foreground'
      )}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      <span>{title}</span>
      {external && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-auto h-3 w-3"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
}