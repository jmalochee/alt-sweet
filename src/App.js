import React from 'react';
import Calculator from "./components/Calculator"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
          xSweet: your calculator for low-carb sweeteners
      </header>
      <div className="App-body">
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
