import Image from 'next/image'
import React from 'react'

interface MyImageProps {
  containerStyle: string,
  imageSrc: string
}

const MyImage = (props: MyImageProps) => {
  const { containerStyle, imageSrc } = props
  return (
    <div className={`overflow-hidden ${containerStyle}`}>
      <Image src={imageSrc} fill priority className="z-50" alt='hoigreen' />
    </div>
  )
}

export default MyImage