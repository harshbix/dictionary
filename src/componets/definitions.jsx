import React, { useState, useEffect } from 'react';
import words from './words.json'; // Assuming the JSON file is in the same directory

const Definitions = () => {
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    // Assuming you have only one entry in the JSON array
    if (words.length > 0) {
      setWordData(words[0]);
    }
  }, []);

  return (
    <div>
      {wordData ? (
        <div>
          {wordData.meanings.map((meaning, index) => (
            <div key={index}>
              <div className="lead fw-bold my-3">{meaning.partOfSpeech}</div>
              <p className="text-muted">Meaning:</p>
              <ul>
                {meaning.definitions.map((definition, defIndex) => (
                  <li key={defIndex}>
                    {definition.definition} (Example: {definition.example})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Definitions;
