import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <p className="App-intro">

          </p>
          <Footer />
      </div>
    );
  }
}

export default App;