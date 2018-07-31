import expect from 'expect';
import * as actions from './article';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Article Actions', () => {
  describe('loadArticles', () => {
    it('should create a LOAD_TOP_ARTICLES action', () => {
      const articles = [{id: '7', title: 'The best article ever'}];
      const expectedAction = {
        type: types.LOAD_TOP_ARTICLES,
        articles: articles
      };
      const action = actions.loadTopArticlesSucess(articles);

      expect(action).toEqual(expectedAction);
    });
  });
});
