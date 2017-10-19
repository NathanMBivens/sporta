import React from 'react';
import Style from '../styles/style.scss';
import Navigation from './HOME/Navigation/Navigation';
import Slider from './HOME/Slider/Slider';
import DoctorSection from './HOME/DoctorSection/DoctorSection';
import Services from './HOME/Services/Services';
import Form from './HOME/Form/Form';
import Footer from './HOME/Navigation/Footer';
import {servicesText} from './HOME/Services/ServicesText';
import {mobileMenu} from '../javascript/MobileMenu';


export default class AppComponent extends React.Component {

  componentDidMount() {
    mobileMenu();
    servicesText();
  }

  render() {
      return (
        <div>
          <Navigation />
          <Slider />
          <DoctorSection />
          <Services />
          <Form />
          <Footer />
        </div>
      )
  }
}
