import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/toastr/build/toastr.min.css';
import { loadArticles } from './actions/article';

const store = configureStore();

store.dispatch(loadArticles());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
