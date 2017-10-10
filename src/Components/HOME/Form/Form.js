import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div className="email-form">
        <div className="form-heading">
          What Can We Do For You?
        </div>
        <div className="form-subheading">
          Subscribe to our email list for a custom quote.
        </div>
        <div className="form-section-container">
          <form className="sign-up-form">
            <div className="sign-up-container">

            <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" name="first-name" />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" name="last-name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" name="email" />
            </div>

            <div className="option-button-section">
                <div className="option-button-group">
                  <input type="checkbox" className="option-button" id="sportsTherapy" value="sportsTherapy"/>
                  <div className="option-custom"></div>
                  <label htmlFor="sportsTherapy"><span className="checkbox"> Sports Therapy</span></label>
                </div>
                <div className="option-button-group">
                  <input type="checkbox" className="option-button" id="sportsTraining" value="sportsTraining"/>
                  <div className="option-custom"></div>
                  <label htmlFor="sportsTraining"> Sports Training</label>
                </div>
                <div className="option-button-group">
                  <input type="checkbox" className="option-button" id="completeRecovery" value="completeRecovery"/>
                  <div className="option-custom"></div>
                  <label htmlFor="completeRecovery"> Complete Recovery</label>
                </div>
                <div className="option-button-group">
                  <input type="checkbox" className="option-button" id="nutritionPlanning" value="nutritionPlanning"/>
                  <div className="option-custom"></div>
                  <label htmlFor="nutritionPlanning"> Nutrition Planning</label>
                </div>
              </div>

              <div className="button-group">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
