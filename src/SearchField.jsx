import React, { useState, useEffect } from "react";
import axios from "axios";

const GIPHY_API_KEY = "YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE";

const SearchField = ({ setGifs }) => {
  const [query, setQuery] = useState("");
  const [endpoint, setEndpoint] = useState("");

  useEffect(() => {
    if (!endpoint) return;
    const fetchSearch = async () => {
      const res = await axios.get(endpoint);
      setGifs(res.data.data);
    };
    fetchSearch();
  }, [endpoint]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const words = query.trim().split(/\s+/);
    if (!words.length) return;
    const searchTerm = words.join("+");
    setEndpoint(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${GIPHY_API_KEY}`
    );
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchField;
