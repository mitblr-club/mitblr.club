'use client';

import * as React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { siteConfig } from '@/config/site';

import { cn } from '@/lib/utils';

import { MobileNav } from '@/components/mobile-nav';

export function SiteHeader() {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const items = siteConfig.navItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 w-full items-center justify-between gap-6 md:gap-10">
        <Link href="/" className="items-center space-x-2">
          <span className="text-2xl font-bold sm:inline-block">
            mitblr
            <span className="text-primary">{'.'}club</span>
          </span>
        </Link>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? '#' : item.href}
                className={cn(
                  'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                  item.href.startsWith(`/${segment}`)
                    ? 'text-foreground'
                    : 'text-foreground/60',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="font-bold">Menu</span>
        </button>
        {showMobileMenu && items && <MobileNav items={items} />}
      </div>
    </header>
  );
}
