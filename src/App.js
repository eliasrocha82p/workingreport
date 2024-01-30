import './App.css';
import React from 'react';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <HashRouter>
    <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
  </HashRouter>
          );
  }
}

export default App;