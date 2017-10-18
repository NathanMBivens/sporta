import React from 'react';

export default class ContactInfo extends React.Component {
  render() {
    return (
      <div className='contact-info-section'>
        <div className="contact-header">We are ready to go on this journey with you.</div>
        <div className='contact-info'>
          <h3>Telephone : </h3>
          <h2>555-5555</h2>
        </div>
        <div className='contact-info'>
          <h3>Email : </h3>
          <h2>info@sporta.com</h2>
        </div>
      </div>

    )
  }
}
