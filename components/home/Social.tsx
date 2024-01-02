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
    path: 'https://www.facebook.com/hoigreen/',
    name: <RiFacebookFill />
  },
  {
    path: 'https://www.linkedin.com/in/hoigreen/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/hoigreen',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.youtube.com/channel/UCMMfe2g7nxbxou-Unb9n5qw',
    name: <RiYoutubeFill />
  },
  {
    path: 'https://www.instagram.com/hoigreen/',
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