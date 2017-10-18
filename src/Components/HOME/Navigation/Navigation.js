import React from 'react';
import MobileMenu from './MobileMenu';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="navigation-bar">
          <div className="navigation-title"><Link to="/"> SPORTA </Link></div>
          <div className="nav">
            <div className="nav-item"><Link to="/about">About</Link></div>
            <div className="nav-item"><Link to="/system">System</Link></div>
            <div className="nav-item"><Link to="/contact">Contact</Link></div>
          </div>
        </div>
        <MobileMenu />
      </div>
    )
  }
}
