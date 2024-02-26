'use client';

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
  const { activeStep, setActiveStep } = useContext(SignUpContext);

  return (
    <div className="flex min-h-screen w-full flex-col justify-center">
      <Header activeStep={activeStep} />
      <div className="flex items-center justify-center p-6 py-10 lg:p-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Start your journey with us today.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {activeStep === 1 && <Step1 />}
            {activeStep === 2 && <Step2 />}
            {activeStep === 3 && <Step3 />}
            <div className="flex w-full gap-3">
              <Button
                type="button"
                variant={activeStep === 1 ? 'ghost' : 'secondary'}
                onClick={() => {
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
              <Button type="submit" form={`${activeStep}`} className="w-1/2">
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
