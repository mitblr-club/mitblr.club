import React, { useContext } from 'react';

import { FirstStepValidationSchema } from '@/lib/validators';

import { SignUpContext } from '@/components/signup/context';

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
      className={`bg-neutral-White flex w-full items-start ${
        activeStep > 1 ? 'justify-between' : 'justify-end'
      } fixed bottom-0 left-0 right-0 h-24 p-4`}
    >
      {activeStep > 1 && (
        <button
          onClick={() => {
            setActiveStep((prev) => prev - 1);
            setDirection(-1);
          }}
          className="text-neutral-Cool_gray rounded bg-transparent p-2 text-sm font-medium"
        >
          Go Back
        </button>
      )}

      <button
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
        className={`${
          activeStep === 4 ? 'bg-purple-500' : 'bg-blue-600'
        } text-neutral-Light_gray rounded px-5 py-2 text-sm font-medium`}
      >
        {activeStep === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </footer>
  );
}
