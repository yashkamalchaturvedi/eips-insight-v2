import { NavLink } from '@/components/layout/NavLink';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  FileText,
  Github,
  Home,
  LayoutDashboard,
  LucideIcon,
  PenTool,
  Trophy,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SidebarItem {
  title: string;
  icon: LucideIcon;
  href: string;
}

const mainNavItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Proposal Explorer',
    icon: FileText,
    href: '/explorer',
  },
  {
    title: 'Proposal Builder',
    icon: PenTool,
    href: '/builder',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    title: 'Leaderboard',
    icon: Trophy,
    href: '/leaderboard',
  },
];

const resourceNavItems: SidebarItem[] = [
  {
    title: 'Ethereum.org',
    icon: Home,
    href: 'https://ethereum.org',
  },
  {
    title: 'GitHub',
    icon: Github,
    href: 'https://github.com/ethereum/EIPs',
  },
  {
    title: 'Community',
    icon: Users,
    href: '/community',
  },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-card transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-xl font-semibold tracking-tight">
            EIPs<span className="text-primary">Insight</span>
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={onClose}
            aria-label="Close Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>

        <ScrollArea className="flex-1 overflow-auto py-2">
          <nav className="flex flex-col gap-2 px-4 py-2">
            <div className="py-2">
              <h3 className="mb-2 px-4 text-sm font-medium text-muted-foreground">
                Main
              </h3>
              <div className="space-y-1">
                {mainNavItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    title={item.title}
                    onClick={isMobile ? onClose : undefined}
                  />
                ))}
              </div>
            </div>
            <Separator />
            <div className="py-2">
              <h3 className="mb-2 px-4 text-sm font-medium text-muted-foreground">
                Resources
              </h3>
              <div className="space-y-1">
                {resourceNavItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    title={item.title}
                    external={item.href.startsWith('http')}
                    onClick={isMobile ? onClose : undefined}
                  />
                ))}
              </div>
            </div>
          </nav>
        </ScrollArea>

        <div className="mt-auto border-t px-6 py-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              v0.1.0 • Beta Release
            </p>
          </div>
        </div>
      </div>
    </>
  );
}