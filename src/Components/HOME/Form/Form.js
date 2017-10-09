import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div className="email-form">
        <div className="form-heading">
          What Can We Do For You?
        </div>
        <div className="form-subheading">
          Fill out the options below for your custom quote.
        </div>
        <div className="form-section-container">
          <form className="sign-up-form">
            <div className="sign-up-container">

              <label>First Name</label>
              <input type="text" placeholder="First Name" name="first-name" />

              <label>Last Name</label>
              <input type="text" placeholder="Last Name" name="last-name" />

              <label>Email</label>
              <input type="email" placeholder="Enter Email" name="email" />

              <div className="button-group">
                <button type="button" className="cancel-button"> Cancel</button>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
