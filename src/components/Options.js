import React from 'react';
import Option from './Option';

// List of options, renders static text
const Options = props => (
  <div className="options">
    <div className="options__heading">
      <h3 className="options__title">Your Options</h3>
      {props.options.length != 0 && (
        <button
          className="button button--small"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      )}
    </div>

    {props.options.length === 0 && (
      <p className="options__placeholder">Please enter an option &#8628;</p>
    )}

    <ol className="options__list">
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
