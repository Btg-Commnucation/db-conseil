import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILoadingState {
  nicoka: boolean;
  wordpress: boolean;
}

const initialState: ILoadingState = {
  nicoka: false,
  wordpress: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setNicokaLoading: (state, action: PayloadAction<boolean>) => {
      state.nicoka = action.payload;
    },
    setWordpressLoading: (state, action: PayloadAction<boolean>) => {
      state.wordpress = action.payload;
    },
  },
});

export const { setNicokaLoading, setWordpressLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
