import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="sporta-banner">
        <div className="banner-title">{this.props.title}</div>
      </div>
    );
  }
}
