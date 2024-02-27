import { motion } from 'framer-motion';

import { useContext } from 'react';

import Link from 'next/link';

import { SignUpContext } from '@/components/signup/context';

export function Step4() {
  const { confirmed } = useContext(SignUpContext);

  return (
    <motion.div
      className="flex h-60 flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.25 }}
    >
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-[50%] transition-colors duration-300 ${
          confirmed
            ? 'bg-primary text-white'
            : 'border-4 border-primary bg-transparent text-primary'
        }`}
      >
        {confirmed ? (
          <svg
            className="h-12 w-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 96 960 960"
            stroke="currentColor"
            strokeWidth={30}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 0.3,
                type: 'tween',
                ease: 'easeOut',
                duration: 0.3,
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
              d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z M382 816 154 588l57-57 171 171 367-367 57 57-424 424Z"
            />
          </svg>
        ) : (
          <span className="font-mono text-4xl font-bold">i</span>
        )}
      </div>
      <p className="text-center text-sm text-neutral-500">
        By continuing, you agree with our{' '}
        <Link href="/terms" className="underline">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </motion.div>
  );
}
