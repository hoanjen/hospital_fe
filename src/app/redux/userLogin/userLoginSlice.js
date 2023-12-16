import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'NULL',
  avatar: 'NULL',
  dsForm: false,
};

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setDsForm: (state, action) => {
      state.dsForm = action.payload;
    },
  },
});

export const { setName, setAvatar, setDsForm } = userLoginSlice.actions;
export const selectUserLogin = (state) => state.userLogin;
export default userLoginSlice.reducer;
