import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Counter2State = {
  counter2: number;
  loading: boolean;
};

const initialValues: Counter2State = {
  counter2: 0,
  loading: false,
};

export const setValuesAsync = createAsyncThunk(
  "counter2/setValuesAsync",
  async (value: number) => {
    const job = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        if (value >= 0) {
          resolve(value);
        } else {
          reject(Error(""));
        }
      }, 1000);
    });
    return await job;
  }
);

const counter2Slice = createSlice({
  name: "counter2",
  initialState: initialValues,
  reducers: {
    increase2: (state: Counter2State, action: PayloadAction<void>) => {
      state.counter2 = state.counter2 + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setValuesAsync.fulfilled, (state, action) => {
      state.counter2 = action.payload;
      state.loading = false;
    });
    builder.addCase(setValuesAsync.rejected, (state, action) => {
      state.counter2 = 0;
      state.loading = false;
    });
    builder.addCase(setValuesAsync.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { increase2 } = counter2Slice.actions;
export const counter2Selecttor = (store: RootState) => store.counter2Reducer;
export default counter2Slice.reducer;
