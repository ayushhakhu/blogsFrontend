import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createNewDialogState: false,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    showNewDialog: (state) => {
      state.createNewDialogState = true;
    },
    hideNewDialog: (state) => {
      state.createNewDialogState = false;
    },
  },
});

export const { showNewDialog, hideNewDialog } = todoSlice.actions;

export default todoSlice.reducer;
