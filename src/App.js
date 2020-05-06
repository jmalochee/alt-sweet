import React from 'react';
import Calculator from "./components/Calculator"
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
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
