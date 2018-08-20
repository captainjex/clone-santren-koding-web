import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
