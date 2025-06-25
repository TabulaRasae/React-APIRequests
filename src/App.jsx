import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";
import SearchField from "./SearchField"


const GIPHY_API_KEY = `YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE`;
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [trendingBlocked, setTrendingBlocked] = useState(false);
  const didMount = useRef(false);

  const fetchGifs = async () => {
    if (trendingBlocked) return; 
    try {
      const gifsResponse = await axios.get(url);
      setGifs(gifsResponse.data.data);
      setSearchActive(false); 
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  useEffect(() => {
    if (!didMount.current) {
      fetchGifs();
      didMount.current = true;
    }
    
  }, []);

  
  const handleSearchActive = (active) => {
    setSearchActive(active);
    if (active) setTrendingBlocked(true);
  };

  return (
    <div className="app">
      <h1 className="title">Gif Generator!</h1>
      <SearchField setGifs={setGifs} setSearchActive={handleSearchActive} />
      {!searchActive && !trendingBlocked && (
        <button className="buttons" onClick={fetchGifs}>
          Generate Gif
        </button>
      )}
      <ul className="gif-list">
        {gifs.map((gif) => (
          <li key={gif.id} className="gif-card">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
      {searchActive && !trendingBlocked && (
        <button className="buttons" onClick={fetchGifs}>
          Back to Trending
        </button>
      )}
    </div>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<App />);
