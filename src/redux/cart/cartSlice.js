import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
        subtotal: 0,
        selectedProduct: {},
    },
    reducers: {
        addItem: (state, action) => {
            const { product, id, name, price, rating, image, quantity, variation } = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === id && item.variation?._id === variation?._id
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push({ product, id, name, price, rating, image, quantity, variation })
            }

            state.count += quantity;
            state.subtotal += price * quantity;
        },
        removeFromCart: (state, action) => {
            const { id, variationId } = action.payload;
            const existingItemIndex = state.items.findIndex(
                item => item.id === id && item.variation?._id === variationId
            );
            if (existingItemIndex !== -1) {
                const itemToRemove = state.items[existingItemIndex];
                state.subtotal -= itemToRemove.price * itemToRemove.quantity;
                state.count -= itemToRemove.quantity;
                state.items.splice(existingItemIndex, 1);
            }
        },
        increaseQuantity: (state, action) => {
            const { id, variationId } = action.payload;
            const existingItemIndex = state.items.findIndex(
                item => item.id === id && item.variation?._id === variationId
            );
            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
                state.count += 1;
                state.subtotal += state.items[existingItemIndex].price;
            }
        },
        decreaseQuantity: (state, action) => {
            const { id, variationId } = action.payload;
            const existingItemIndex = state.items.findIndex(
                item => item.id === id && item.variation._id === variationId
            );
            if (existingItemIndex !== -1) {
                const item = state.items[existingItemIndex];
                item.quantity -= 1;
                state.count -= 1;
                state.subtotal -= item.price;
                if (item.quantity === 0) {
                    state.items.splice(existingItemIndex, 1);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
            state.subtotal = 0;
        },
        cartProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});

export const { addItem, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, cartProduct } = cartSlice.actions;

export default cartSlice.reducer;
