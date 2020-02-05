import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import FactSearch from './FactSearch.jsx';
import NewFactButton from './NewFactButton.jsx';
import styles from './Buttons.css';

const Buttons = ({ numOfFacts, setNumOfFacts, setSearchTerm, onClick }) => {
  const changeNumber = (({ target }) => {
    setNumOfFacts(target.value);
  });

  const changeTerm = (({ target }) => {
    setSearchTerm(target.value);
  })

  return (
    <div className={styles.Buttons}>
      <p>How many awesome cat facts do you want to see?</p>
      <QuantitySelector numOfFacts={numOfFacts} changeNumber={changeNumber} />
      <p>Optional search term. For example, try 'Egypt'!</p>
      <FactSearch changeTerm={changeTerm} />
      <NewFactButton onClick={onClick} />
    </div>
  );
}

export default Buttons;
