import React from 'react'
import { shallow } from 'enzyme';
import CatFacts from './CatFacts.jsx';
import Fact from '../components/fact/Fact.jsx';
import { getFact } from '../services/catFactApi.js';

jest.mock('../services/catFactApi.js');

describe('CatFactsFn container', () => {
  it('can change the fact on click', (done) => {
    const wrapper = shallow(<CatFacts />);
    const button = wrapper.find('button');
    button.simulate('click');

    expect(getFact).toHaveBeenCalled();

    setTimeout(() => {
      expect(wrapper.find(Fact).prop('fact')).toEqual('Cats are friends, not food.');
      done();
    }, 0)
  });
});