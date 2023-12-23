import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Download, Send } from 'lucide-react'
import Social from './Social'
import BadgeProfile from './BadgeProfile'
import { RiArrowDownSLine, RiBook2Fill, RiBriefcase4Fill } from 'react-icons/ri'
import MyImage from './MyImage'

const Profile = () => {
  return (
    <section className="py-12 xl:py-23 h-[84vh] xl:pt-28 bg-home bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Fullstack Web Developer</div>
            <h1 className='h1 mb-4'>Hello, my name is Truong Quoc Hoi</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mb-0 xl:mx-0 pb-4'>dsiofdsfisd dsofidsfsoi sdasdasd foifsdoi sfsdoifdiso sdfosdifsdio</p>

            <div className='flex flex-col gap-3 md:flex-row mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>Contact for work <Send size={16} /></Button>
              </Link>
              <Link href='/cv/CV - TruongQuocHoi - Fullstack Web Developer.pdf' target='_blank'>
                <Button variant='secondary' className='gap-x-2'>Get my CV <Download size={16} /></Button>
              </Link>
            </div>

            <Social
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconStyles='text-foreground text-[22px] hover: text-primary transition-all'
            />
          </div>


          <div className='hidden xl:flex relative'>
            <BadgeProfile
              containerStyles='absolute top-[12%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={0.5}
              badgeText='Year of Experience'
            />

            <BadgeProfile
              containerStyles='absolute top-[76%] -right-[5rem]'
              icon={<RiBook2Fill />}
              endCountNum={4}
              badgeText='Years in University'
            />

            <div className='bg-home_shape2_light dark:bg-home_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
            </div>

            <MyImage
              containerStyle='bg-home_shape shape w-[510px] h-[462px] bg-no-repeat'
              imageSrc='/home/developer.png'
            />
          </div>
        </div>

        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}

export default Profile