import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { siteConfig } from '@/config/site';

import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'MIT Bengaluru',
    'Web Templates',
    'Student Project',
    'mitblr.club',
  ],
  authors: [
    {
      name: 'Abhigyan Tripathi',
      url: 'https://abhigyantrips.dev',
    },
    {
      name: 'Raghav Gupta',
      url: 'https://alphaspiderman.dev',
    },
    {
      name: 'Hari Keshav Rajesh',
      url: '',
    },
  ],
  creator: 'Abhigyan Tripathi',
  twitter: {
    images: '/og.png',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
