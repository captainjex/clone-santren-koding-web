import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import Header from './components/Header'
import Hero from './components/Hero'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
      </div>
    );
  }
}

export default App;
