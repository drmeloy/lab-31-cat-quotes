import React from 'react';
import PropTypes from 'prop-types';
import styles from './Fact.css';
import { useGetFact } from '../../hooks/facts';

function Quote({ fact }) {
  return (
    <div className={styles.Fact}>
      {fact}
    </div>
  )
}

Quote.propTypes = {
  fact: PropTypes.string.isRequired
}

export default Quote

