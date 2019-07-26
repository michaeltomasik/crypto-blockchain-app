import React, { PropTypes } from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

import AccountDetails from './index';
import configureStore from 'redux-mock-store'
 
// create any initial state needed
const initialState = {
  account: {
    hash160: "8d5ead745127f0fdd0f8b4c3bf3987f90f75cc34",
    address: "3EaWcuNXQrW2JTGy5Cotm4pftovW8UfR2o",
    n_tx: 15808,
    total_received: 11851468851871,
    total_sent: 9660642776038,
    final_balance: 2190826075833,
    txs: [{
      ver: 2,
      weight: 756,
      inputs: [
        {
          prev_out: {
            spent: true,
            tx_index: 473608662,
            type: 0,
            addr: "12RqpZJ53TKTyNF6rm73YNvALqGbQH22d6",
            value: 54182667,
          }
        }
      ],
      out: [
        {
          spent: false,
          tx_index: 473611336,
          type: 0,
          addr: "3EaWcuNXQrW2JTGy5Cotm4pftovW8UfR2o",
          value: 54154317,
        }
      ],
      block_height: 587184,
      relayed_by: "0.0.0.0",
      lock_time: 0,
      result: 0,
      size: 189,
      block_index: 1775512,
      time: 1564176268,
    }]
  },
  loading: {},
};
const mockStore = configureStore();

let wrapper;
let store;

it('renders AccountDetails with data', () => {
  store = mockStore(initialState);
  wrapper = shallow(
    <MemoryRouter>
      <AccountDetails store={store}/>
    </MemoryRouter>
  );
  expect(wrapper.html()).toMatchSnapshot();
});

it('renders AccountDetails with no data', () => {
  store = mockStore({ account: {}, loading: {} });

  wrapper = shallow(
    <MemoryRouter>
      <AccountDetails store={store}/>
    </MemoryRouter>
  );
  expect(wrapper.html()).toMatchSnapshot();
});
