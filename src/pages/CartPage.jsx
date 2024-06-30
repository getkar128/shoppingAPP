import { useSelector } from "react-redux"
import { selectCart } from "../redux/features/cartSlice"
import CartItems from "../components/cartItems/CartItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"


const CartPage = () => {

    const { cart } = useSelector(selectCart)

    return (
        <div className="p-4 flex-1 flex flex-col">
            <h1 className="h1-bold mb-8">Shopping Cart</h1>
            {cart.length > 0 ? <CartItems /> : <div className="flex-1 flex flex-col justify-center items-center">
                <h2 className="text-lg text-secondary-text">No Items In Your Cart</h2>
                <FontAwesomeIcon icon={faShoppingCart} className="text-[150px] text-secondary-text mt-4" />
            </div>}
        </div>
    )
}

export default CartPage