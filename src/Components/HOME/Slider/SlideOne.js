import React, { Component } from 'react';


const SlideOne = (props) => {

  let background = {
    backgroundImage: 'url('+ require('../../../images/sporta_cycle.jpeg') +')',
    backgroundSize: 'cover',
  };

  return <div className="slide" style={background}> </div>

}

export default SlideOne;
