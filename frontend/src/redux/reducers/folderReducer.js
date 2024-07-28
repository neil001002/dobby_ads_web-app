import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  loading: true,
  error: null,
};

const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    fetchFoldersSuccess: (state, action) => {
      state.folders = action.payload;
      state.loading = false;
    },
    createFolderSuccess: (state, action) => {
      state.folders.push(action.payload);
      state.loading = false;
    },
    folderError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchFoldersSuccess, createFolderSuccess, folderError } = folderSlice.actions;
export default folderSlice.reducer;
