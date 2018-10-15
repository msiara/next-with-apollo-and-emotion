import { shallow } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import App from '../../src/pages/_app';

describe('<App />', () => {
  it('should match snapshot', () => {
    const props = {
      apolloClient: MockedProvider,
      Component: () => 'Component',
      pageProps: { title: 'Title' },
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
