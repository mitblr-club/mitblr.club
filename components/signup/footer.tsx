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
      className={`flex w-full items-center bg-background ${
        activeStep > 1 ? 'justify-between' : 'justify-end'
      } fixed bottom-0 left-0 right-0 h-20 border-t border-neutral-500 p-4`}
    >
      {activeStep > 1 && (
        <Button
          onClick={() => {
            setActiveStep((prev) => prev - 1);
            setDirection(-1);
          }}
          variant="ghost"
          className="font-semibold"
        >
          Go Back
        </Button>
      )}

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
        className="font-semibold"
      >
        {activeStep === 4 ? 'Confirm' : 'Next Step'}
      </Button>
    </footer>
  );
}
