// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartSlice } from './cart/cartSlice';
import { authSlice } from './auth/authSlice';
import { paymentSlice } from './payment/paymentSlice';

const persistCartConfig = {
  key: 'cart',
  storage,
};

const persistAuthConfig = {
  key: 'auth',
  storage,
};

const persistPaymentConfig = {
  key: 'payment',
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartSlice.reducer);
const persistedAuthReducer = persistReducer(persistAuthConfig, authSlice.reducer);
const persistedPaymentReducer = persistReducer(persistPaymentConfig, paymentSlice.reducer);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    auth: persistedAuthReducer,
    payment: persistedPaymentReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
