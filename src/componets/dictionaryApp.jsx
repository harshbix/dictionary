import React, { useState } from "react";
import axios from "axios";

function MyNav() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="dark-mode-toggle">
          <select className="form-select form-select-sm border-0">
            <option defaultValue>Serif</option>
            <option value="1">Sans-Serif</option>
          </select>
            <div className="form-check form-switch">
              <input
                className="form-check-input mx-3"
                type="checkbox"
                id="flexSwitchCheckDefault"
              /> 
            </div>
            <label className="form-check-label mx-2 col">
                🌙
              </label>
          </form>
        </div>
      </nav>
    </div>
  );
}

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
    <div>
      <MyNav />
    </div>
  );
};

export default DictionaryApp;
