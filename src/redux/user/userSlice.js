import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  detail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUserDetail(state, action) {
      state.detail = action.payload;
    },
    clearUser(state) {
      state.token = null;
      state.detail = null;
    },
  },
});

export const { setToken, setUserDetail, clearUser } = userSlice.actions;

export default userSlice.reducer;
