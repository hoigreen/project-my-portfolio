import type { Metadata } from 'next'
import { Playpen_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const playpenSans = Playpen_Sans({ weight: "400", subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'HoiGreen\'s Portfolio',
  description: 'Generated by NextJS 14',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}


const RootLayout = ({ children, params }: { children: React.ReactNode, params: { lang: string } }) => {
  return (
    <html
      lang='en'
      suppressContentEditableWarning
    >
      <head />
      <body className={playpenSans.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header lang={params.lang} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
