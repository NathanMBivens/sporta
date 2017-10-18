import React from 'react';
import Navigation from '../HOME/Navigation/Navigation';
import Footer from '../HOME/Navigation/Footer';
import Banner from '../ABOUT/Banner/Banner';
import Form from '../HOME/Form/Form';
import ContactInfo from './ContactInfo';
import Style from '../../styles/style.scss';
import {mobileMenu} from '../../javascript/MobileMenu';

export default class About extends React.Component {

  componentDidMount() {
    mobileMenu();
  }
  render() {
    return (
      <div>
        <Navigation />
        <Banner title="CONTACT US" photo="sporta_hand.jpg" />
        <ContactInfo />
        <Form />
        <Footer />
      </div>
    )
  }
}
