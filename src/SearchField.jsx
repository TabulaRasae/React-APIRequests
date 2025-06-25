import React, { useState } from "react";
import axios from "axios";

const GIPHY_API_KEY = `YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE`;

const SearchField = ({ setGifs, setSearchActive }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    try {
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
        query
      )}&api_key=${GIPHY_API_KEY}`;
      const res = await axios.get(url);
      setGifs(res.data.data);
      setSearchActive(true); 
    } catch (error) {
      console.error("Error searching gifs:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Submit" className="buttons" />
    </form>
  );
};

export default SearchField;
