import React from 'react';
import MyNav from './componets/myNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import word from  './componets/word'
import WordDisplay from './componets/word';

function App() {
  return (
    <div className="App">
      <MyNav />
      <WordDisplay />
    </div>
  );
}

export default App;
