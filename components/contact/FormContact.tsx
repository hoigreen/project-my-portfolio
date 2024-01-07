'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { MailIcon, MessageCircleIcon, Send, User } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useForm, ValidationError } from '@formspree/react';
import { getI18n } from '@/locales/server'
import { usePathname } from 'next/navigation'

const FormContact = () => {
  const [locale, setLocale] = useState<string>('en')
  const [state, handleSubmit] = useForm("mkndnepw");
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) setLocale(pathname.substring(1, 3))
  }, [])


  useEffect(() => {
    if (state.succeeded)
      window.location.reload()
  }, [state])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 mt-16 xl:mt-0">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        {locale === "en" ? 'Contact Form' : 'Liên hệ với tớ qua biểu mẫu'}
      </h2>

      <div className="relative flex items-center">
        <Input type='name' id='name' name='name' placeholder={locale === "en" ? 'Input your name ...' : 'Điền vào tên của bạn ...'} required />
        <User size={18} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Input type='email' id='email' name='email' placeholder={locale === "en" ? 'Input your email address ...' : 'Điền vào địa chỉ email ...'} required />
        <MailIcon size={18} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Textarea rows={12} spellCheck id='message' name='message' placeholder={locale === "en" ? 'Input your message ...' : 'Thông điệp của bạn ...'} required />
        <MessageCircleIcon size={18} className="absolute top-3 right-6" />
      </div>

      <Button className="flex items-center gap-x-2 max-w-[166px] mx-auto xl:ml-auto">
        {locale === "en" ? 'Send to me' : 'Gửi cho tớ'}
        <Send size={18} />
      </Button>
    </form>
  )
}

export default FormContact