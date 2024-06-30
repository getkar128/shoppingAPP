import { useSelector } from "react-redux"
import { selectProducts } from "../../redux/features/productSlice"
import ProductCard from "./ProductCard"


const ProductsList = () => {

    const { products } = useSelector(selectProducts)

    return (
        <div className="grid gap-2 md:gap-3 grid-cols-1 sm:grid-cols-2 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsList