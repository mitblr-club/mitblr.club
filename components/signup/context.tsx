import React, { useState } from 'react';

export type SignUpContext = {
  firstStepData: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  setFirstStepData: React.Dispatch<
    React.SetStateAction<SignUpContext['firstStepData']>
  >;
  secondStepData: {
    applicationNumber: string;
    registrationNumber: string;
    yearOfGrad: string;
  };
  setSecondStepData: React.Dispatch<
    React.SetStateAction<SignUpContext['secondStepData']>
  >;
  thirdStepData: {
    course: string;
    hostelBlock: string;
    messProvider: string;
  };
  setThirdStepData: React.Dispatch<
    React.SetStateAction<SignUpContext['thirdStepData']>
  >;
  activeStep: number;
  setActiveStep: React.Dispatch<
    React.SetStateAction<SignUpContext['activeStep']>
  >;
};

export const SignUpContext = React.createContext<SignUpContext>(
  {} as SignUpContext
);

export function SignUpContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [firstStepData, setFirstStepData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [secondStepData, setSecondStepData] = useState({
    applicationNumber: '',
    registrationNumber: '',
    yearOfGrad: '',
  });

  const [thirdStepData, setThirdStepData] = useState({
    course: '',
    hostelBlock: '',
    messProvider: '',
  });

  const [activeStep, setActiveStep] = useState(1);
  const [direction, setDirection] = useState(0);

  return (
    <SignUpContext.Provider
      value={{
        firstStepData,
        setFirstStepData,
        secondStepData,
        setSecondStepData,
        thirdStepData,
        setThirdStepData,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}
