import React from 'react';


export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-copyright"> Sporta, Inc. 2017 </div>
        <div className="footer-nav">
            <div className="nav-item">About</div>
            <div className="nav-item">Therapy</div>
            <div className="nav-item">Training</div>
            <div className="nav-item">Contact</div>
        </div>
      </div>
    )
  }
}
