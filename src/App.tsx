import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          <div className="row">
            <nav
              className="col-3"
              style={{background: 'cyan', height: '100vh'}}
            ></nav>
            <main
              className="col-6"
              style={{background: 'yellow', height: '100vh'}}
            ></main>
            <aside
              className="col-3"
              style={{background: 'green', height: '100vh'}}
            ></aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
