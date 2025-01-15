import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface appState {
  title: string;
}

const initialState: appState = {
  title: "Dashboard"
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    details: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    }
  },
});

export const { details } = appSlice.actions;

export default appSlice.reducer;
