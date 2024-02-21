import { useContext } from 'react';

import { SignUpContext } from '@/components/signup/context';
import Header from '@/components/signup/header';

export default function SignUpContainer() {
  const { activeStep, direction } = useContext(SignUpContext);

  return (
    <>
      <div className="lg:hidden">
        <Header activeStep={activeStep} />
      </div>
      <div className="hidden lg:flex lg:min-h-screen lg:items-center lg:justify-center"></div>
    </>
  );
}
