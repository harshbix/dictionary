import React, { useState, useEffect } from "react";

const Definitions = ({ searchResults }) => {
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setWordData(searchResults[0]);
    }
  }, [searchResults]);

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
                    {definition.definition}
                    {definition.example && (
                      <span> (Example: {definition.example})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="my-3">
              Source:{" "}
              <a href={wordData.sourceUrls[0]} className="link">
                {wordData.sourceUrls[0]}
              </a>
            </p>
          </div>
        </div>
      ) : (
        <p>..</p>
      )}
    </div>
  );
};

export default Definitions;
