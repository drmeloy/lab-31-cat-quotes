import React, { useState } from 'react'
import Header from '../components/header/Header.jsx'
import Fact from '../components/fact/Fact.jsx'
import Footer from '../components/footer/Footer.jsx'

const CatFacts = () => {
  const [fact, setFact] = useState('');

  handleClick = () => {

  }

  fetch = () => {
    
  }

  return (
    <div>
      <button>Get new fact!</button>
      <Header />
      <Fact fact={fact}/>
      <Footer />
    </div>
  )
}

export default CatFacts;
