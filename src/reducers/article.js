import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.articles, action) => {
  switch (action.type) {
    case types.LOAD_TOP_ARTICLES:
      return action.articles;

    default:
      return state;
  }
};
