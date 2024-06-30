import { useSelector } from "react-redux"
import { selectCart } from "../../redux/features/cartSlice"
import CartItem from "./CartItem"
import Shipping from "./Shipping"
import Summary from "./Summary"


const CartItems = () => {

    const { cart } = useSelector(selectCart)

    return (
        <div className="flex flex-col gap-10">
            {cart?.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Shipping />
            <Summary />
        </div>
    )
}

export default CartItems