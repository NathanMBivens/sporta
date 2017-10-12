import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AppComponent from './Components/AppComponent';
import AboutComponent from './Components/AboutComponent';

export default class SportaApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AppComponent} />
          <Route exact path="/about" component={AboutComponent} />
        </div>
      </Router>
    )
  }
}
