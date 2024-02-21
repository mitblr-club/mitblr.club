import { Card } from "./ui/card"

export default function StepBar({ step }: { step: number }) {
  return (
    <Card>
        <div className="flex justify-between items-center p-3 bg-accent">
            <div className="flex items-center gap-6 md:gap-10 text-md md:text-lg lg:text-xl xl:text-sm">
            <div className="rounded-md text-black flex items-center justify-center p-2"
            style={step === 1 ? {backgroundColor: 'hsl(266, 72%, 70%)',color: 'white', fontWeight: 'bold'} : {}}
            >
                Personal
            </div>
            <div className="rounded-md text-black flex items-center justify-center p-2"
            style={step === 2 ? {backgroundColor: 'hsl(266, 72%, 70%)',color: 'white', fontWeight: 'bold'} : {}}
            >
                Hostel 
            </div>
            <div className="rounded-md text-black flex items-center justify-center p-2"
            style={step === 3 ? {backgroundColor: 'hsl(266, 72%, 70%)',color: 'white', fontWeight: 'bold'} : {}}
            >
                Course 
            </div>
            </div>
        </div>
    </Card>
  )
}