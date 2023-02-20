import { useDispatch, useSelector } from "react-redux";
import { calculateActions, calculatorActionTypes } from "../store/calculator/calculatorSlice";
import classes from "./Counter.module.css";

const Calculator = () => {
  const result = useSelector((state) => state.calculate.result);
  console.log(result);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculateActions.add(5));
  };
  const divideHandler = () => {
    dispatch(calculateActions.divide(4));
  };

  const subtractHandler = () => {
    dispatch(calculateActions.subtract(10));
  };
  const multiplayHandler = () => {
    dispatch(calculateActions.multiplay(2));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculate</h1>
      <div className={classes.value}>Result:{result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplayHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculator;
