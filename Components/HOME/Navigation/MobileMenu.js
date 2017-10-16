import React from 'react';

export default class MobileMenuBar extends React.Component {
  render() {
    return (
      <div className="mobile-navigation-wrapper">
      <div className="mobile-menu-navigation" id="topMobileNav">

        <i className="hamburger fa fa-2x fa-bars" aria-hidden="true"></i>
        <i className="exit fa fa-times-circle-o fa-2x" aria-hidden="true"></i>
        <div className="mobile-nav">
            <a className="navItem" href="#about">About</a>
            <a className="navItem" href="#therapy">Therapy</a>
            <a className="navItem" href="#training">Training</a>
            <a className="navItem" href="#contact">Contact</a>
        </div>
      </div>
      </div>
    )
  }
}
