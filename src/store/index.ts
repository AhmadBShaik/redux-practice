import { createStore } from "redux";

interface State {
  count: number;
}

const initialState = {
  count: 0,
};
const reducer = (
  state: State = initialState,
  action:
    | { type: "INCREMENT"; payload?: { value: number } }
    | { type: "DECREMENT"; payload?: { value: number } }
    | { type: "RESET" }
) => {
  // Only synchronous
  // Should not mutate original state

  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + (action.payload?.value ?? 1) };
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - (action.payload?.value ?? 1) };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }

  return state;
};
export const store = createStore(reducer);
