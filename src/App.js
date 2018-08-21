import React, { Component } from 'react';

import Header from './components/Header'
import Hero from './components/Hero'
import Kajian from './components/Kajian'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <Kajian></Kajian>
      </div>
    );
  }
}

export default App;
