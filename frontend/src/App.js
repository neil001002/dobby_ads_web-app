import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import CreateFolder from "./components/Dashboard/CreateFolder";
import UploadImage from "./components/Dashboard/UploadImage";
import SearchImage from "./components/Dashboard/SearchImage";
import FolderView from "./components/Dashboard/FolderView";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-folder" element={<CreateFolder />} />
          <Route path="/upload-image" element={<UploadImage />} />
          <Route path="/search-image" element={<SearchImage />} />
          <Route path="/folders" element={<FolderView />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/* Fallback route */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
