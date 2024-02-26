import { motion } from 'framer-motion';

import Image from 'next/image';

export function Header({ activeStep }: { activeStep: number }) {
  return (
    <header className="flex w-full items-center justify-center px-4 pt-2">
      <ul className="flex items-center justify-center ">
        {[1, 2, 3].map((step, index) => (
          <li
            key={index}
            className={`mr-2 flex h-8 w-8 items-center justify-center rounded-[50%] border text-sm transition-colors duration-300  ${
              step === activeStep
                ? 'border-primary bg-primary font-bold text-white'
                : step < activeStep
                  ? 'bg-primary text-white'
                  : 'border-black bg-transparent text-black'
            }  `}
          >
            {step < activeStep ? (
              <svg
                className="h-5 w-5 text-white"
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
              step
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
