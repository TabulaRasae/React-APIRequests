import React, {useState, useEffect} from "react";
import axios from "axios"; 

const Search_API_KEY = `YAYxIpb6PDFuq6AhXfhUTitXSu1oY4rE`;
const url = `http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=${Search_API_KEY}`;
const userInput = " ";
const SearchField = () => {
  const [search, setSearch] = useState([]);
  const searchGifs = async () => {
    try {
      const searchResponse = await axios.get(url);
      const searchData = searchResponse.data;
      setSearch(searchData);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  useEffect(() => {
    searchGifs(); 
  }, []);
  return (
     <form onSubmit={handleSubmit(get.userInput)} className="search-bar">
       <input 
         type="text"
         placeholder="Search..."
         className="search-input"
       />
        <input
       type = "submit"
       placeholder = "Submit"
       className = "buttons"
       /> 
     </form>
    
  );
};



export default SearchField;
