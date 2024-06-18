import { createSlice } from "@reduxjs/toolkit";

const initial = {
  authenticated: false,
  data: {},
  image: "123",
  email: "",
};
const AccountSlice = createSlice({
  name: "account",
  initialState: initial,
  reducers: {
    toggleauthenticated(state, action) {
      state.authenticated = action.payload;
    },
    savedata(state, action) {
      state.data = action.payload;
    },
    cleardata(state) {
      state.data = {};
    },
    setimage(state, action) {
      state.image = action.payload;
    },clearimage(state){
state.image="123  "
    },
    setemail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { toggleauthenticated, savedata, cleardata, setimage, setemail,clearimage } =
  AccountSlice.actions;
export default AccountSlice.reducer;
