import { NavLink } from "react-router-dom"
import { navMenu } from "../../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { selectCart } from "../../redux/features/cartSlice"
import CartItemsNumber from "./CartItemsNumber"

const Navbar = () => {

    const { cart } = useSelector(selectCart)

    const login = <NavLink to={'/login'} className='bg-dark-2 text-sm px-3 py-1 rounded-lg hover:opacity-60'>Login</NavLink>
    return (
        <nav className="">
            <div className="hidden lg:flex items-center gap-2">
                {navMenu.map((item, index) => (
                    <NavLink key={index} to={item.navigate} className={({ isActive }) => `${isActive && 'bg-dark-2'} text-sm px-2 py-1 rounded-md hover:bg-dark-2`}>
                        {item.title}
                    </NavLink>
                ))}
                <NavLink to={'/cart'} className='bg-btn-1 text-sm px-3 py-1 rounded-lg hover:opacity-60 relative'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <CartItemsNumber cart={cart} />
                </NavLink>
                {login}
            </div>
            <div className="lg:hidden flex items-center gap-2">
                {login}
            </div>
        </nav>
    )
}

export default Navbar