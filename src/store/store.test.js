import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/article';
import expect from 'expect';

describe('Store', () => {
  it('should handle loading articles', () => {
    const store = createStore(rootReducer, initialState);
    const article = {
      title: 'yay fun'
    };

    const action = actions.loadArticles();
    store.dispatch(action);

    const actual = store.getState().articles[0];
    const expected = {
      title: 'yay fun'
    };

    expect(actual).toEqual(expected);
  });
});