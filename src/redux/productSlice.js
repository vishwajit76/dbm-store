import { createSlice } from '@reduxjs/toolkit';


export const productsSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;  
        },
    },
});

export const { setProduct } = productsSlice.actions;

export default productsSlice.reducer;


