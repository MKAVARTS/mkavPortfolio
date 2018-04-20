import React, { Component } from 'react';
import Home from './routes/Home';
import Work from './routes/Work';
import './App.css';
import Routes from './routes';


class App extends Component {
  render() {
    return (
      <div>
      <Routes />
      </div>
    );
  }
}

export default App;
