import React from 'react'

import planetX from "@/assets/partners/planetX.png"
import linez from "@/assets/partners/linez.png"
import pwrup from "@/assets/partners/pwrup.png"
import blox from "@/assets/partners/blox.png"
import Image from 'next/image'



const Partners = () => {
  return (
    <div className='py-28 px-12 bg-slate-100/75 ' >
      <div className="text-center">
        Trusted By 100+ Companies Worldwide.
      </div>
      <div className="flex flex-wrap mx-auto w-8/12 my-10 justify-between gap-y-4 ">
        <Image src={planetX} width={150} height={120} alt="" />
        <Image src={linez} width={120} height={120} alt="" />
        <Image src={pwrup} width={150} height={120} alt="" />
        <Image src={blox} width={120} height={120} alt="" />
      </div>
    </div>
  )
}

export default Partners