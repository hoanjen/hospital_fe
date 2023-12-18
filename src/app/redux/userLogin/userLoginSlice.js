import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'NULL',
  avatar: 'NULL',
  dsForm: false,
  profile: 'NULL',
  active: 1
};

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setDsForm: (state, action) => {
      state.dsForm = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setName, setAvatar, setDsForm, setProfile, setActive } = userLoginSlice.actions;
export const selectUserLogin = (state) => state.userLogin;
export default userLoginSlice.reducer;
