import React from 'react';

// Option component
const Option = props => (
  <li className="options__option">
    <span className="options__text">{props.optionText}</span>
    <button
      className="button button--small"
      onClick={event => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </li>
);

export default Option;
