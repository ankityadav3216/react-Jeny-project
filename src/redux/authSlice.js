import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginID: (state, action) => {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.token = null;
      state.userName = null;
    },
  },
});

export const { setLoginID, logout } = authSlice.actions;
export default authSlice.reducer;
