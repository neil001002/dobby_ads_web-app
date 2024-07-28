import { combineReducers } from "redux";
import authReducer from "./authReducer";
import folderReducer from "./folderReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  folders: folderReducer,
  images: imageReducer,
});

export default rootReducer;
