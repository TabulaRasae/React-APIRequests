import React from "react";

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
    <form onSubmit={searchGifs} className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </form>
  );
};

export default SearchField;
