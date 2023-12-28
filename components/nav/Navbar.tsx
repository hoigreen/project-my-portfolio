'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import React from 'react'
import { links } from '@/lib/datas/nabar-links'
import { Switch } from '../locale/SwitchLanguage'

interface NavbarProps {
  locale: string,
  containerStyles: string,
  linkStyles: string,
  underlineStyles?: string,
}

const Navbar = ({ locale, containerStyles, linkStyles, underlineStyles }: NavbarProps) => {
  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      <Switch />
      {links[locale]?.map((link, index) =>
        <Link
          href={link.path}
          key={index}
          className={`${linkStyles}`}
        >
          {link.path === path &&
            <motion.main
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'linear' }}
              layoutId='underline'
              className={`${underlineStyles}`}
            />
          }
          {link.name}
        </Link>
      )
      }
    </nav >
  )
}

export default Navbar