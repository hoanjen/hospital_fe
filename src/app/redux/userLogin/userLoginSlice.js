import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "NULL",
  avatar: "NULL",
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAvatar: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setName, setAvatar } = userLoginSlice.actions;
export const selectUserLogin = (state) => state.userLogin;
export default userLoginSlice.reducer;
