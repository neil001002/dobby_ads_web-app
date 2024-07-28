import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchImagesSuccess, uploadImageSuccess, imageError } from "../reducers/imageReducer";

export const fetchImages = createAsyncThunk("images/fetchImages", async (_, { dispatch }) => {
  try {
    const res = await axios.get("/api/images");
    dispatch(fetchImagesSuccess(res.data));
  } catch (err) {
    dispatch(imageError(err.response.data));
  }
});

export const uploadImage = createAsyncThunk("images/uploadImage", async (formData, { dispatch }) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const res = await axios.post("/api/images/upload", formData, config);
    dispatch(uploadImageSuccess(res.data));
  } catch (err) {
    dispatch(imageError(err.response.data));
  }
});

export const searchImages = createAsyncThunk("images/searchImages", async (name, { dispatch }) => {
  try {
    const res = await axios.get(`/api/images/search?name=${name}`);
    dispatch(fetchImagesSuccess(res.data));
  } catch (err) {
    dispatch(imageError(err.response.data));
  }
});
