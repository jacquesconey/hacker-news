import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <IndexLink className="navbar-brand" to="/">Hacker News</IndexLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <IndexLink className="nav-link" to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" activeClassName="active">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/top" activeClassName="active">Top</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
