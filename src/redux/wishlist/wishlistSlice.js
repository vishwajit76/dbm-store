import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addToWishlist: (state, action) => {
            const { isInWishlist , product } = action.payload;
            state.items.push({ isInWishlist: true, product });
            state.count += 1
        },
        removeFromWishlist: (state, action) => {
            const index = action.payload;
            if (state.items[index]) {
                state.items[index].isInWishlist = false;
                state.items.splice(index, 1);
                state.count -= 1
            }
        }
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
