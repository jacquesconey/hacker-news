import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/Page';
import TopPage from './components/top/Page';
import CommentsPage from './components/comment/Page';
import AboutPage from './components/about/Page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="top" component={TopPage}/> 
    <Route path="about" component={AboutPage}/> 
    <Route path="comments/:id" component={CommentsPage}/> 
  </Route>
);
