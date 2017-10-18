import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Contact from './CONTACT/Contact';

export default class ContactComponent extends React.Component {
  render() {
      return (
      <div>
        <Contact />
      </div>
    )
  }
};
