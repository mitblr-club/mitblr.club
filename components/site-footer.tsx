import * as React from 'react';

import { siteConfig } from '@/config/site';

import { cn } from '@/lib/utils';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <a
              href={siteConfig.links.github + '/people'}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              students
            </a>
            , for{' '}
            <a
              href={siteConfig.links.institute}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              students
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
