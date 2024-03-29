import './css/index.css';
import About from './About';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import theme from './Theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ScrollToTop from './ScrollToTop';


class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop/>
          <div>
            <Switch>
              <Route exact path="/" component={About} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

render(<Home />, document.getElementById('root'));