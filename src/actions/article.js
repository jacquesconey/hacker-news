import * as types from './actionTypes';
import api from '../api/hackerNews';

export const loadTopArticlesSucess = articles => {
  return { type: types.LOAD_TOP_ARTICLES , articles };
};

export const loadArticles = () => {
  let articles = [];
  return (dispatch) => {
    return api.getArticles().then(ids => {
      ids.forEach(id => {
        api.getArticleById(id).then(article => {
          articles.push(article);      
        });
      });
      dispatch(loadTopArticlesSucess(articles));      
    }).catch(error => {
      throw(error);
    });
  };
};

