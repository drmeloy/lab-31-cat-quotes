export const getFacts = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
    .then(data => data.all);
};
