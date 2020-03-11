import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">

            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </div>
      </div>
      <div className="row">
        <div className="col">
          
        </div>
        <div className="col">
          
        </div>
      </div>
      
      <div id="overlayGrid"></div>
    </div>
  );
}

export default App;
