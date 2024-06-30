

const CartItemsNumber = ({ cart }) => {
    return (
        <>
            {cart.length > 0 && <div className="size-4 absolute bg-green-700 rounded-full -right-1.5 -top-1.5 grid place-items-center text-xs">
                {cart?.length}
            </div>}
        </>
    )
}

export default CartItemsNumber