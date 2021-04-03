import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    displayUpdate: false,
    update: "",
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.displayUpdate = true;
      state.update = "User has incremented count";
    },
    decrement: (state) => {
      state.count -= 1;
      state.displayUpdate = true;
      state.update = "User has decremented count";
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
