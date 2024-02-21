'use client';

import { useState } from 'react';

import CourseForm from '@/components/courseForm';
import HostelForm from '@/components/hostelForm';
import PersonalForm from '@/components/personalform';
import StepBar from '@/components/stepbar';

export default function SignUp() {
  // Step Count
  const [step, setStep] = useState(1);

  // Personal Form Props
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [appNo, setAppNo] = useState('');
  const [regNo, setRegNo] = useState('');

  // Hostel Form Props
  const [hostelStatus, setHostelStatus] = useState('Hostel - On Campus');
  const [messStatus, setMessStatus] = useState('Fixed - BlueDove');

  // Course Form Props
  const [course, setCourse] = useState('CSE(Core)');
  const [gradYear, setGradYear] = useState('2025');

  return (
    <div className="flex flex-col items-center justify-around gap-16 px-0 py-10">
      <div className="flex flex-col md:flex-row">
        <div className="border-0 px-0 py-4 text-center text-5xl font-bold md:px-8 lg:text-8xl xl:text-7xl">
          mitblr<span className="text-primary">.club</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        {step === 1 ? (
          <PersonalForm
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
            appNo={appNo}
            setAppNo={setAppNo}
            regNo={regNo}
            setRegNo={setRegNo}
            step={step}
            setStep={setStep}
          />
        ) : step === 2 ? (
          <HostelForm
            hostelStatus={hostelStatus}
            setHostelStatus={setHostelStatus}
            messStatus={messStatus}
            setMessStatus={setMessStatus}
            step={step}
            setStep={setStep}
          />
        ) : step === 3 ? (
          <CourseForm
            course={course}
            setCourse={setCourse}
            gradYear={gradYear}
            setGradYear={setGradYear}
          />
        ) : null}
        <StepBar step={step} />
      </div>
    </div>
  );
}
