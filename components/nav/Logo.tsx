import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/logo.svg'
        width={54}
        height={54}
        alt='Logo of my portfolio page'
      />
    </Link>
  )
}

export default Logo