import { createSlice } from "@reduxjs/toolkit";

const initial = {
  authenticated: false,
};
const AccountSlice = createSlice({
  name: "account",
  initialState: initial,
  reducers: {
    toggleauthenticated(state,action) {
      state.authenticated = action.payload;
    },
  },
});

export const { toggleauthenticated } = AccountSlice.actions;
export default AccountSlice.reducer;
