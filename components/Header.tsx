import Logo from "./nav/Logo"
import MobileNavbar from "./nav/MobileNavbar"
import Navbar from "./nav/Navbar"
import { ThemeToggler } from "./theme/ThemeToggler"

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles=""
              underlineStyles=""
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header