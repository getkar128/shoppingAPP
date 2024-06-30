import { NavLink } from "react-router-dom"
import { mobileNavbar } from "../../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartItemsNumber from "./CartItemsNumber"
import { useSelector } from "react-redux"
import { selectCart } from "../../redux/features/cartSlice"


const Footer = () => {

    const { cart } = useSelector(selectCart)

    return (
        <div className="sticky bg-dark-1 bottom-0 p-2 lg:hidden flex justify-between items-center">
            {mobileNavbar.map((item, index) => (
                <NavLink key={item.title} to={item.navigate} className={({ isActive }) => `${isActive && 'bg-dark-2'} flex flex-col gap-1 items-center px-3 py-2 rounded-lg relative`}>
                    <FontAwesomeIcon icon={item.icon} className="text-xl" />
                    <p className="text-xs">{item.title}</p>
                    {index === 1 && <CartItemsNumber cart={cart} />}
                </NavLink>
            ))}
        </div>
    )
}

export default Footer