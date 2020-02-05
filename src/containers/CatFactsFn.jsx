import React from 'react'
import Header from '../components/header/Header.jsx'
import Fact from '../components/fact/Fact.jsx'
import Footer from '../components/footer/Footer.jsx'
import Buttons from '../components/buttons/Buttons.jsx';
import { useFacts } from '../hooks/facts.js';

const CatFacts = () => {
  const { factList, numOfFacts, setNumOfFacts, setSearchTerm, onClick } = useFacts();

  const factListDisplay = factList.map((fact) => (
      <Fact key={fact} fact={fact}></Fact>
    ));

  return (
    <>
      <Header />
      <Buttons numOfFacts={numOfFacts} setNumOfFacts={setNumOfFacts} setSearchTerm={setSearchTerm} onClick={onClick} />
      {factListDisplay}
      <Footer />
    </>
  )
}

export default CatFacts;
