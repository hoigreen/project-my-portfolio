import React from 'react'
import { Input } from '../ui/input'
import { MailIcon, MessageCircleIcon, Send, User } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const FormContact = () => {
  return (
    <form className="flex flex-col gap-y-4 mt-16 xl:mt-0">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Contact form</h2>

      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder="Input your name ..." />
        <User size={18} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Input type='email' id='email' placeholder="Input your email address ..." />
        <MailIcon size={18} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Textarea rows={12} spellCheck id='message' placeholder="Input your message ..." />
        <MessageCircleIcon size={18} className="absolute top-3 right-6" />
      </div>

      <Button className="flex items-center gap-x-2 max-w-[166px] mx-auto xl:ml-auto">
        Send to me
        <Send size={18} />
      </Button>
    </form>
  )
}

export default FormContact