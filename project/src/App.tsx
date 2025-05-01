import { ThemeProvider } from '@/hooks/useTheme';
import { Layout } from '@/components/layout/Layout';
import { Dashboard } from '@/pages/Dashboard';
import { Explorer } from '@/pages/Explorer';
import { Builder } from '@/pages/Builder';
import { Analytics } from '@/pages/Analytics';
import { Leaderboard } from '@/pages/Leaderboard';
import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [currentPage, setCurrentPage] = useState('/dashboard');

  // Simple client-side routing
  const renderPage = () => {
    switch (currentPage) {
      case '/dashboard':
        return <Dashboard />;
      case '/explorer':
        return <Explorer />;
      case '/builder':
        return <Builder />;
      case '/analytics':
        return <Analytics />;
      case '/leaderboard':
        return <Leaderboard />;
      default:
        return <Dashboard />;
    }
  };

  // Update window.history and the current page state
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
  };

  // Listen for browser back/forward navigation
  window.addEventListener('popstate', () => {
    setCurrentPage(window.location.pathname);
  });

  // Override the default behavior of NavLink components
  const handleNavigation = (event: MouseEvent, href: string) => {
    if (href.startsWith('http')) return; // Allow external links to work normally
    
    event.preventDefault();
    navigate(href);
  };

  // Add custom event listener for navigation
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor && !anchor.target && !anchor.href.startsWith('http')) {
      event.preventDefault();
      navigate(anchor.getAttribute('href') || '/');
    }
  });

  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        {renderPage()}
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;