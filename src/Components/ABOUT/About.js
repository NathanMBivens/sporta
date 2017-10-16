import React from 'react';
import Navigation from '../HOME/Navigation/Navigation';
import Footer from '../HOME/Navigation/Footer';
import Banner from './Banner/Banner';
import SportaDirectors from './AboutTeam/SportaDirectors';
import SportaTeam from './AboutTeam/SportaTeam';
import SportaTeam2 from './AboutTeam/SportaTeam2';
import SportaTeamEnd from './AboutTeam/SportaTeamEnd';
import Form from '../HOME/Form/Form';
import Style from '../../styles/style.scss';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Banner title="ABOUT US" photo="sporta_team.jpg" />
        <SportaDirectors />
        <SportaTeam />
        <SportaTeam2 />
        <Form />
        <Footer />
      </div>
    )
  }
}
