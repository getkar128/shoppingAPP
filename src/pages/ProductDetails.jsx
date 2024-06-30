import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { selectProducts } from "../redux/features/productSlice"
import { useEffect, useState } from "react"
import Rating from "../components/shared/Rating"
import PriceTag from "../components/shared/PriceTag"
import { addToCart } from "../redux/features/cartSlice"


const ProductDetails = () => {

    const { id } = useParams()
    const { products } = useSelector(selectProducts)

    const [ productDetail, setProductDetail ] = useState({})
    const [ error, setError ] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const product = products.filter((product) => product.id == id)
        if (product.length === 0) {
            return setError(true)
        }
        setProductDetail(product[0])
    }, [id, products])

    if (error){
        return <div className="flex-1 grid place-items-center text-xl font-semibold text-red-600">
            Something Went Wrong! Try Again!
        </div> 
    }

    const addItemsToCart = () => {
        dispatch(addToCart(productDetail))
    }

    const buyNow = () => {
        addItemsToCart()
        navigate('/cart')
    }
    
    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <img src={productDetail?.image} className="w-1/2 h-auto rounded-xl" alt="" />
                <div className="flex-1">
                    <h1 className="h1-bold">{productDetail?.title}</h1>
                    <div className="mt-1">
                        <Rating rating={productDetail?.rating} review={productDetail?.review} />
                    </div>
                    <PriceTag actualPrice={productDetail?.discountedPrice} discountedPrice={productDetail?.price}/>
                    <div className="flex gap-2 mt-4">
                        <div className="bg-btn-1 py-2 px-4 rounded-md cursor-pointer" onClick={addItemsToCart}>
                            Add To Cart
                        </div>
                        <div className="bg-dark-2 py-2 px-4 rounded-md cursor-pointer" onClick={buyNow}>
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
            <ul className="mt-5">
                {productDetail?.description?.split('\n')?.map((item, index) => (
                    <li key={index} className="text-secondary-text">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductDetails