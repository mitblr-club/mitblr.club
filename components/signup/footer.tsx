import React, { useContext } from 'react';

import { FirstStepValidationSchema } from '@/lib/validators';

import { SignUpContext } from '@/components/signup/context';
import { Button } from '@/components/ui/button';

export function Footer() {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    setFirstStepErrors,
    firstStepData,
  } = useContext(SignUpContext);
  return (
    <footer
      className={`${
        activeStep > 1 ? 'justify-between' : 'justify-end'
      } fixed bottom-0 left-0 right-0 flex h-24 w-full items-center bg-background p-4`}
    >
      {activeStep > 1 && (
        <Button
          onClick={() => {
            setActiveStep((prev) => prev - 1);
            setDirection(-1);
          }}
          variant="ghost"
        >
          Go Back
        </Button>
      )}

      <Button form={`${activeStep}`} type="submit">
        {activeStep === 3 ? 'Confirm' : 'Next Step'}
      </Button>
    </footer>
  );
}
