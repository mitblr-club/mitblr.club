import React, { useContext } from 'react';

import { FirstStepValidationSchema } from '@/lib/validators';

import { SignUpContext } from '@/components/signup/context';
import { Button } from '@/components/ui/button';

export function ButtonContainer({
  activeStep,
  setActiveStep,
  setDirection,
  firstStepData,
}: {
  activeStep: SignUpContext['activeStep'];
  setActiveStep: SignUpContext['setActiveStep'];
  setDirection: SignUpContext['setDirection'];
  firstStepData: SignUpContext['firstStepData'];
}) {
  const { setFirstStepErrors } = useContext(SignUpContext);
  return (
    <div
      className={`mt-3 hidden w-full items-center bg-neutral-300 lg:flex ${
        activeStep > 1 ? 'justify-between' : 'justify-end'
      }  p-3`}
    >
      {activeStep > 1 && <Button variant="ghost">Go Back</Button>}

      <Button
        onClick={() => {
          if (activeStep === 1) {
            FirstStepValidationSchema.validate(firstStepData, {
              abortEarly: false,
            })
              .then(function (value) {
                console.log(value);
                setFirstStepErrors([]);

                setActiveStep((prev) => prev + 1);
                setDirection(1);
              })
              .catch(function (err) {
                setFirstStepErrors(err.inner);
                console.log(err.inner);
              });
          } else {
            setActiveStep((prev) => prev + 1);
            setDirection(1);
          }
        }}
      >
        {activeStep === 3 || activeStep === 4 ? 'Confirm' : 'Next Step'}
      </Button>
    </div>
  );
}
