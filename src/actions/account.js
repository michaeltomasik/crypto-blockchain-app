import actionTypes from '../constants/actions';
import { getAddressDataAPI } from '../utils/api';

export const searchTransaction = data => ({
  data,
  type: actionTypes.example,
});

export const loadAccount = ({
  address, limit=50, offset=0,
}) =>
  (dispatch, getState) => {
    // dispatch(loadingStarted());
    getAddressDataAPI({ address, limit, offset })
      .then((response) => {
        dispatch({
          data: {
            ...response.data,
          },
          type: actionTypes.searchAccount,
        });
        // dispatch(loadingFinished());
      });
  };