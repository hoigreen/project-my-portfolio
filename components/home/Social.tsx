'use client'
import Link from 'next/link'
import React from 'react'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri'

interface SocialProps {
  containerStyles: string,
  iconStyles: string
}

const icons = [
  {
    path: '/',
    name: <RiFacebookFill />
  },
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiYoutubeFill />
  },
  {
    path: '/',
    name: <RiInstagramFill />
  }
]

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, i) =>
        <Link key={i} href={icon.path} target="_blank">
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      )}
    </div>
  )
}

export default Social