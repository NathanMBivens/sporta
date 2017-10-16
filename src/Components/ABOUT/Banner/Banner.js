import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Banner extends React.Component {
  render() {
    var style = {
      backgroundImage: 'linear-gradient(rgba(0, 187, 227, .2), rgba(240, 222, 113, .3)), url(' + require('../../../images/' + this.props.photo + '') + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };
    return (
      <div className="sporta-banner" style={style}>
        <div className="banner-title">{this.props.title}</div>
      </div>
    );
  }
}
