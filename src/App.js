import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <p>Make a component that uses:</p>
            <li>Conditional Rendering</li>
            <li>Props</li>
            <li>State</li>
            <li>Lifecycle Methods</li>
          </ul>
      </header>
    </div>
  );
}

export default App;
