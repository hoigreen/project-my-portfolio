import { RiArrowDownSLine } from 'react-icons/ri'

export default function Home() {
  return (
    <main className="">
      <section className="py-12 xl:py-23 h-[84vh] xl:pt-28 bg-home bg-no-repeat bg-cover bg-bottom dark:bg-none">
        <div className="container mx-auto">
          <div className='flex justify-between gap-x-8'>
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
