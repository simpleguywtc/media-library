import React from 'react';
import { IndexLink, Link } from 'react-router';

export default const Header = () => {
  <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>
  </div>
};