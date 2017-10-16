import React from 'react';

export default class SportaTeam extends React.Component {
  render() {

    var style = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_8.jpg') + ')'
    }
    return (
      <div className="team-ending-section">
        <div className="team-ending-title"></div>
      </div>
    )
  }
}
