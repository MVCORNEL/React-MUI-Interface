import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthentificated: false,
};

//Create slice is used for preparing a slice of our global state
//when we have data that is not directly related, also we can craete different slices in different files to make our code more maintainable
const authSlice = createSlice({
  name: 'authentification',
  initialState,
  reducers: {
    login(state) {
      state.isAuthentificated = true;
    },
    logout(state) {
      state.isAuthentificated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
