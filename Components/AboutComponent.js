import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './ABOUT/About';

export default class AboutComponent extends React.Component {
  render() {
      return (
      <div>
        <About/>
      </div>
    )
  }
};
