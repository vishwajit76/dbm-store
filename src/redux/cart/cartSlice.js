import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
        subtotal: 0
    },
    reducers: {
        addItem: (state, action) => {
            const { id, name, price, rating, image, quantity } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += quantity;
            } else {
                state.items.push({ id, name, price, rating, image, quantity });
            }
            state.count += quantity;
            state.subtotal += price * quantity;
        },
        removeFromCart: (state, action) => {
            const indexToRemove = action.payload;
            const itemToRemove = state.items[indexToRemove];
            if (itemToRemove) {
                state.subtotal -= itemToRemove.price * itemToRemove.quantity;
                state.count -= itemToRemove.quantity;
                state.items.splice(indexToRemove, 1);
            }
        },
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
                state.count += 1;
                state.subtotal += state.items[existingItemIndex].price;
            }
        },
        decreaseQuantity: (state, action) => {
            const { id } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity -= 1;
                state.count -= 1;
                state.subtotal -= state.items[existingItemIndex].price;
                if (state.items[existingItemIndex].quantity === 0) {
                    state.items.splice(existingItemIndex, 1);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
            state.subtotal = 0;
        }
    },
});

export const { addItem, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
