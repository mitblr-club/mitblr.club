import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import StepBar from './stepbar';

export default function PersonalForm({
  name,
  setName,
  number,
  setNumber,
  appNo,
  setAppNo,
  regNo,
  setRegNo,
  step,
  setStep,
}: {
  name: string;
  setName: Function;
  number: string;
  setNumber: Function;
  appNo: string;
  setAppNo: Function;
  regNo: string;
  setRegNo: Function;
  step: number;
  setStep: Function;
}) {
  const [error, setError] = useState('');

  function handleNext(event: any) {
    event.preventDefault();

    // Check if all fields are filled
    if (name === '' || number === '' || appNo === '' || regNo === '') {
      alert('Please fill in all fields');
      return;
    }

    // Check if phone number is valid
    if (number.length !== 10) {
      alert('Invalid Phone Number');
      setError('number');
      return;
    }

    // Check if application number is valid
    if (
      (!appNo.startsWith('121') &&
        !appNo.startsWith('122') &&
        !appNo.startsWith('123')) ||
      appNo.length !== 9
    ) {
      alert('Invalid Application Number');
      setError('app_no');
      return;
    }

    // Check if registration number is valid
    if (
      (!regNo.startsWith('21') &&
        !regNo.startsWith('22') &&
        !regNo.startsWith('23')) ||
      regNo.length !== 9
    ) {
      alert('Invalid Registration Number');
      setError('reg_no');
      return;
    }

    // If all fields are filled, proceed to next step
    console.log(name, number, appNo, regNo);

    setStep(2);
  }

  return (
    <Card className="h-fit w-fit md:w-[400px]">
      <CardHeader>
        <CardTitle>Personal Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleNext}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name*</Label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                style={error === 'name' ? { borderColor: 'red' } : {}}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="number">Phone Number*</Label>
              <Input
                type="text"
                id="number"
                placeholder="Your Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                style={error === 'number' ? { borderColor: 'red' } : {}}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="appNo">Application Number*</Label>
              <Input
                type="text"
                id="appNo"
                placeholder="Your Application Number"
                onChange={(e) => setAppNo(e.target.value)}
                style={error === 'app_no' ? { borderColor: 'red' } : {}}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="regNo">Registration Number*</Label>
              <Input
                type="text"
                id="regNo"
                placeholder="Your Registration Number"
                onChange={(e) => setRegNo(e.target.value)}
                style={error === 'reg_no' ? { borderColor: 'red' } : {}}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full" onClick={(e) => handleNext(e)}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
