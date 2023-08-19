import React, { useState, useEffect } from 'react';


const Definitions = () => {
  const meanings = [
    "bla bla bla bla",
    "hello world this is my first dictionary app",
  ];
  const synonyms = ["first ", "second", "third"];

  return (
    <div>
      <div className="lead fw-bold my-3 ">noun</div>
      <p className="text-muted">Meaning</p>
      <div>
        <ul>
          {meanings.length == 0
            ? "Meaning Not found!"
            : meanings.map((meaning) => <li key={meaning}>{meaning}</li>)}
        </ul>
      </div>
      {synonyms.length != 0 ? (
        <p>
          synonyms
          <span className="purple-color"> {synonyms.join(" , ")}</span>{" "}
        </p>
      ) : (
        <p>no synonym</p>
      )}
    </div>
  );
};

export default Definitions;
