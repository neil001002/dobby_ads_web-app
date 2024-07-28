import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../redux/actions/imageActions";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [folderId, setFolderId] = useState(null);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("folderId", folderId);
    dispatch(uploadImage(formData));
    setName("");
    setImage(null);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Image Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      </div>
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default UploadImage;
