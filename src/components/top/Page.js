import React, { PropTypes } from 'react'; 
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';  
import * as actions from '../../actions/article';
import ArticleTable from '../article/Table';

export class Page extends React.Component {  
  render() {
    return (
      <div>
        <h1>Articles</h1>
        <ArticleTable articles={this.props.articles}/>
      </div>
    );
  }
}

Page.propTypes = {
  actions: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    articles: state.articles
  };
} 

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);