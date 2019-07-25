import actionTypes from '../constants/actions';

export const loadingStarted = data => ({
  data,
  type: actionTypes.loadingStarted,
});

export const loadingFinished = data => ({
  data,
  type: actionTypes.loadingFinished,
});