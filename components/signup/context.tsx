import React, { useState } from 'react';

export type SignUpContext = {
  firstStepData: {
    name: string;
    email: string;
    phoneNumber: string;
    applicationNumber: string;
    registrationNumber: string;
  };
  setFirstStepData: React.Dispatch<
    React.SetStateAction<SignUpContext['firstStepData']>
  >;
  firstStepErrors: any;
  setFirstStepErrors: React.Dispatch<
    React.SetStateAction<SignUpContext['firstStepErrors']>
  >;
  secondStepData: {
    hostelBlock: string;
    messProvider: string;
  };
  setSecondStepData: React.Dispatch<
    React.SetStateAction<SignUpContext['secondStepData']>
  >;
  secondStepErrors: any;
  setSecondStepErrors: React.Dispatch<
    React.SetStateAction<SignUpContext['secondStepErrors']>
  >;
  thirdStepData: {
    course: string;
    yearOfGrad: string;
  };
  setThirdStepData: React.Dispatch<
    React.SetStateAction<SignUpContext['thirdStepData']>
  >;
  thirdStepErrors: any;
  setThirdStepErrors: React.Dispatch<
    React.SetStateAction<SignUpContext['thirdStepErrors']>
  >;
  activeStep: number;
  setActiveStep: React.Dispatch<
    React.SetStateAction<SignUpContext['activeStep']>
  >;
  direction: number;
  setDirection: React.Dispatch<
    React.SetStateAction<SignUpContext['direction']>
  >;
};

export const SignUpContext = React.createContext<SignUpContext>(
  {} as SignUpContext
);

export function SignUpContextProvider({ children }: { children: JSX.Element }) {
  const [firstStepData, setFirstStepData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    applicationNumber: '',
    registrationNumber: '',
  });
  const [firstStepErrors, setFirstStepErrors] = useState([]);

  const [secondStepData, setSecondStepData] = useState({
    hostelBlock: '',
    messProvider: '',
  });
  const [secondStepErrors, setSecondStepErrors] = useState([]);

  const [thirdStepData, setThirdStepData] = useState({
    course: '',
    yearOfGrad: '',
  });
  const [thirdStepErrors, setThirdStepErrors] = useState([]);

  const [activeStep, setActiveStep] = useState(1);
  const [direction, setDirection] = useState(0);

  return (
    <SignUpContext.Provider
      value={{
        firstStepData,
        setFirstStepData,
        firstStepErrors,
        setFirstStepErrors,
        secondStepData,
        setSecondStepData,
        secondStepErrors,
        setSecondStepErrors,
        thirdStepData,
        setThirdStepData,
        thirdStepErrors,
        setThirdStepErrors,
        activeStep,
        setActiveStep,
        direction,
        setDirection,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}
