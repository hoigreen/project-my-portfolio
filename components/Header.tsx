'use client'

import { useEffect, useState } from "react"
import Logo from "./nav/Logo"
import MobileNavbar from "./nav/MobileNavbar"
import Navbar from "./nav/Navbar"
import { ThemeToggler } from "./theme/ThemeToggler"
import { usePathname } from "next/navigation"

const Header = ({ lang }: { lang: string }) => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const scrollPos = () => window.scrollY >= 50 ? setHeader(true) : setHeader(false)

    window.addEventListener("scroll", scrollPos)

    return () => window.removeEventListener('scroll', scrollPos)
  }, [])

  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#e6f3da]'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo lang={lang} />

          <div className="flex items-center gap-x-6">
            <Navbar
              lang={lang}
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full rounded-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header