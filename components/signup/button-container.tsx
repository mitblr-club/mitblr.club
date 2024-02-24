import React, { useContext } from 'react';

import { FirstStepValidationSchema } from '@/lib/validators';

import { SignUpContext } from '@/components/signup/context';
import { Button } from '@/components/ui/button';

export function ButtonContainer({
  activeStep,
  setActiveStep,
  setDirection,
}: {
  activeStep: SignUpContext['activeStep'];
  setActiveStep: SignUpContext['setActiveStep'];
  setDirection: SignUpContext['setDirection'];
}) {
  return (
    <div
      className={`mt-3 hidden w-full items-center bg-neutral-300 lg:flex ${
        activeStep > 1 ? 'justify-between' : 'justify-end'
      }  p-3`}
    >
      {activeStep > 1 && <Button variant="ghost">Go Back</Button>}

      <Button form={`${activeStep}`} type="submit">
        {activeStep === 3 || activeStep === 4 ? 'Confirm' : 'Next Step'}
      </Button>
    </div>
  );
}
