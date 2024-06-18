import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartSlice } from './cart/cartSlice';
import { userSlice } from './user/userSlice'

const persistCartConfig = {
  key: 'cart',
  storage,
};
const persistUserConfig = {
  key: 'user',
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartSlice.reducer );
const persistedUserReducer = persistReducer(persistUserConfig, userSlice.reducer );

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    user: persistedUserReducer
  },
});

const persistor = persistStore(store);

export { store, persistor };
