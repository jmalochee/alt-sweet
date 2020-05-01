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
          <div className="Display">
             ticker 
          </div>
          <Keypad/>
        </div>
      </div>
    </div>
  );
}

export default App;
