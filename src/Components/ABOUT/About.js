import React from 'react';
import Navigation from '../HOME/Navigation/Navigation';
import Footer from '../HOME/Navigation/Footer';
import Banner from './Banner/Banner';
import SportaDirectors from './AboutTeam/SportaDirectors';
import Style from '../../styles/style.scss';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner title="ABOUT US" />
        <SportaDirectors />
        <Footer />
      </div>
    )
  }
}
