import React, { Component } from 'react';
import Home from './routes/Home';
import Work from './routes/Work';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* < Home /> */}
        <Work />
      </div>
    );
  }
}

export default App;
