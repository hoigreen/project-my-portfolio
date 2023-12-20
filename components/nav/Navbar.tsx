'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import React from 'react'

interface NavbarProps {
  containerStyles: string,
  linkStyles: string,
  underlineStyles: string,
}

const links = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'My Projects' },
  { path: '/contact', name: 'Contact' },
]

const Navbar = ({ containerStyles, linkStyles, underlineStyles }: NavbarProps) => {
  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) =>
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