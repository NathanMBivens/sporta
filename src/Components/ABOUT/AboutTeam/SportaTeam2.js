import React from 'react';

export default class SportaTeam2 extends React.Component {
  render() {


    var jeremyStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_8.jpg') + ')'
    };
    var henryStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_7.jpg') + ')'
    };
    var oliviaStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_10.jpg') + ')',
      backgroundPosition: 'top'
    };
    var pauloStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_9.jpg') + ')',
      backgroundPosition: 'top'
    };

    return (
      <div className="directors-section-white">
        <div className="directors-container">

          <div className="directors-title-dark">Training & Wellness Team</div>

          <div className="directors-row-section">

            <div className="directors-row">
              <div className="director-image" style={jeremyStyle}>
              </div>
              <div className="director-name-dark"> Jeremy Hogdin</div>
              <div className="director-position"> Training Specialist </div>
              <div className="director-info-dark"> Jeremy has two masters degrees in both Exercise Science and Rehabilitation & Sports Science. </div>
              <div className="director-info-dark"> He worked for the New York Knicks basketball team in the 90s as a sports trainer.</div>
              <div className="director-info-dark"> He also worked with the championship LA Lakers in 2000-2006 as a trainer. </div>
              <div className="director-info-dark"> He worked as a private health trainer up until 2010, when he joined Sporta. </div>
            </div>

            <div className="directors-row">
              <div className="director-image" style={henryStyle}>
              </div>
              <div className="director-name-dark"> Henry Hodge</div>
              <div className="director-position"> Training Specialist</div>
              <div className="director-info-dark"> Henry has two undergraduate degrees from The University of North Carolina in Sports Therapy & Sports Medicine.</div>
              <div className="director-info-dark"> He worked for the North Carolina basketball team for three years.</div>
              <div className="director-info-dark"> He has his masters degree in Exercise Science from UNC.</div>

            </div>

            <div className="directors-row">
              <div className="director-image" style={oliviaStyle}>
              </div>
              <div className="director-name-dark"> Olivia Wells </div>
              <div className="director-position"> Wellness Specialist </div>
              <div className="director-info-dark"> Olivia receive her masters in Nutrition from Oklahoma University in 2010.</div>
              <div className="director-info-dark"> She also has her undergraduate degree in Health & Wellness.</div>

            </div>

            <div className="directors-row">
              <div className="director-image" style={pauloStyle}>
              </div>
              <div className="director-name-dark"> Paulo Yachturo </div>
              <div className="director-position"> Wellness Specialist </div>
              <div className="director-info-dark"> Paulo received his masters in Health & Wellness from Purdue University in 2011.</div>
              <div className="director-info-dark"> He has worked with Sporta for five years.</div>

            </div>


          </div>

        </div>

      </div>
    )
  }
}
