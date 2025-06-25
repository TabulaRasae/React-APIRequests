import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = `YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE`


const SearchField = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  const searchGifs = async () => {
    try {
       const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}`
      const searchResponse = await axios.get(searchUrl);
      const searchData = searchResponse.data;
      setGifs(searchData.data);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  useEffect(() => {
    searchGifs(); 
  }, []);
  
  return (
    <>
       <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={searchGifs}>Search</button>
      <div className="results">
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </>
  );
};

export default SearchField;
