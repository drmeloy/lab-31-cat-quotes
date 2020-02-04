import React, { Component, useState, useEffect } from 'react'
import Header from '../components/header/Header.jsx'
import Fact from '../components/fact/Fact.jsx'
import Footer from '../components/footer/Footer.jsx'
import { getFact } from '../services/catFactApi.js';

export default class CatFacts extends Component {
  state = {
    fact: ''
  }

  componentDidMount() {
    this.changeFact();
  }

  changeFact = () => {
    return getFact()
      .then(fact => this.setState({ fact }));
  }

  render(){
    return (
      <>
        <Header />
        <button onClick={this.changeFact}>Get new fact!</button>
        <Fact fact={this.state.fact}/>
        <Footer />
      </>
    )
  }
};
