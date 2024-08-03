import Link from 'next/link';

import { siteConfig } from '@/config/site';

export function FormFooter() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:pb-0 md:pt-24">
      <Link href="/" className="items-center space-x-2">
        <span className="text-2xl font-bold sm:inline-block">
          mitblr
          <span className="text-primary">{'.'}club</span>
        </span>
      </Link>
      <div>
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
  );
}
