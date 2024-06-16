import { createSlice } from "@reduxjs/toolkit";

const initial = {
  authenticated: false,
  data: {},
  image: "123",
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
    setimage(state,action){
      state.image=action.payload;
    },deleteimage(state){
      state.image=null
    }
  },
});

export const { toggleauthenticated, savedata, cleardata,setimage,deleteimage } =
  AccountSlice.actions;
export default AccountSlice.reducer;
