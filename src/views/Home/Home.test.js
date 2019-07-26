import React from 'react';
import { mount } from 'enzyme';

import Home from './index';

it('renders home page', () => {
  const wrapper = mount(
    <Home />
  );

  expect(wrapper.html()).toMatchSnapshot();
});
