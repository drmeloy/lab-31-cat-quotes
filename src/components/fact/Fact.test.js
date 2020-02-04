import React from 'react'
import { shallow } from 'enzyme';
import Fact from './Fact.jsx';

describe('Fact component', () => {
  it('renders a Fact', () => {
    const wrapper = shallow(<Fact quote={''} />);
    expect(wrapper).toMatchSnapshot;
  });
});
