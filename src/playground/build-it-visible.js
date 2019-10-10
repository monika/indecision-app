// Build Visibility Toggle App

// Visibility Toggle - render, constructor, handleToggleVisibility
// visibility: false

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div className='visible'>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            numquam enim alias, nulla ipsa commodi error? Incidunt, asperiores
            laborum hic aspernatur fugit, aliquid nostrum pariatur illum,
            ducimus ea sed sunt!
          </p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
