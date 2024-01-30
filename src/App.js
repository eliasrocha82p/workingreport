import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <HashRouter>
    <Route
      exact
      path='/'
      component={Dashboard}
    />
    <Route
      exact
      path='/profile'
      component={Profile}
    />
  </HashRouter>
          );
  }
}

export default App;