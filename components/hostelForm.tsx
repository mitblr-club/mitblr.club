import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

import StepBar from "./stepbar"

export default function HostelForm(
    {hostelStatus, setHostelStatus,
    messStatus, setMessStatus,
    step, setStep}:
    {hostelStatus:string, setHostelStatus:Function,
    messStatus:string, setMessStatus:Function,
    step:number, setStep:Function}
    ){

        function handleLogin(event: any){
            event.preventDefault()
            setStep(3)
            console.log("Hostel Status: ",hostelStatus)
            console.log("Mess Status: ",messStatus)
        }

    return(
    <Card className="h-fit w-fit md:w-[400px]">
      <CardHeader>
        <CardTitle>Hostel Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-10">
            <div className="flex flex-col gap-4">
              <Label htmlFor="hostel" className="text-lg">Hosteler/Day Scholar*</Label>
                <Select>
                    <SelectTrigger className="w-fit">
                        <SelectValue placeholder="Hostel - On Campus"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="Hostel - On Campus"
                        onChange={(e) => setHostelStatus("Hostel - On Campus")}
                        >Hostel - On Campus</SelectItem>
                        <SelectItem value="Hostel - Off Campus"
                        onChange={(e) => setHostelStatus("Hostel - Off Campus")}
                        >Hostel - Off Campus</SelectItem>
                        <SelectItem value="Day Scholar"
                        onChange={(e) => setHostelStatus("Day Scholar")}
                        >Day Scholar</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="mess" className="text-lg">Mess*</Label>
                <Select>
                    <SelectTrigger className="w-fit">
                        <SelectValue placeholder="Fixed - BlueDove" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="Fixed - Blue Dove"
                        onChange={(e) => setMessStatus("Fixed - Blue Dove")}
                        >Fixed - Blue Dove</SelectItem>
                        <SelectItem value="Fixed - Chef&apos; Touch"
                        onChange={(e) => setMessStatus("Fixed - Chef's Touch")}
                        >Fixed - Chef&apos; Touch</SelectItem>
                        <SelectItem value="Variable -  Blue Dove"
                        onChange={(e) => setMessStatus("Variable - Blue Dove")}
                        >Variable -  Blue Dove</SelectItem>
                        <SelectItem value="Variable - Chef&apos; Touch"
                        onChange={(e) => setMessStatus("Variable - Chef's Touch")}
                        >Variable - Chef&apos; Touch</SelectItem>
                        <SelectItem value="No Mess Card"
                        onChange={(e) => setMessStatus("No Mess Card")}
                        >No Mess Card</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex justify-around w-full">
        <Button variant="secondary">
            Back
        </Button>
        <Button
        onClick={(e)=>handleLogin(e)}
        >Next
        </Button>
        </div>
      </CardFooter>
    </Card>
    )
}