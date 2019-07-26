import actionTypes from '../constants/actions';
import { TRANSACTION_FILTERS } from '../constants/transactions';
import { webSocket } from '../constants/url';
import { loadingStarted, loadingFinished } from './loading';
import { getAddressDataAPI } from '../utils/api';

let connection;

export const addTransaction = data => ({
  data,
  type: actionTypes.example,
});

export const loadAccount = ({
  address, limit=50, offset=0, filter=TRANSACTION_FILTERS.ALL,
}) =>
  (dispatch, getState) => {
    dispatch(loadingStarted('account'));
    getAddressDataAPI({ address, params: { limit, offset, filter } })
      .then((response) => {
        if(!connection) {
          connection = new WebSocket(webSocket);
  
          connection.onopen = (evt) => { 
            connection.send(JSON.stringify({ op: 'addr_sub', addr: address }));
          };
  
          connection.onmessage = (response) => {
            dispatch({
              data: JSON.parse(response.data).x,
              type: actionTypes.addTransaction,
            });
          };
        }

        dispatch({
          data: {
            ...response.data,
          },
          type: actionTypes.searchAccount,
        });
        dispatch(loadingFinished('account'));
      });
  };