import { useDispatch, useSelector } from "react-redux"
import { dispatchCartItems, selectCart } from "../../redux/features/cartSlice"
import { useMemo } from "react"
import { toast } from "react-toastify"


const Summary = () => {

    const { cart } = useSelector(selectCart)

    const dispatch = useDispatch()

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => {
            return acc + (item?.price * item?.quantity)
        }, 0)
    }, [cart])

    return (
        <div className="flex flex-col gap-4">
            <h3 className='h1-bold'>Summary</h3>
            <div className="text-secondary-text">
                <div className="flex justify-between">
                    <h4>Subtotal</h4>
                    <h4>₹{totalPrice}</h4>
                </div>
            </div>
            <div className="text-secondary-text">
                <div className="flex justify-between">
                    <h4>Shipping Fees</h4>
                    <h4>₹0.00</h4>
                </div>
            </div>
            <div className="text-secondary-text">
                <div className="flex justify-between">
                    <h4>Estimated Total</h4>
                    <h4>₹{totalPrice}</h4>
                </div>
            </div>
            <div className="mt-4 sm:w-1/2 text-center rounded-xl cursor-pointer bg-btn-1 py-2 font-semibold" onClick={() => {
                dispatch(dispatchCartItems({ cart }))
                toast.success('Successfully Purchased!')
            }}>
                Checkout
            </div>
        </div>
    )
}

export default Summary