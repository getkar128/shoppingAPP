import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../config/axiosInstance"

const initialState = {
    cart: [],
    error: false
}

export const dispatchCartItems = createAsyncThunk(
    'dispatchCartItems',
    async ({ cart }) => {
        const response = await axiosInstance.post('/cart', {
            cart
        })
        return response.data?.cart
    }
)
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload
            const index = state.cart.findIndex((item) => {
                return item.id == id
            })
            if (index !== -1){
                state.cart[index].quantity += 1
            }else{
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload
            const index = state.cart.findIndex((item) => item.id === id)
            if (index >= 0){
                if (state.cart[index]?.quantity === 1){
                    state.cart = state.cart.filter((item) => item.id !== id)
                }else{
                    state.cart[index].quantity -= 1
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(dispatchCartItems.fulfilled, (state, action) => {
            state.cart = action.payload
            state.error = false
        })
        builder.addCase(dispatchCartItems.rejected, (state) => {
            state.error = true
            state.cart = []
        })

    }
})

export const selectCart = (state) => state.cartItemsReducer
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer