import React from 'react';
import Keypad from "./components/Keypad"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          convert low-carb sweeteners
        </p>
      </header>
      <div className="App-body">
        <div className="Calculator">
          <div id="Display">
             ticker 
          </div>
          <Keypad id="Keypad" />
        </div>
      </div>
    </div>
  );
}

export default App;
