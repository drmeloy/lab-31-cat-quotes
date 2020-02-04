import React from 'react'
import { shallow } from 'enzyme';
import CatFacts from './CatFacts.jsx';
import { getFact } from '../services/catFactApi.js';

jest.mock('../services/catFactApi.js');

describe('CatFacts container', () => {
  it('can change fact state', () => {
    const wrapper = shallow(<CatFacts />);
    const catFacts = wrapper.instance();

    return catFacts.changeFact()
      .then(() => {
        expect(wrapper.state('fact')).toEqual('Cats are friends, not food.');
      });

  });
});
