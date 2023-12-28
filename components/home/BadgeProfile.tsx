'use client'
import React, { ReactElement } from 'react'
import CountUp from 'react-countup'

interface BadgeProps {
  containerStyles?: string,
  icon: ReactElement,
  endCountNum: number,
  endCountText?: string,
  badgeText?: string
}

const BadgeProfile = (props: BadgeProps) => {
  return (
    <div className={`badge ${props.containerStyles}`}>
      <div className="text-3xl text-primary">{props.icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl leading-none text-primary font-bold'>
          <CountUp end={props.endCountNum} delay={1} duration={4} />
          {props.endCountText}
        </div>

        <div className='max-w-[80px] text-[16px] font-medium text-black'>{props.badgeText}</div>
      </div>
    </div>
  )
}

export default BadgeProfile