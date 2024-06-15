import { createSlice } from "@reduxjs/toolkit";

const initial = {
  authenticated: false,
  data: {},
};
const AccountSlice = createSlice({
  name: "account",
  initialState: initial,
  reducers: {
    toggleauthenticated(state, action) {
      state.authenticated = action.payload;
    },
    savedata(state,action){
      state.data=action.payload;
    },
    cleardata(state){
      state.data={}
    }
  },
});

export const { toggleauthenticated,savedata,cleardata } = AccountSlice.actions;
export default AccountSlice.reducer;
