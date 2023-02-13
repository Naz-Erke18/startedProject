import { combineReducers, createStore } from "redux";
import authReducer from "./calculator/authReducer";
import { calculatorReducer } from "./calculator/calculatorReducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  auth: authReducer,
});
export const store = createStore(rootReducer);