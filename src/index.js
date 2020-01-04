import './css/index.css';
import About from './About';
import Music from './music';
import Portfolio from './portfolio';
import * as serviceWorker from './serviceWorker';
import Navigation from './navigation';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App1 from './app1';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<Home />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
