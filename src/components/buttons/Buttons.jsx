import React, { useState, useEffect } from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import FactSearch from './FactSearch.jsx';
import NewFactButton from './NewFactButton.jsx';
import { getFact } from '../../services/catFactApi';

const Buttons = ({ setNumOfFacts, setSearchTerm }) => {
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
      <NewFactButton />
    </>
  );
}

export default Buttons;
