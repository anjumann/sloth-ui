import Image from 'next/image'
import React from 'react'
import user from "@/assets/user.png"
const Testimonials = () => {
  return (
    <div className=' w-full mx-auto py-28 px-12  bg-slate-100/75 ' >
      <div className="eyebrow-text mb-6 mx-auto">
        Testimonials
      </div>
      <div className="flex flex-col gap-y-7">
        <div className="text-center font-semibold text-4xl mx-auto   ">
          As a lazy entrepreneur who got out of bed at 11, I managed to build my SaaS MVP with slothUI in 3 days. Never looked back since then.
        </div>
        <div className="text-center ">
          <div className="w-fit  mx-auto ">
            <Image src={user} alt="" />
          </div>
          <div className="mt-1 font-bold">Azunyan U. Wu</div>
          <div className="">CEO, fintechwin.ai</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials