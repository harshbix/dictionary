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
    <div className="m-3  text-center">
      <div className="">
        <h1 className="display-3 fw-bolder text-center">Dictionary App</h1>

        <div className="input-group mb-3">
          <input
            className="form-control border-2"
            type="text"
            placeholder="Enter a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <h2>Meaning:</h2>
          <p>{word + " : " + meaning}</p>
        </div>
      </div>
    </div>
  );
};

export default DictionaryApp;
