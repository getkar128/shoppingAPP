import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectProducts } from "../redux/features/productSlice"
import ProductsList from "../components/category/ProductsList"


const Category = () => {

    const { loading, error } = useSelector(selectProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading){
        return <div className="flex-1 grid place-items-center text-xl font-semibold">
            Loading...
        </div>
    }

    if(error){
        return <div className="flex-1 grid place-items-center text-xl font-semibold text-red-600">
            Something Went Wrong! Try Again!
        </div> 
    }
    
    return (
        <div className="flex-1">
            <ProductsList />
        </div>
    )
}

export default Category