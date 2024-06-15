import { createSlice } from "@reduxjs/toolkit";

const initial = {
  authenticated: false,
};
const AccountSlice = createSlice({
  name: "account",
  initialState: initial,
  reducers: {
    toggleauthenticated(state) {
      state.authenticated = !state.authenticated;
    },
  },
});

export const { toggleauthenticated } = AccountSlice.actions;
export default AccountSlice.reducer;
