import React, { useState, useEffect } from "react";
import axios from "axios";

const GIPHY_API_KEY = "YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE";

const GifCard = ({ setGifs }) => {
  const [endpoint, setEndpoint] = useState("");

  useEffect(() => {
    if (!endpoint) return;
    const fetchData = async () => {
      const res = await axios.get(endpoint);
      const data = res.data.data;
      setGifs(Array.isArray(data) ? data : [data]);
    };
    fetchData();
  }, [endpoint]);

  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`;
  const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;

  return (
    <div className="gif-card-buttons">
      <button className="buttons" onClick={() => setEndpoint(randomUrl)}>
        Random Gif
      </button>
      <button className="buttons" onClick={() => setEndpoint(trendingUrl)}>
        Show Trending
      </button>
    </div>
  );
};

export default GifCard;
