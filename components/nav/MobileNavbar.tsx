import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Navbar from './Navbar'
import Social from '../home/Social'

const MobileNavbar = ({ locale }: { locale: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col justify-between h-full '>
          <div className='flex flex-col items-center gap-y-8'>
            <Logo />
            <Navbar
              locale={locale}
              containerStyles='flex w-full flex-col items-end gap-y-6'
              linkStyles='text-lg py-4 w-full text-right'
            />
          </div>
          <Social
            containerStyles='flex justify-center gap-x-4'
            iconStyles='text-2xl'
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar