import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: "INR",
    exchangeRate: 1,
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
      state.exchangeRate = 0.012;
    }
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
