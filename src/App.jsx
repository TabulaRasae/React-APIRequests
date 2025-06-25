import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";
import SearchField from "./SearchField"


const GIPHY_API_KEY = `YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE`;
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;

const App = () => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async () => {
    try {
      const gifsResponse = await axios.get(url);
      const gifsData = gifsResponse.data;
      setGifs(gifsData);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  useEffect(() => {
    fetchGifs(); 
  }, []);

  return (
    <div className="app">
      <h1 className="title">Gif Generator!</h1>
      <SearchField />
      <button className="buttons" onClick={fetchGifs}>
        Generate Gif
      </button>
    </div>
    //  <ul className="gif-list">
    //      {gifs.map((gif) => (
    //        <li key={gif.id} className="gif-card">
    //          <img src={gif.images.fixed_height.url} alt={gif.title} />
    //        </li>
    //      ))}
    //  </ul>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<App />);
