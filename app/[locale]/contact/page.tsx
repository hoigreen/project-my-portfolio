import FormContact from '@/components/contact/FormContact'
import { getI18n } from '@/locales/server'
import { MailIcon, PhoneCall } from 'lucide-react'
import React from 'react'

const Contact = async () => {
  const t = await getI18n()

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">{t('contactHeader')}</h2>

        <div className='grid xl:grid-cols-2 pt-12 gap-4'>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-lg mb-4">
              <span className='w-[20px] h-[2px] bg-primary'></span>
              <div>{t('contactHello')}, <span className='text-2xl font-bold text-primary'>{t('hoigreen')}</span></div>
            </div>

            <h1 className="h1 max-w-lg mb-8">{t('contactTitle')}</h1>

            <p className="subtitle max-w-[400px]">{t('contactDescription')}</p>
          </div>

          <div className="hidden xl:flex w-full bg-contact_illustration_light bg-contain bg-center bg-no-repeat"></div>
        </div>

        <div className='grid xl:grid-cols-2 mb-24 xl:mb-48'>
          <div className='flex flex-col gap-y-4 xl:gap-y-12 xl:mb-24 text-base xl:text-lg'>
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} />
              <div>hoi.truongquoc107@gmail.com</div>
            </div>

            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} />
              <div>(+84) 343 694 755</div>
            </div>
          </div>

          <FormContact />
        </div>
      </div>
    </section>
  )
}

export default Contact