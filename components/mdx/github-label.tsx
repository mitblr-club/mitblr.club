import * as React from 'react';

interface GithubLabel {
  name: string;
  color: `#${string}`;
}

const labels: { [slug: string]: GithubLabel } = {
  'type-code': {
    name: '💻 type: code',
    color: '#123456',
  },
};

export function MdxGithubLabel({ slug }: { slug: string }) {
  return (
    <span className="inline-block select-none rounded-full border border-blue-800 bg-blue-100 bg-opacity-75 px-2 py-1 text-xs font-semibold leading-none text-blue-800">
      {labels[slug].name}
    </span>
  );
}
