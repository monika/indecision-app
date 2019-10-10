import React from 'react';

const Action = props => (
  <button
    className="button button--big button--special"
    disabled={!props.hasOptions}
    onClick={props.handlePick}
  >
    What should I do?
  </button>
);

export default Action;
