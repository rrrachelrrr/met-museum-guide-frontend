import React from 'react';
import './App.css';
import PaintingCollection from './components/search-page/PaintingCollection.js'
import Search from './components/search-page/Search.js'

function App() {
  return (
    <div className="App">
      <h1>FIND SOME KEWL PAINTINGS</h1>
      < Search />
      < PaintingCollection />
    </div>
  );
}

export default App;
