import { getFact } from "./catFactApi";

export const changeFact = () => {
  getFact()
    .then(fact => setFact(fact));
};
