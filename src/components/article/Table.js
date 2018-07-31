import React, { PropTypes } from 'react';
import Row from './Row';

const Table = ({articles}) => {
  return (
    <table className="table table-sm table-striped table-dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Points</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {articles.map(article =>
        <Row key={article.id} article={article}/>
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Table;
