import { dictionary } from '@/lib/contents'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ lang }: { lang: string }) => {
  return (
    <Link href='/'>
      <Image
        src='/logo.png'
        width={100}
        height={40}
        alt={dictionary[lang]?.logoImageAlt}
      />
    </Link>
  )
}

export default Logo