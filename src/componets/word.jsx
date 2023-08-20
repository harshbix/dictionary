import React, { useState, useEffect } from 'react';
import words from './words.json';

const WordDisplay = () => {
  return (
    <>
      <div className="mt-4 row">
        <div className="col-9">
          <h1 className="fw-bold">{words[0].word}</h1>
          <p className="lead purple-color">{words[0].phonetic}</p>
        </div>
        <div className="col-3" id="play">
          <a href="#" class="round-button">
            <span class="fa fa-play purple-color"></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default WordDisplay;
