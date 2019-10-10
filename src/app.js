// Libaries
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Sass
import './styles/styles.scss';

const ExpensiftyDashboardPage = () => <p>Expensify Dashboard</p>;
const AddExpensePage = () => <p>Add Expense</p>;
const EditExpensePage = () => <p>Edit Expense</p>;
const HelpPage = () => <p>Help page</p>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpensiftyDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
