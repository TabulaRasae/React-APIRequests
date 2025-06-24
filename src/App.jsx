import { React, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";

const GIPHY_API_KEY = `YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE`;
const url = `http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;

const App = () => {
  const [gifs, setGifs] = useState([]);
  const fetchGifs = async () => {
    const gifsResponse = await axios.get(url);
    const gifsData = gifsResponse.data;
    setGifs(gifsData);
  };

  useEffect(() => {
    fetchGifs;
  }, []);
  console.log("Gifs", gifs);
  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>
      <button className="buttons" onClick={fetchGifs}>
        Generate Gif
      </button>
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
