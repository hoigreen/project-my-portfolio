'use client'

import { useEffect, useState } from "react"
import Logo from "./nav/Logo"
import MobileNavbar from "./nav/MobileNavbar"
import Navbar from "./nav/Navbar"
import { ThemeToggler } from "./theme/ThemeToggler"
import { Switch } from "./locale/SwitchLanguage"

const Header = ({ locale }: { locale: string }) => {
  const [header, setHeader] = useState(false)

  useEffect(() => {
    const scrollPos = () => window.scrollY >= 50 ? setHeader(true) : setHeader(false)

    window.addEventListener("scroll", scrollPos)

    return () => window.removeEventListener('scroll', scrollPos)
  }, [])

  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all bg-[#e6f3da]`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-4">
            <Navbar
              locale={locale}
              containerStyles="hidden xl:flex gap-x-8 items-center px-8"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full rounded-full"
            />
            <Switch locale={locale} />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNavbar locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header