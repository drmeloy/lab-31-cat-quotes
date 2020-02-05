import React from 'react';

const QuantitySelector = ({ numOfFacts, changeNumber }) => (
  <input type='number' value={numOfFacts} onChange={changeNumber} />
);

export default QuantitySelector;
