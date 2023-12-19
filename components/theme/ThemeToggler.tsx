'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button className='bg-transparent hover:bg-transparent outline-none' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <SunIcon className='text-gray-700 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='text-white absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </Button>
  )
}
