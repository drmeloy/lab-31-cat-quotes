import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header.jsx'
import Fact from '../components/fact/Fact.jsx'
import Footer from '../components/footer/Footer.jsx'
import { getFact } from '../services/catFactApi.js';

const CatFacts = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    getFact()
      .then(fact => setFact(fact));
  }, []);

  const changeFact = () => {
    getFact()
      .then(fact => setFact(fact));
  }

  return (
    <div>
      <button onClick={changeFact}>Get new fact!</button>
      <Header />
      <Fact fact={fact}/>
      <Footer />
    </div>
  )
}

export default CatFacts;
