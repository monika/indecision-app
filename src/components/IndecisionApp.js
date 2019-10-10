import React from 'react';

// Components
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

// Class OR Function-based component
// Class is SMART, Function is stupid
// Class based component
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleClearOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    // use setState to set selectedOption boolean
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = option => {
    // if no options
    if (!option) {
      return 'Enter a valid option.';
      // `indexOf > -1` checks that a thing exists in an array, a match exists
    } else if (this.state.options.indexOf(option) > -1) {
      return 'That option already exists.';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  // Get options from localStorage
  componentDidMount() {
    // in case JSON data is incorrect
    try {
      const jsonOptions = localStorage.getItem('options');
      const options = JSON.parse(jsonOptions);
      // only set the options if they exist
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // do nothing at all
    }
  }
  // Update localstorage with options
  componentDidUpdate(prevProps, prevState) {
    // Only save data if the array changed
    if (prevState.options.length !== this.state.options.length) {
      const optionsArray = JSON.stringify(this.state.options);
      localStorage.setItem('options', optionsArray);
    }
  }

  render() {
    return (
      <div id="indecision-app">
        <Header />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearOption={this.handleClearOption}
        />
      </div>
    );
  }
}
