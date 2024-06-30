/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const CategoryCard = ({ item }) => {
    return (
        <Link to={`/categories/${item.link}`}>
            <div>
                <img src={item.image} className="mt-2 w-full h-auto object-cover overflow-hidden transition-transform hover:scale-105" alt="" />
                <p className="text-[13px] mt-1">{item.name}</p>
                <p className='text-xxs'>{item.description && item.description}</p>
            </div>
        </Link>
    )
}

export default CategoryCard