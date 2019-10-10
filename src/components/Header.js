import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink exact activeClassName="isActive" to="/">
        Dashboard
      </NavLink>{' '}
      <NavLink exact activeClassName="isActive" to="/create">
        Create Expense
      </NavLink>{' '}
      <NavLink exact activeClassName="isActive" to="/edit">
        Edit Expense
      </NavLink>{' '}
      <NavLink exact activeClassName="isActive" to="/help">
        Help
      </NavLink>
    </nav>
  </header>
);

export default Header;
