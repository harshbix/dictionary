import React, { useState } from 'react';
import MyNav from './componets/myNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import WordDisplay from './componets/word';
import Definitions from './componets/definitions';
import SearchForm from './componets/fetchData';



function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <MyNav />
      <SearchForm onSearch={handleSearch}/>
      <WordDisplay searchResults={searchResults} />
      <Definitions searchResults={searchResults} />
    </div>
  );
}

export default App;
