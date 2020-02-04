import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header.jsx'
import Fact from '../components/fact/Fact.jsx'
import Footer from '../components/footer/Footer.jsx'
import { getFact } from '../services/catFactApi.js';
import styles from './CatFacts.css';

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
    <>
      <Header />
      <button styleName={styles.button} onClick={changeFact}>Get new fact!</button>
      <Fact fact={fact}/>
      <Footer />
    </>
  )
}

export default CatFacts;
