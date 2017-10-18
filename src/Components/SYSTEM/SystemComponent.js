import React from 'react';
import Navigation from '../HOME/Navigation/Navigation';
import Footer from '../HOME/Navigation/Footer';
import Banner from '../ABOUT/Banner/Banner';
import Form from '../HOME/Form/Form';
import SystemExplanation from './SystemExplanation';
import Style from '../../styles/style.scss';
import {mobileMenu} from '../../javascript/MobileMenu';

export default class SystemComponent extends React.Component {

  componentDidMount() {
    mobileMenu();
  }
  render() {
    return (
      <div>
        <Navigation />
        <Banner title="SPORTA SYSTEM" photo="sporta_city.jpg" />
        <SystemExplanation />
        <Form />
        <Footer />
      </div>
    )
  }
}
