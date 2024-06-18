import React from 'react'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'

const Cta = () => {
  return (
    <div className=' w-full mx-auto p-28  bg-slate-100/75 ' >

      <div className="flex flex-col gap-y-7">
        <div className="text-center font-semibold text-4xl mx-auto   ">
          Start your free trial now.
        </div>
        <div className="w-3/6 mx-auto text-center">
        Volutpat commodo sed egestas egestas fringilla phasellus. Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius vel pharetra vel.
        </div>
        <div className="mx-auto w-fit flex gap-x-3">
          <Button variant="outline" >  Learn More <MoveRight className='ml-2' size={16} /> </Button>
          <Button className=' '>  Get Started  <MoveRight className='ml-2' size={16} /> </Button>
        </div>
      </div>
    </div>
  )
}

export default Cta