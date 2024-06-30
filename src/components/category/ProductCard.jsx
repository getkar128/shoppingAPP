/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Rating from "../shared/Rating"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/features/cartSlice"
import PriceTag from "../shared/PriceTag"


const ProductCard = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addItemToCart = (e) => {
        e.stopPropagation()
        dispatch(addToCart(product))
    }

    return (
        <div className="bg-dark-2 rounded-xl cursor-pointer" onClick={() => navigate(`/product-details/${product?.id}`)}>
            <div className="md:h-3/5">
                <img src={product?.image} className="h-full w-full object-cover object-center rounded-t-xl" alt="" />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold line-clamp-3">{product?.title}</h2>
                <div className="mt-1">
                    <Rating rating={product?.rating} review={product?.review} />   
                </div>
                <PriceTag actualPrice={product?.discountedPrice} discountedPrice={product?.price} />
                <div className="bg-btn-1 rounded-lg py-2 px-4 w-fit mt-3 cursor-pointer" onClick={addItemToCart}>
                    Add to cart
                </div>
            </div>
        </div>
    )
}

export default ProductCard