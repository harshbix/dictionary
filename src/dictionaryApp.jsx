import React, { useState } from "react";
import axios from "axios";

const DictionaryApp = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      const firstMeaning =
        response.data[0]?.meanings[0]?.definitions[0]?.definition ||
        "Meaning not found";
      setMeaning(firstMeaning);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMeaning("Error fetching meaning");
    }
  };

  return (
    <div className="row justify-content-center m-3">
    <div className="col-5">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Meaning:</h2>
        <p>{meaning}</p>
      </div>
    </div>
    </div>
  );
};

export default DictionaryApp;
