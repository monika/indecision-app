import React from 'react';
import Modal from 'react-modal';

// '!!' creates a boolean value
const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearOption}
    contentLabel="Selected Option"
    closeTimeoutMS={300}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearOption}>
      Sounds Good!
    </button>
  </Modal>
);
export default OptionModal;
