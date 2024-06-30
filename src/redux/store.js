import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/productSlice'
import cartItemsReducer from './features/cartSlice'

export const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
        cartItemsReducer: cartItemsReducer
    },
})