import { Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import HomePage from "./pages/HomePage"
import { Suspense, lazy } from "react"
import Loader from "./components/shared/Loader"

const Category = lazy(() => import("./pages/Category"))
const CartPage = lazy(() => import("./pages/CartPage"))
const ProductDetails = lazy(() => import("./pages/ProductDetails"))
const UnderDevlopment = lazy(() => import("./pages/UnderDevlopment"))

const App = () => {

    return (
        <main className='w-full mx-auto flex flex-col min-h-screen'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cart" element={<Suspense fallback={<Loader />}><CartPage /></Suspense>}/>
                    <Route path="/categories/:category" element={<Suspense fallback={<Loader />}><Category /></Suspense>} />
                    <Route path="/products" element={<Suspense fallback={<Loader />}><Category /></Suspense>} />
                    <Route path="/product-details/:id" element={<Suspense fallback={<Loader />}><ProductDetails /></Suspense>} />
                    <Route path="*" element={<Suspense fallback={<Loader />}><UnderDevlopment /></Suspense>} />
                </Route>
            </Routes>
        </main>
    )
}

export default App