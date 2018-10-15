import { shallow } from 'enzyme';
import React from 'react';
import Index from '../../src/pages';

describe('<Index />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toMatchSnapshot();
  });
});
