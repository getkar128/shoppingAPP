import background from '../assets/background.png'
import Categories from '../components/homepage/Categories'
import FeaturedDeal from '../components/homepage/FeaturedDeal'

const HomePage = () => {
    return (
        <div className="p-4 md:p-6">
            <div className='relative'>
                <img src={background} className="" alt="" />
                <div className='absolute bottom-4 left-4 '>
                    <h1 className='text-3xl sm:text-5xl lg:text-[60px] lg:leading-[60px] font-extrabold'>New Year, New You</h1>
                    <p className='text-sm md:text-base leading-[130%]'>Shop our best deals on fitness equipment, activewear, and more</p>
                </div>
            </div>
            <div className='mt-4'>
                <Categories />
            </div>
            <div className='mt-8'>
                <h2 className='text-xl font-bold'>Featured Deals</h2>
                <FeaturedDeal />
            </div>
        </div>
    )
}

export default HomePage