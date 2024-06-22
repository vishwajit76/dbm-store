import { createSlice } from '@reduxjs/toolkit';

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        itemDetails : {},
        userDetails: {}
    },
    reducers: {
        setUserDetail: (state , action) => {
            state.userDetails = action.payload
        },
        setPaymentDetails: (state, action) => {
            // const { product_id , variation_id , quantity} = action.payload
            state.userDetails = action.payload
        },
        setPayment: (state , action) => {
            // const { currency , payment_method , }
        }
    },
});

export const { setUserDetail , setPaymentDetails , setPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
