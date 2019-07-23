import actionTypes from '../../constants/actionTypes';

const example = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.test:
      return { ...state };
    default:
      return state;
  }
};

export default example;