import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
            <ul id="navigation">
              <li>home</li>
               <li>contact</li>
 <li>about</li>
            </ul>
          </div>
          );
  }
}

export default App;