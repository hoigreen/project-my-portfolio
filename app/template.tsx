'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollProcess } from '@/hooks/useScrollProcess'

const variants = {
  hidden: { opacity: 1 },
  enter: { opacity: 0 },
}

const Template = ({ children }: { children: React.ReactNode }) => {
  const { completion } = useScrollProcess()

  return (
    <>
      <motion.main
        variants={variants}
        initial='enter'
        animate='hidden'
        transition={{ type: 'linear', delay: 0.15, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'
      >
      </span>

      <div className='h-[3000px]'></div>
    </>
  )
}

export default Template