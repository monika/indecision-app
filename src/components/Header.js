import React from 'react';

const Header = props => (
  <header className='header'>
    <div className='container'>
      <h1 className='header__title'>{props.title}</h1>
      {props.subtitle && <p className='header__subtitle'>{props.subtitle}</p>}
    </div>
  </header>
);

Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.'
};

export default Header;
