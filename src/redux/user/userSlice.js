import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null,
  detail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    setUserDetail(state, action) {
      state.detail = action.payload.user;
    },
    clearUser(state) {
      state.token = null;
      state.detail = null;
      state.isLoggedIn = false
    },
  },
});

export const { setToken, setUserDetail, clearUser } = userSlice.actions;

export default userSlice.reducer;
