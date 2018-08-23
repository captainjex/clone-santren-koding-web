import React, { Component } from 'react';

import Header from './components/Header'
import Hero from './components/Hero'
import Kajian from './components/Kajian'
import SponsorAndPartner from './components/SponsorAndPartner'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <Kajian></Kajian>
        <hr/>
        <SponsorAndPartner/>
        <hr/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
