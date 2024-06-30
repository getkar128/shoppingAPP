import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

const Header = () => {

    return (
        <div className="sticky w-full top-0 z-10 bg-dark-1 py-2 border-b ">
            <div className="max-w-6xl w-full mx-auto flex items-center px-2 gap-4">
                <div className="flex flex-1 items-center gap-4">
                    <Link to={'/'} className="hidden lg:block text-2xl font-bold">
                        Cosmic Cart
                    </Link>
                    <Link to={'/'} className="lg:hidden block text-2xl font-bold">
                        CC
                    </Link>
                    <div className="flex-1">
                        <SearchBar />
                    </div>
                </div>
                <Navbar />
            </div>
        </div>
    )   
}

export default Header