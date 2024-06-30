import { Outlet } from "react-router-dom"
import Header from "../shared/Header"
import Footer from "../shared/Footer"


const Layout = () => {
    return (
        <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1 w-full flex flex-col mx-auto max-w-3xl">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout