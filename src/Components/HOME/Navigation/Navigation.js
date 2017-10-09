import React from 'react';
import MobileMenu from './MobileMenu';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="navigation-bar">
          <div className="navigation-title"> SPORTA </div>
          <div className="nav">
            <div className="nav-item">About</div>
            <div className="nav-item">Therapy</div>
            <div className="nav-item">Training</div>
            <div className="nav-item">Contact</div>
          </div>
        </div>
        <MobileMenu />
      </div>
    )
  }
}
