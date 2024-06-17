"use client"

import { useTheme } from "next-themes"
import {FiMoon, FiSun} from 'react-icons/fi'
import { useEffect, useState } from "react"

export default function ThemeToggle() {

  


  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <div className="p-1.5 text-lg cursor-pointer " onClick={handleThemeChange} >
        {theme === "dark" ? (
          <span>
            <FiSun className='text-gray-100' />
          </span>
        ) : (
          <span>
            <FiMoon className='text-gray-700' />
          </span>
        )}
      </div>
    </>
  )

}
