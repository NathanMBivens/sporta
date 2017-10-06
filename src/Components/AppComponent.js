import React from 'react';
import Style from '../styles/style.scss';
import Navigation from './HOME/Navigation/Navigation';
import Slider from './HOME/Slider/Slider';
import DoctorSection from './HOME/DoctorSection/DoctorSection';

export default class AppComponent extends React.Component {
  render() {
      return (
        <div>
          <Navigation />
          <Slider />
          <DoctorSection />
        </div>
      )
  }
}
