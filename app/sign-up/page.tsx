"use client"

import { useRouter } from "next/navigation"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import StepBar from "@/components/stepbar"

import Link from "next/link"

export default function Login(){

  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(event: any){
    event.preventDefault()
    if(username === "" || password === ""){
      alert("Please fill in all fields")
      return
    }
    console.log(username, password)
    router.push("/dash")
  }

  return(
    <div className="h-screen w-screen flex flex-col gap-20 justify-center items-center">

      <div className="flex flex-col md:flex-row">
        <div className="text-center text-5xl font-bold lg:text-8xl xl:text-7xl px-8 py-4 border-0 md:border-r-4 md:border-slate-400">mitblr<span className="text-primary">.club</span></div>
        <div className="font-extralight sm:text-xs md:text-2xl lg:text-4xl px-8 py-4 text-center"><span className="font-medium">One ecosystem,</span><br/><span className="text-primary font-medium">for all clubs.</span></div>
      </div>

        <div>
      <Card className="w-fit md:w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Where every book is just a tap away.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="Your Username" 
              onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Your Password" 
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full"
        onClick={(e)=>handleLogin(e)}
        >Login</Button>
        <Link href="/sign-up">
          <Button variant="link">Don&apos;t have an account? Sign up</Button>
        </Link>
      </CardFooter>
    </Card>
    </div>

    <div>
        <StepBar currentStep={2} />
    </div>

    </div>
  )
}