import React from 'react';
import MyNav from './componets/myNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import WordDisplay from './componets/word';
import Definitions from './componets/definitions';

function App() {
  const word = 'keyboard';
  return (
    <div className="App">
      <MyNav />
      <WordDisplay />
      <Definitions />
    </div>
  );
}

export default App;
