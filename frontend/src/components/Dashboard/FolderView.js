import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFolders } from "../../redux/actions/folderActions";

const FolderView = () => {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.folders);

  useEffect(() => {
    dispatch(fetchFolders());
  }, [dispatch]);

  return (
    <div>
      {folders.map((folder) => (
        <div key={folder._id}>
          <p>{folder.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FolderView;
