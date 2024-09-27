import { Link } from "react-router-dom"
import MobileNav from "../MobileNav/MobileNav"
import MainNav from "../MainNav/MainNav"

const Header = () => {
  return (
    <div className="border-b-2 border-b-sky-900 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-sky-900">
                Predict Beta
            </Link>

            <div className="md:hidden">
              <MobileNav/>
            </div>

            <div className="hidden md:block">
              <MainNav title="Log In" />
              <MainNav title = "Create Account" />
            </div>
        </div>
    </div>
  )
}

export default Header