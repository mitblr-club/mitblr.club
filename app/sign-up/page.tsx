"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import StepBar from "@/components/stepbar"
import PersonalForm from "@/components/personalform"
import HostelForm from "@/components/hostelForm"

export default function Login(){

  // Step Count
  const [step, setStep] = useState(1)

  // Personal Form Props
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [appNo, setAppNo] = useState("")
  const [regNo, setRegNo] = useState("")

  // Hostel Form Props
  const [hostelStatus, setHostelStatus] = useState("Hostel - On Campus")
  const [messStatus, setMessStatus] = useState("Fixed - BlueDove")

  return(
    <div className="flex flex-col justify-around items-center gap-16 px-0 py-10">

      <div className="flex flex-col md:flex-row">
        <div className="text-center text-5xl font-bold lg:text-8xl xl:text-7xl px-0 md:px-8 py-4 border-0 md:border-r-4 md:border-slate-400">mitblr<span className="text-primary">.club</span></div>
        <div className="text-xs md:text-2xl lg:text-4xl px-0 md:px-8 py-4 text-center font-medium">One ecosystem,<br/><span className="text-primary">for all clubs.</span></div>
      </div>

      <div className="flex flex-col gap-1 items-center">
        {
          step === 1 ? 
          <PersonalForm 
          name={name} setName={setName}
          number={number} setNumber={setNumber}
          appNo={appNo} setAppNo={setAppNo}
          regNo={regNo} setRegNo={setRegNo}
          step={step} setStep={setStep}
          />
          : step === 2 ?
          <HostelForm 
          hostelStatus={hostelStatus} setHostelStatus={setHostelStatus}
          messStatus={messStatus} setMessStatus={setMessStatus}
          step={step} setStep={setStep}
          />
          : null
        }
        <StepBar step={step}/>
      </div>

    </div>
  )
}