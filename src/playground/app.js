// Class OR Function-based component
// Class is SMART, Function is stupid
// Class based component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };

    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

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

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    // if no options
    if (!option) {
      return 'Enter valid option';
      // `indexOf > -1` checks that a thing exists in an array, a match exists
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  render() {
    return (
      <div id='indecision-app'>
        <Header />
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
    );
  }
}

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.subtitle && <p>{props.subtitle}</p>}
    </header>
  );
};

Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.'
};

const Action = props => {
  return (
    <button disabled={!props.hasOptions} onClick={props.handlePick}>
      What should I do?
    </button>
  );
};

// List of options, renders static text
const Options = props => {
  return (
    <div className='options__list'>
      {props.options.length === 0 && <p>Please enter an option.</p>}
      {props.options.length != 0 && (
        <button onClick={props.handleDeleteOptions}>Remove All</button>
      )}
      <ol>
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
};

// Option component
const Option = props => {
  return (
    <li>
      {props.optionText}
      <button
        onClick={event => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </li>
  );
};

// Add option component, render static text
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // Error state for this component, since it's only for this form
    this.setState(() => ({ error: error }));

    // Clear input if option added successfully
    if (!error) {
      event.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        <label htmlFor='option'>Option name</label>
        <input name='option' type='text' />
        <button>Add Option</button>
      </form>
    );
  }
}

// Stateless functional component
// doesn't allow for states / presentational components
// "very simple and very stupid components"
// Faster than class based components

/*const User = props => {
  return (
    <dl>
      <dt>Name:</dt>
      <dd>{props.name}</dd>
      <dt>Age:</dt>
      <dd>{props.age}</dd>
    </dl>
  );
};*/

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
