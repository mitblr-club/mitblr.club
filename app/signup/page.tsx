'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useContext } from 'react';

import {
  confirmVariants,
  containerVariants,
  firstStepVariants,
} from '@/lib/variants';

import { SignUpContext } from '@/components/signup/context';
import { Footer } from '@/components/signup/footer';
import { Header } from '@/components/signup/header';
import { Step1 } from '@/components/signup/step-1';
import { Step2 } from '@/components/signup/step-2';
import { Step3 } from '@/components/signup/step-3';
import { Step4 } from '@/components/signup/step-4';

export default function SignUpContainer() {
  const { activeStep, direction } = useContext(SignUpContext);

  return (
    <>
      <div className="lg:hidden">
        <Header activeStep={activeStep} />
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeStep}
            variants={
              activeStep === 1
                ? firstStepVariants
                : activeStep === 4
                  ? confirmVariants
                  : containerVariants
            }
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={direction}
            className="absolute left-0 right-0 top-20 mx-auto min-h-[50%] w-[85%] rounded-md bg-neutral-100 p-4 shadow-md"
          >
            {activeStep === 1 && <Step1 />}

            {activeStep === 2 && <Step2 />}

            {activeStep === 3 && <Step3 />}

            {activeStep === 4 && <Step4 />}
          </motion.div>
        </AnimatePresence>
        {activeStep <= 4 && <Footer />}
      </div>
      <div className="hidden lg:flex lg:min-h-screen lg:items-center lg:justify-center"></div>
    </>
  );
}
