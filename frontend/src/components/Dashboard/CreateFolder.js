import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFolder } from "../../redux/actions/folderActions";

const CreateFolder = () => {
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState(null);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createFolder(name, parentId));
    setName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Folder Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Create Folder</button>
    </form>
  );
};

export default CreateFolder;
