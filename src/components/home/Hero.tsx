import Image from 'next/image'
import React from 'react'
import dashboard from "@/assets/Dashboard.png"
import { Button } from '../ui/button'
import { HardDriveDownload, LogIn, MoveRight } from 'lucide-react'
const Hero = () => {
  return (
    <div className=' w-fit mx-auto 
    ' >
      <div className=" pt-16 lg:pt-28"></div>
      <div className="eyebrow-text mb-6 mx-auto">
        A Design Breakthrough
      </div>
      <div className="flex flex-col gap-y-7">
        <div className="text-center text-3xl lg:text-5xl font-bold w-3/5 lg:w-2/5 mx-auto   ">
          The World's Laziest
          Design System.
        </div>
        <div className="w-2/3 mx-auto text-center">
          Introducing SlothUI, the design system tailored for entrepreneurs who prefer taking it easy. Say goodbye to lengthy design processes and hello to efficient  development.
        </div>
        <div className="mx-auto w-fit flex flex-col md:flex-row gap-3">
          <Button variant="outline" >  <HardDriveDownload className='mr-2' size={16} /> Download Free  <MoveRight className='ml-2' size={16} /> </Button>
          <Button className=' '>  <LogIn className='mr-2' size={16} /> Sign In Today  <MoveRight className='ml-2' size={16} /> </Button>
        </div>
      </div>
      <div className="mt-4">
        <Image src={dashboard} width={1300} height={1300} alt="" />
      </div>
    </div>
  )
}

export default Hero