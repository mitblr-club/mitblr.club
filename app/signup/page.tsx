'use client';

import { AnimatePresence } from 'framer-motion';

import { useContext } from 'react';

import { cn } from '@/lib/utils';

import { SignUpContext } from '@/components/signup/context';
import { Footer } from '@/components/signup/footer';
import { Header } from '@/components/signup/header';
import { Step1 } from '@/components/signup/step-1';
import { Step2 } from '@/components/signup/step-2';
import { Step3 } from '@/components/signup/step-3';
import { Step4 } from '@/components/signup/step-4';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SignUpContainer() {
  const { activeStep, setActiveStep, confirmed, setConfirmed } =
    useContext(SignUpContext);

  return (
    <div className="flex min-h-screen w-full flex-col justify-center">
      <Header activeStep={activeStep} />
      <div className="flex items-center justify-center p-6 py-10 lg:p-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Start your journey with us today.</CardDescription>
          </CardHeader>
          <AnimatePresence>
            <CardContent className="space-y-6">
              {activeStep === 1 && <Step1 />}
              {activeStep === 2 && <Step2 />}
              {activeStep === 3 && <Step3 />}
              {activeStep === 4 && <Step4 />}
              <div className="flex w-full gap-3">
                <Button
                  type="button"
                  variant={activeStep === 1 ? 'ghost' : 'secondary'}
                  onClick={() => {
                    activeStep === 4 && setConfirmed(false);
                    setActiveStep((prev) => prev - 1);
                  }}
                  className={cn(
                    activeStep === 1 ? 'text-white opacity-0' : '',
                    'w-1/2'
                  )}
                  disabled={activeStep === 1}
                >
                  Go Back
                </Button>
                <Button
                  type="submit"
                  form={`${activeStep}`}
                  className={activeStep === 4 ? 'hidden' : 'w-1/2'}
                >
                  Next
                </Button>
                <Button
                  className={activeStep === 4 ? 'w-1/2' : 'hidden'}
                  onClick={() => setConfirmed(!confirmed)}
                  disabled={confirmed}
                >
                  Confirm
                </Button>
              </div>
            </CardContent>
          </AnimatePresence>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
