import Image from "next/image"

import logo from '@/assets/logo.png'
import { Bell, ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"


const MenuList = ["Home", "Product", "Dashboard"]
export default function Header() {
  return (
    <header className='py-4 flex items-center justify-between mx-32'>
      <div className="flex items-center justify-between gap-x-6 font-semibold ">
        {
          MenuList.map((item, idx) => {
            return (
              <div key={idx} >
                {item}
              </div>
            )
          })
        }
      </div>
      <div className="">
        <Image src={logo} width={100} height={100} alt="" />
      </div>
      <div className="flex items-center justify-between gap-x-3 ">
          <Bell />
          <ShoppingCart />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button className=" bg-[#4F46E5] hover:bg-[#312c8b] " > Go Pro Today </Button>
      </div>
    </header>
  )
}
