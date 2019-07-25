import actionTypes from '../constants/actions';
import { TRANSACTION_FILTERS } from '../constants/transactions';
import { loadingStarted, loadingFinished } from './loading';
import { getAddressDataAPI } from '../utils/api';

export const searchTransaction = data => ({
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
        dispatch({
          data: {
            ...response.data,
          },
          type: actionTypes.searchAccount,
        });
        dispatch(loadingFinished('account'));
      });
  };