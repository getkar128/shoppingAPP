import { featuredDeals } from "../../constants"
import CategoryCard from "./CategoryCard"


const FeaturedDeal = () => {
    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {featuredDeals.map((item, index) => (
                <CategoryCard key={index} item={item} />
            ))}
        </div>
    )
}

export default FeaturedDeal