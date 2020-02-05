import { useState, useEffect } from 'react';
import { getFacts } from '../services/catFactApi.js';
import Fact from '../components/fact/Fact.jsx';

export const useFacts = () => {
  const [factList, setFactList] = useState([]);
  const [numOfFacts, setNumOfFacts] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  const onClick = () => {
    getFacts()
      .then(facts => {
        const matches = facts.filter(fact => fact.text.includes(searchTerm)).map(fact => fact.text);
        const numOfMatches = [];
        for(let i = 0; i < numOfFacts; i++){
          numOfMatches.push(matches[Math.floor(Math.random() * matches.length)]);
        }
        setFactList(numOfMatches);
      })
  }

  return { factList, setNumOfFacts, setSearchTerm, onClick };
}