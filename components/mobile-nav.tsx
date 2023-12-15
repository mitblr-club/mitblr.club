import * as React from 'react';

import Link from 'next/link';

import { NavItem } from 'types';

import { cn } from '@/lib/utils';

import { useLockBody } from '@/hooks/use-lock-body';

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        'fixed inset-0 top-14 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto pb-32 shadow-md animate-in fade-in-40 md:hidden'
      )}
    >
      <div className="relative z-50 grid gap-6 rounded-md bg-background px-6 py-3 text-foreground shadow-lg">
        <nav>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'text-md flex w-full items-center rounded-md p-2 font-medium hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
