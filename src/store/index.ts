import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
interface State {
  count: number;
}

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(
      state: State,
      action: PayloadAction<{ value: number } | undefined>
    ) {
      !!action.payload ? (state.count += action.payload.value) : state.count++;
    },
    decrement(
      state: State,
      action: PayloadAction<{ value: number } | undefined>
    ) {
      !!action.payload ? (state.count -= action.payload.value) : state.count--;
    },
    reset() {
      return initialState;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
