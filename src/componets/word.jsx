import React from 'react';

const WordDisplay = ({ searchResults }) => {
  const wordData = searchResults && searchResults.length > 0 ? searchResults[0] : null;

  return (
    <div>
      {wordData ? (
        <div className="mt-4 row">
          <div className="col-9">
            <h1 className="fw-bold">{wordData.word}</h1>
            <p className="lead purple-color">{wordData.phonetic}</p>
          </div>
          <div className="col-3" id="play">
            <a href="#" className="round-button">
              <span className="fa fa-play purple-color"></span>
            </a>
          </div>
        </div>
      ) : (
        <p className='my-5'>Please Search any word</p>
      )}
    </div>
  );
};

export default WordDisplay;
