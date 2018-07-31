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
    it('should create a LOAD_TOP_ARTICLES_SUCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.LOAD_TOP_ARTICLES_SUCESS,
        articles: articles
      };
      const action = actions.loadArticles();

      expect(action).toEqual(expectedAction);
    });
  });
});

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Actions Thunk', () => {
    it('should create LOAD_COURSES_SUCCESS when loading articles', (done) => {
      nock('https://hacker-news.firebaseio.com/v0')
        .get('/topstories.json')
        .reply(200, { body: { articles: [1, 2, 3] }});

      const expectedActions = [
        { type: types.LOAD_TOP_ARTICLES_SUCESS, body: {articles: [1, 2, 3]} }
      ];
      const store = mockStore({articles: []}, expectedActions, done);
      store.dispatch(actions.loadArticles()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.LOAD_TOP_ARTICLES_SUCESS);
        done();
      });
    });
  });
});
