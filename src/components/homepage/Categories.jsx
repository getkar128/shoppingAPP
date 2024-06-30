import { categories } from "../../constants"
import CategoryCard from "./CategoryCard"


const Categories = () => {
    return (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5">
            {categories.map((item, index) => (
                <CategoryCard key={index} item={item} />
            ))}
        </div>
    )
}

export default Categories