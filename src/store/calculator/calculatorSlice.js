import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  result: 0,
};





export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    add(state, action) {
      console.log(action);
      state.result += action.payload;
    },
    subtract(state, action) {
      state.result -= action.payload;
    },
    divide(state,action){
state.result /= action.payload;
    },
    multiplay(state,action){
      state.result *= action.payload
    }

  },
});

export const calculateActions = calculateSlice.actions;


