import './css/index.css';
import About from './webpages/About';
import Music from './webpages/music';
import Portfolio from './webpages/portfolio';
import * as serviceWorker from './serviceWorker';
import Navigation from './navigation';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



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

        {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
        <div>
          <Navigation/>
          <Route exact path="/" component={About} />
          <Route path="/music" component={Music} />
          <Route path="/portfolio" component={Portfolio}/>
        </div>
      </Router>
    );
  }
}

render(<Home />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
