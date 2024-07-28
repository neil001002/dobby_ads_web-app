import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  loading: true,
  error: null,
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    fetchImagesSuccess: (state, action) => {
      state.images = action.payload;
      state.loading = false;
    },
    uploadImageSuccess: (state, action) => {
      state.images.push(action.payload);
      state.loading = false;
    },
    imageError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchImagesSuccess, uploadImageSuccess, imageError } = imageSlice.actions;
export default imageSlice.reducer;
