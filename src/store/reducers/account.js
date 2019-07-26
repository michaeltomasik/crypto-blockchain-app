import actionTypes from '../../constants/actions';

const account = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.searchAccount:
      return { ...action.data };
    case actionTypes.addTransaction:
        return { ...state, txs: [action.data, ...state.txs ]};
    default:
      return state;
  }
};

export default account;