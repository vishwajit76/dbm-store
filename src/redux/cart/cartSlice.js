// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addItem: (state, action) => {
            const { id, name, price, rating, image, quantity  } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
            } else {
                state.items.push({ id, name, price, rating, image, quantity: quantity });
            }
            state.count += 1;
        },
        removeFromCart: (state, action) => {
            const indexToRemove = action.payload;
            state.items.splice(indexToRemove, 1);
        },
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
                state.count += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const { id } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity -= 1;
                if (state.items[existingItemIndex].quantity === 0) {
                    state.items.splice(existingItemIndex, 1);
                }
                state.count -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        }
    },
});

export const { addItem, removeFromCart , increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
