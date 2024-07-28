import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchImages } from "../../redux/actions/imageActions";

const SearchImage = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchImages(name));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Search Image:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <button type="submit">Search</button>
      </form>
      <div>
        {images.map((image) => (
          <div key={image._id}>
            <p>{image.name}</p>
            <img src={`/${image.url}`} alt={image.name} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchImage;
