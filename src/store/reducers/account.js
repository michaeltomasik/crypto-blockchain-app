import actionTypes from '../../constants/actions';

const account = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.searchAccount:
      return { ...action.data };
    default:
      return state;
  }
};

export default account;