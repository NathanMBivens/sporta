import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default class SystemExplanation extends React.Component {
  render() {
    var style = {
      backgroundImage: 'url(' + require('../../images/sporta_running_trail.jpg') + ')'
    };

    var style1 = {
      backgroundImage: 'url(' + require('../../images/sporta_squats.jpg') + ')'

    };

    var style2 = {
      backgroundImage: 'url(' + require('../../images/sporta_weights.jpg') + ')'
    };

    var style3 = {
      backgroundImage: 'url(' + require('../../images/sporta_training_bench.jpg') + ')'
    };
    return (
      <div className="system-section">

          <div className="system-image main-image" style={style}>
            <div className="system-image-text"> At Sporta, we always use a custom system for you.</div>
          </div>

        <div className="system-image" style={style1}>
          <div className="system-image-text"> We find the issue, its root cause, and the path forward.</div>
        </div>
        <div className="system-image" style={style2}>
          <div className="system-image-text"> Our team dedicates itself to a schedule and plan that produces proven results.</div>
        </div>
        <div className="system-image" style={style3}>
          <div className="system-image-text"> We combine our over 15 years of experience to get you going again.</div>
        </div>
      </div>
    )
  }
}
