import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'

const Cta = () => {
  return (
    <section className="py-24 bg-green-50 dark:bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 text-center mb-12">
            Ready to elevate your digital experience?
          </h2>

          <p className="subtitle text-center">Let&apos;s collaborate on innovative software solutions that drive results. Whether you have a specific project in mind or just want to explore the possibilities, I&apos;m here to help. Contact me to start the conversation.
          </p>

          <Link href='/contact'>
            <Button>Contact me for work <Send size={24} className='ml-2' /></Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta