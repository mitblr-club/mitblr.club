import { motion } from 'framer-motion';

import Image from 'next/image';

export function Header({ activeStep }: { activeStep: number }) {
  return (
    <header className="relative h-40 w-full">
      <Image
        src="https://abhigyantrips.dev/assets/background.jpg"
        alt="bg-sidebar-mobile"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute left-0 right-0 top-6">
        <ul className=" flex items-center justify-center ">
          {[1, 2, 3].map((step, index) => (
            <li
              key={index}
              className={`mr-2 flex h-8 w-8 items-center justify-center rounded-[50%] border text-sm transition-colors duration-300  ${
                step === activeStep
                  ? 'border-white bg-white font-bold text-black'
                  : step < activeStep
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white'
              }  `}
            >
              {step < activeStep ? (
                <svg
                  className="h-5 w-5 text-black"
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
                    d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z M382 816 154 588l57-57 171 171 367-367 57 57-424 424Z"
                  />
                </svg>
              ) : (
                step
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
