import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";
import SearchField from "./SearchField";


const GIPHY_API_KEY = `YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE`;
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;

const App = () => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async () => {
    try {
      const gifsResponse = await axios.get(url);
      const gifsData = gifsResponse.data.data;
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
      <SearchField/>

      <div className="results">
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
      
    </div>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<App />);
