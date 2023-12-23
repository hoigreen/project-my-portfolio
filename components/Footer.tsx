import Social from "./home/Social"

const Footer = () => {
  return (
    <footer className="pt-12">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-between">
          <Social
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-12"
            iconStyles="text-primary text-[20px] hover:text-gray-700 dark:hover:text-white transition-all"
          />

          <div className="text-muted-foreground absolute bottom-0">
            HoiGreen - Truong Quoc Hoi
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer