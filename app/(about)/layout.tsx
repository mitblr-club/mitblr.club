import { marketingConfig } from '@/config/marketing';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
