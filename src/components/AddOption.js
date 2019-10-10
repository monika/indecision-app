import React from 'react';

// Add option component, render static text
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = event => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // Error state for this component, since it's only for this form
    this.setState(() => ({ error: error }));

    // Clear input if option added successfully
    if (!error) {
      event.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <form className="add-option" onSubmit={this.handleAddOption}>
        {this.state.error && (
          <p className="add-option error">{this.state.error}</p>
        )}
        <div className="add-option__form">
          <label className="add-option__label" htmlFor="option">
            Option
          </label>
          <input
            className="add-option__input"
            placeholder="Starbucks"
            name="option"
            type="text"
          />
          <button className="button button--special">Add Option</button>
        </div>
      </form>
    );
  }
}
