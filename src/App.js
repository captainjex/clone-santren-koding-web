import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Header from './components/Header'
import Hero from './components/Hero'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <Button variant="contained" color="secondary">
          Default
        </Button>
      </div>
    );
  }
}

export default App;
