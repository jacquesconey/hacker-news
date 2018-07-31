import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Row = ({ article }) => {
  return (
    <tr className="article">
      <td className="title"><a href={article.url} target="_blank">{article.title}</a></td>
      <td className="author">{article.by}</td>
      <td className="score">{article.score}</td>
      <td className="comments">{article.kids ? <Link to={`/comments/${article.id}`}>{article.kids.length}</Link> : ""}</td>
    </tr>
  );
};

Row.propTypes = {
  article: PropTypes.object.isRequired
};

export default Row;
