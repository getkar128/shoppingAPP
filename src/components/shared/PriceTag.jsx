

const PriceTag = ({ actualPrice, discountedPrice }) => {
    return (
        <div className="mt-2">
            <p className="h1-bold">₹{discountedPrice} <span className="text-base font-normal text-secondary-text">M.R.P: <span className="line-through">₹{actualPrice}</span></span></p>
        </div>
    )
}

export default PriceTag