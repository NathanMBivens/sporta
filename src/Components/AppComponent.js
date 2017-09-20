import React from 'react';
import Style from '../styles/style.scss';
import Navigation from './HOME/Navigation/Navigation';
import Slider from './HOME/Slider/Slider';

export default class AppComponent extends React.Component {
  render() {
      return (
        <div>
          <Navigation />
          <Slider />
        </div>
      )
  }
}
