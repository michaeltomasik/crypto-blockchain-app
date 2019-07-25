import actionTypes from '../../constants/actions';

const loading = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.loadingStarted:
      return { [action.data]: true };
    case actionTypes.loadingFinished:
      return { [action.data]: false };
    default:
      return state;
  }
};

export default loading;