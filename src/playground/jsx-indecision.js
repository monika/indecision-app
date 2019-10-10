console.log('app.js is running!');

const appRoot = document.getElementById('app');

const appInfo = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: []
};

const onFormSubmit = event => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    appInfo.options.push(option);
    event.target.elements.option.value = '';
  }

  render();
};

const formReset = () => {
  appInfo.options = [];
  render();
};

const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[randomNumber];
  alert(option);
};

const render = () => {
  const template = (
    <header>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}

      <p>
        {appInfo.options.length > 0
          ? 'Here are your options:'
          : 'No options available.'}
      </p>

      <button disabled={appInfo.options.length === 0} onClick={makeDecision}>
        What should I do?
      </button>

      <ol>
        {appInfo.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>

      <button className='button' onClick={formReset}>
        Remove All
      </button>

      <form onSubmit={onFormSubmit}>
        <label htmlFor='option'>Option name</label>
        <input name='option' type='text' />
        <button>Add Option</button>
      </form>
    </header>
  );

  ReactDOM.render(template, appRoot);
};

render();
