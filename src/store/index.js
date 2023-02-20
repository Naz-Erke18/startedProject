import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./calculator/authSlice";
import { calculateSlice } from "./calculator/calculatorSlice";

// const rootReducer = combineReducers({
//   calculator: calculatorReducer,
//   auth: authReducer,
// });


export const store = configureStore({
  reducer: {
    calculate: calculateSlice.reducer,
    auth:authSlice.reducer
    
  },
});