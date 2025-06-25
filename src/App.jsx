import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import GifCard from "./GifCard";
import SearchField from "./SearchField";

const App = () => {
  const [gifs, setGifs] = useState([]);

  return (
    <div className="app">
      <h1 className="title">Gif Finder!</h1>

      <SearchField setGifs={setGifs} />
      <GifCard setGifs={setGifs} />

      <ul className="gif-list">
        {gifs.map((gif) => (
          <li key={gif.id} className="gif-card">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
