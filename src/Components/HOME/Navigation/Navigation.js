import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="navigation-bar"> Navigation
          <div className="nav">
            <div className="nav-item">About</div>
            <div className="nav-item">Therapy</div>
            <div className="nav-item">Training</div>
            <div className="nav-item">Contact</div>
          </div>
        </div>
      </div>
    )
  }
}
