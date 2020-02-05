import React, { useState, useEffect } from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import FactSearch from './FactSearch.jsx';
import NewFactButton from './NewFactButton.jsx';
import { onClick } from '../../hooks/facts.js';

const Buttons = ({ setNumOfFacts, setSearchTerm, onClick }) => {
  const changeNumber = (({ target }) => {
    setNumOfFacts(target.value);
  });

  const changeTerm = (({ target }) => {
    setSearchTerm(target.value);
  })

  return (
    <>
      <QuantitySelector changeNumber={changeNumber} />
      <FactSearch changeTerm={changeTerm} />
      <NewFactButton onClick={onClick} />
    </>
  );
}

export default Buttons;
