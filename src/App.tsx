import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './containers/Home/Home';

function App() {
  return (
    <div
      className="container-fluid"
      style={{background: 'red', height: '100vh'}}
    >
      <div className="row">
        <div
          className="container"
          style={{background: 'blue', height: '100vh'}}
        >
          {/* whole application goes here */}
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
