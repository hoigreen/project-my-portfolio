'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
      {links.map(link =>
        <Link
          href={link.path}
          className={`${linkStyles}`}
        >
          {link.name}
        </Link>
      )
      }
    </nav >
  )
}

export default Navbar