import { SiteConfig } from 'types';

export const siteConfig: SiteConfig = {
  name: 'mitblr.club',
  description: 'That club ecosystem.',
  url: 'https://mitblr.club',
  ogImage: 'https://mitblr.club/og.jpg',
  navItems: [
    {
      title: 'Features',
      href: '/#features',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ],
  links: {
    institute: 'https://manipal.edu/mitblr',
    github: 'https://github.com/mitblr-club',
  },
};
