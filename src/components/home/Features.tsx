import Image from 'next/image'
import React from 'react'
import features from "@/assets/Freatures.png"
import { Check } from 'lucide-react';
const Features = () => {
  return (
    <div className='grid grid-cols-2 p-28 bg-slate-100/75 place-items-center ' >
      <div className="">
        <div className="eyebrow-text">
          Features
        </div>
        <div className="sub-heading-text my-4">
          Lorem ipsum dolor sit amet consectetur.
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <div className="font-light ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque, accusantium velit praesentium totam, voluptatum quasi, tempora eum accusamus sunt culpa vel
          <div className="my-8 flex flex-col gap-y-4 ">
            <div className='flex gap-x-2 items-center justify-start ' > <div className="w-fit rounded-full text-[#4F46E5] bg-[#d7d5f733] p-2.5"> <Check /> </div> Lorem ipsum dolor sit check list 1 </div>
            <div className='flex gap-x-2 items-center justify-start ' > <div className="w-fit rounded-full text-[#4F46E5] bg-[#d7d5f733] p-2.5"> <Check /> </div> Lorem ipsum dolor sit check list 2 </div>
            <div className='flex gap-x-2 items-center justify-start ' > <div className="w-fit rounded-full text-[#4F46E5] bg-[#d7d5f733] p-2.5"> <Check /> </div> Lorem ipsum dolor sit check list 3 </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-end items-end ">
        <Image src={features} alt="" className=' h-full ' />
      </div>
    </div>
  )
}

export default Features