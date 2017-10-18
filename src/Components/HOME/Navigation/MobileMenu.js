import React from 'react';
import MobileMenu from './MobileMenu';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class MobileMenuBar extends React.Component {
  render() {
    return (
      <div className="mobile-navigation-wrapper">
      <div className="mobile-menu-navigation" id="topMobileNav">

        <i className="hamburger fa fa-2x fa-bars" aria-hidden="true"></i>
        <i className="exit fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
        <div className="mobile-nav">
            <div className="navItem"><Link to="/">Home</Link></div>
            <div className="navItem"><Link to="/about">About</Link></div>
            <div className="navItem"><Link to="/system">System</Link></div>
            <div className="navItem"><Link to="/contact">Contact</Link></div>
        </div>
      </div>
      </div>
    )
  }
}
