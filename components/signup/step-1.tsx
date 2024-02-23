import { useContext } from 'react';

import { ButtonContainer } from '@/components/signup/button-container';
import { SignUpContext } from '@/components/signup/context';
import { ErrorMessage } from '@/components/signup/error-message';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Step1() {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    firstStepData,
    setFirstStepData,
    firstStepErrors,
  } = useContext(SignUpContext);
  const isAnyError = (path: string) =>
    firstStepErrors.some((err: { path?: string }) => err.path === path);

  return (
    <>
      <h4
        className="mb-4 text-2xl font-bold capitalize"
        onClick={() => console.log(firstStepErrors)}
      >
        Sign Up
      </h4>
      <div>
        <div className="mb-5 flex flex-col">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            <Label htmlFor="name">Name</Label>
            {firstStepErrors?.map(
              (err: { message?: string; path?: string }, index: number) =>
                err.path === 'name' ? (
                  <ErrorMessage key={index} errMessage={err.message} />
                ) : null
            )}
          </div>

          <Input
            value={firstStepData.name}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                name: e.target.value,
              })
            }
            className={`border ${
              isAnyError('name') ? 'border-red-500' : 'border-neutral-500'
            }  mt-1 rounded p-2 outline-none focus:ring-1 focus:ring-neutral-700`}
            type="text"
            placeholder="Venkatesh"
            id="name"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            <Label htmlFor="email">Email Address</Label>
            {firstStepErrors?.map(
              (err: { message?: string; path?: string }, index: number) =>
                err.path === 'email' ? (
                  <ErrorMessage key={index} errMessage={err.message} />
                ) : null
            )}
          </div>

          <Input
            value={firstStepData.email}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                email: e.target.value,
              })
            }
            className={`border ${
              isAnyError('email') ? 'border-red-500' : 'border-neutral-500'
            }  mt-1 rounded p-2 outline-none focus:ring-1 focus:ring-neutral-700`}
            type="text"
            placeholder="venkatesh@learner.manipal.edu"
            id="email"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            <Label htmlFor="phone">Phone Number</Label>
            {firstStepErrors?.map(
              (err: { message?: string; path?: string }, index: number) =>
                err.path === 'phoneNumber' ? (
                  <ErrorMessage key={index} errMessage={err.message} />
                ) : null
            )}
          </div>

          <Input
            value={firstStepData.phoneNumber}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                phoneNumber: e.target.value,
              })
            }
            className={`border ${
              isAnyError('phoneNumber')
                ? 'border-red-500'
                : 'border-neutral-500'
            }  mt-1 rounded p-2 outline-none focus:ring-1 focus:ring-neutral-700`}
            type="number"
            placeholder="12345 67890"
            id="phone"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            <Label htmlFor="application">Application Number</Label>
            {firstStepErrors?.map(
              (err: { message?: string; path?: string }, index: number) =>
                err.path === 'applicationNumber' ? (
                  <ErrorMessage key={index} errMessage={err.message} />
                ) : null
            )}
          </div>

          <Input
            value={firstStepData.applicationNumber}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                applicationNumber: e.target.value,
              })
            }
            className={`border ${
              isAnyError('applicationNumber')
                ? 'border-red-500'
                : 'border-neutral-500'
            }  mt-1 rounded p-2 outline-none focus:ring-1 focus:ring-neutral-700`}
            type="number"
            placeholder="122115000"
            id="application"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            <Label htmlFor="registration">Registration Number</Label>
            {firstStepErrors?.map(
              (err: { message?: string; path?: string }, index: number) =>
                err.path === 'registrationNumber' ? (
                  <ErrorMessage key={index} errMessage={err.message} />
                ) : null
            )}
          </div>

          <Input
            value={firstStepData.registrationNumber}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                registrationNumber: e.target.value,
              })
            }
            className={`border ${
              isAnyError('phoneNumber')
                ? 'border-red-500'
                : 'border-neutral-500'
            }  mt-1 rounded p-2 outline-none focus:ring-1 focus:ring-neutral-700`}
            type="number"
            placeholder="225801000"
            id="registration"
          />
        </div>
        <ButtonContainer
          firstStepData={firstStepData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setDirection={setDirection}
        />
      </div>
    </>
  );
}
