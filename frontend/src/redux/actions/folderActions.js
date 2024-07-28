import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFoldersSuccess, createFolderSuccess, folderError } from "../reducers/folderReducer";

export const fetchFolders = createAsyncThunk("folders/fetchFolders", async (_, { dispatch }) => {
  try {
    const res = await axios.get("/api/folders");
    dispatch(fetchFoldersSuccess(res.data));
  } catch (err) {
    dispatch(folderError(err.response.data));
  }
});

export const createFolder = createAsyncThunk("folders/createFolder", async ({ name, parentId }, { dispatch }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, parentId });

  try {
    const res = await axios.post("/api/folders/create", body, config);
    dispatch(createFolderSuccess(res.data));
  } catch (err) {
    dispatch(folderError(err.response.data));
  }
});
