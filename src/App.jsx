import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const GIPHY_API_KEY = "YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE";

const App = () => {

  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>
      <Generate/>
      <SearchField/>
    </div>
    
  );
};

const Generate = () => {


  return (
    <button className= "buttons" onClick = {""} > Generate Gif </button>

  )
};



// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);

