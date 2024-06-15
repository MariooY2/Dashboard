import { createSlice } from "@reduxjs/toolkit";

const initial = {
  alreadyexist: false,
  authenticated: false,
};
const AccountSlice = createSlice({
  name: "account",
  initialState: initial,
  reducers: {
    toggleauthenticated(state) {
      state.selected = !state.selected;
    },
  },
});

export const { toggleauthenticated } = AccountSlice.actions;
export default AccountSlice.reducer;
