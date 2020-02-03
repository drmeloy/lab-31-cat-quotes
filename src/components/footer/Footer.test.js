import React from 'react'
import { shallow } from 'enzyme';
import Footer from './Footer.jsx';

describe('Footer component', () => {
  it('renders a Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot;
  });
});
