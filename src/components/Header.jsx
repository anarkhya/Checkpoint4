import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header-links">
        <Link to="/Home">
          <p>Home</p>
        </Link>
        <Link to="/ItemList">
          <p>Item List</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
