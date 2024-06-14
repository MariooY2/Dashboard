import { createSlice } from "@reduxjs/toolkit";

const initial = {
    selected: false, 
   
  };
  const FlipSlice = createSlice({
    name: "switch",
    initialState: initial,
    reducers: {
      toggle(state) {
        state.selected = !state.selected;
      },

    },
  });
  export const {toggle}=FlipSlice.actions
export default FlipSlice.reducer;
  