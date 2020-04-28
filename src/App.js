import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          convert low-carb sweeteners
        </p>
      </header>
      <body className="App-body">
        <div className="Calculator">
          <div className="Display">
             ticker 
          </div>
            <table className="Keypad">
              <tr>
                <td className="Unit"> big </td>
                <td> 1 </td>
                <td> 2 </td>
                <td> 3 </td>
                <td className="Operator"> / </td>
              </tr>
              <tr>
                <td className="Unit"> med </td>
                <td> 4 </td>
                <td> 5 </td>
                <td> 6 </td>
                <td className="Operator"> x </td>
              </tr>
              <tr>
                <td className="Unit"> small </td>
                <td> 7 </td>
                <td> 8 </td>
                <td> 9 </td>
                <td className="Operator">- </td>
              </tr>
              <tr>
                <td> ac </td>
                <td> . </td>
                <td> 0 </td>
                <td> x/y </td>
                <td className="Operator"> + </td>
              </tr>
            </table>
        </div>
      </body>
    </div>
  );
}

export default App;
