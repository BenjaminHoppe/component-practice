import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ul>
            <Toggle>
              <h1>Hey</h1>
            </Toggle>
            <p>Make a component that uses:</p>
            <li><s>Conditional Rendering</s></li>
            <li><s>Props</s></li>
            <li><s>State</s></li>
            <li>Use <code>fetch</code> & <code>componentDidMount</code></li>
            <li>To make toggle render data from <a target="_blank" href="https://openweathermap.org/api">here</a></li>
          </ul>
      </header>
    </div>
  );
}

export default App;
