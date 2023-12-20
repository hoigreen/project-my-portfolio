import { RiArrowDownSLine } from 'react-icons/ri'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="container mx-auto">
          <div>
            Text
          </div>

          <div>Text</div>

          <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary' />
          </div>
        </div>
      </section>
    </main>
  )
}
