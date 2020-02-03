export const getFact = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
    .then(({ all }) => all[Math.floor(Math.random() * all.length)].text);
};
