import { useState, useEffect } from 'react';
import { getFacts } from '../services/catFactApi.js';

export const useFacts = () => {
  const [factList, setFactList] = useState([]);
  const [numOfFacts, setNumOfFacts] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  const onClick = () => {
    getFacts()
      .then(facts => {
        const matches = facts.filter(fact => fact.text.includes(searchTerm)).map(fact => fact.text);
        
        const numOfMatches = [];
        if(numOfFacts >= matches.length) setFactList(matches);
        else {
          for(let i = 0; i < numOfFacts; i++){
            numOfMatches.push(matches.splice(([Math.floor(Math.random() * matches.length)]), 1)[0]);
          }
          setFactList(numOfMatches);
        }
      })
  }

  return { factList, numOfFacts, setNumOfFacts, setSearchTerm, onClick };
}