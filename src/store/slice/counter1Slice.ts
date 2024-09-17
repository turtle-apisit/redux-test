import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Swal from "sweetalert2";

type Counter1State = {
  counter1: number;
  loading: boolean;
};

const initialValues: Counter1State = {
  counter1: 0,
  loading: false,
};

export const setValuesAsync = createAsyncThunk(
  "counter1/setValuesAsync",
  async (value: number) => {
    const job = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        if (value > 0) {
          resolve(value);
        } else {
          reject(Error(""));
        }
      }, 1000);
    });
    return await job;
  }
);

const counter1Slice = createSlice({
  name: "counter1",
  initialState: initialValues,
  reducers: {
    increase1: (state: Counter1State, action: PayloadAction<void>) => {
      state.counter1 = state.counter1 + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setValuesAsync.fulfilled, (state, action) => {
      state.counter1 = action.payload;
      state.loading = false;
    });
    builder.addCase(setValuesAsync.rejected, (state, action) => {
      state.counter1 = 0;
      state.loading = false;
      Swal.fire({
        icon: "error",
        title: "I SADDDDDDDDDD",
        confirmButtonColor: "#ef4444",
      });
    });
    builder.addCase(setValuesAsync.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { increase1 } = counter1Slice.actions;
export const counter1Selecttor = (store: RootState) => store.counter1Reducer;
export default counter1Slice.reducer;
