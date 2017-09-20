import React, { Component } from 'react';

const SlideThree = (props) => {
  let background = {
    backgroundImage: 'url('+ require('../../../images/sporta_track.jpeg') +')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return <div className="slide" style={background}> </div>

}

export default SlideThree;
