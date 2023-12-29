import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { getI18n } from '@/locales/server'

const Cta = async () => {
  const t = await getI18n()
  return (
    <section className="py-24 bg-green-50 dark:bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 text-center mb-12">
            {t('ctaHeader')}
          </h2>

          <p className="subtitle text-center">{t('ctaDescription')}</p>

          <Link href='/contact'>
            <Button>{t('ctaButton')} <Send size={24} className='ml-2' /></Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta