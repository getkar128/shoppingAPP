import { faBars, faCartShopping, faHeadphones, faHome } from "@fortawesome/free-solid-svg-icons"
import fitness from '../assets/fitness.png'
import women from '../assets/women clothes.png'
import men from '../assets/men clothes.png'
import home from '../assets/home.png'
import electronics from '../assets/electronics.png'
import beauty from '../assets/beauty.png'
import toysgames from '../assets/toysgames.png'
import sportsOutdoors from '../assets/sports&outdoors.png'
import laptops from '../assets/laptops.png'
import smartwatches from '../assets/smartwatches.png'
import yogamats from '../assets/yogamats.png'
import headphones from '../assets/headphones.png'

export const navMenu = [
    {
        title: 'Home',
        navigate: '/'
    },
    {
        title: 'Products',
        navigate: '/products'
    },
    {
        title: 'Deals',
        navigate: '/deals'
    },
    {
        title: 'Services',
        navigate: '/services'
    },
    {
        title: 'Support',
        navigate: '/support'
    },
    {
        title: 'More',
        navigate: '/more'
    },
]

export const mobileNavbar = [
    {
        title: 'Home',
        navigate: '/',
        icon: faHome
    },
    {
        title: 'Cart',
        navigate: '/cart',
        icon: faCartShopping
    },
    {
        title: 'Support',
        navigate: '/support',
        icon: faHeadphones
    },
    {
        title: 'Menu',
        navigate: '/more',
        icon: faBars
    },
]

export const categories = [
    {
        name: 'Fitness',
        image: fitness,
        link: 'fitness'
    },
    {
        name: "Women's Clothing",
        image: women,
        link: 'women-clothing'
    },
    {
        name: "Men's Clothing",
        image: men,
        link: 'men-clothing'
    },
    {
        name: 'Home',
        image: home,
        link: 'home'
    },
    {
        name: 'Electronics',
        image: electronics,
        link: 'electronics'
    },
    {
        name: 'Beauty',
        image: beauty,
        link: 'beauty'
    },
    {
        name: 'Toys & Games',
        image: toysgames,
        link: 'toys-games'
    },
    {
        name: 'Sports & Outdoors',
        image: sportsOutdoors,
        link: 'sports-outdoors'
    },
]

export const featuredDeals = [
    {
        name: 'Laptops',
        image: laptops,
        link: 'laptops',
        description: 'Save up to $300 on top brands'
    },
    {
        name: 'Smartwatches',
        image: smartwatches,
        link: 'laptops',
        description: 'Up to 30% off select styles'
    },
    {
        name: 'Yoga Mats',
        image: yogamats,
        link: 'yogamats',
        description: 'Great deals on top-rated mats'
    },
    {
        name: 'Headphones',
        image: headphones,
        link: 'headphones',
        description: 'Find your perfect pair'
    },
]