import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AppComponent from './Components/AppComponent';
import AboutComponent from './Components/AboutComponent';
import SystemComponent from './Components/SYSTEM/SystemComponent';
import ContactComponent from './Components/ContactComponent';

export default class SportaApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AppComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/system" component={SystemComponent} />
          <Route exact path="/contact" component={ContactComponent} />

        </div>
      </Router>
    )
  }
}
