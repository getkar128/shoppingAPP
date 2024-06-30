import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../config/axiosInstance"

const initialState = {
    products: [],
    loading: false,
    error: false
}

export const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async () => {
        const response = await axiosInstance.get('/items')
        return response.data
    }
)

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = false
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false
            state.error = true
        })
    }
})

export const  selectProducts = (state) => state.productsReducer
export default productSlice.reducer