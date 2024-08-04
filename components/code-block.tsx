'use client';

import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';

import { useEffect } from 'react';

import CopyToClipboard from '@/components/copy-to-clipboard';

type Props = {
  code: string;
  filename?: string;
};

export default function CodeBlock({ code, filename }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="max-h-full w-full bg-gradient-to-r from-violet-200 to-violet-400 p-4 !pr-0 md:p-8 lg:max-h-screen lg:w-1/2 lg:p-12 [&>pre]:rounded-none">
      <div className="h-full w-full overflow-hidden rounded-s-lg">
        <div className="flex items-center justify-between rounded-tl-lg bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pl-2 pr-4 text-sm">
          <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2 text-background ">
            {filename}
          </span>
          <CopyToClipboard code={code} />
        </div>
        <div className="max-h-full w-full overflow-scroll border-t-2 border-neutral-700 bg-neutral-900 text-sm [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full">
          <pre className="language-ts !m-0 !rounded-t-none !rounded-bl-lg !rounded-br-none">
            <code className="lg:pb-12">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
