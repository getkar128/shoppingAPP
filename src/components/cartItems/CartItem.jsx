import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../redux/features/cartSlice"
import Rating from "../shared/Rating"


const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <img src={cartItem.image} width={200} height={200} className="size-[100px] rounded-md object-cover" alt="" />
            <div className="flex-1 flex flex-col gap-2 sm:gap-10 items-center sm:flex-row sm:justify-between">
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="text-center sm:text-left text-sm sm:text-lg font-semibold leading-[140%] line-clamp-1">{cartItem?.title}</h2>
                    <Rating rating={cartItem?.rating} review={cartItem?.review} />
                    <p className="text-sm sm:text-base font-medium mt-1">₹{cartItem?.price} <span className="text-secondary-text line-through font-normal">₹{cartItem?.discountedPrice}</span></p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="size-8 bg-dark-2 grid place-items-center rounded-full cursor-pointer" onClick={() => dispatch(removeFromCart(cartItem))}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div className="size-8 grid place-items-center rounded-full">
                        {cartItem?.quantity}
                    </div>
                    <div className="size-8 bg-dark-2 grid place-items-center rounded-full cursor-pointer" onClick={() => dispatch(addToCart(cartItem))}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem