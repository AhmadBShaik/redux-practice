import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";

function App() {
  const count = useSelector((state: any) => state.count);
  const countDispatch = useDispatch();

  const reset = () => {
    countDispatch(actions.reset());
  };
  const increment = () => {
    countDispatch(actions.increment());
  };
  const decrement = () => {
    countDispatch(actions.decrement());
  };
  const incrementByThree = () => {
    countDispatch(actions.increment({ value: 3 }));
  };
  const decrementByThree = () => {
    countDispatch(actions.decrement({ value: 3 }));
  };
  return (
    <div className="p-5 flex flex-col items-center">
      <div>
        <div>{`${count}`}</div>
      </div>
      <div className="flex space-x-3">
        <div>
          <div
            onClick={increment}
            className="p-2 text-white bg-green-500 rounded mt-2 cursor-pointer">
            Increment
          </div>
          <div
            onClick={decrement}
            className="p-2 text-white bg-red-500 rounded mt-2 cursor-pointer">
            Decrement
          </div>
        </div>
        <div>
          <div
            onClick={incrementByThree}
            className="p-2 text-white bg-green-500 rounded mt-2 cursor-pointer">
            Increment by 3
          </div>
          <div
            onClick={decrementByThree}
            className="p-2 text-white bg-red-500 rounded mt-2 cursor-pointer">
            Decrement by 3
          </div>
        </div>
      </div>
      <div
        onClick={reset}
        className="p-2 text-white bg-yellow-500 rounded mt-2 cursor-pointer">
        Reset
      </div>
    </div>
  );
}

export default App;
