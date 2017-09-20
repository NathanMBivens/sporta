import React, { Component } from 'react';

const SlideOne = (props) => {
  let background = {
    backgroundImage: 'url('+ require('../../../images/sporta_boxing.jpeg') +')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return <div className="slide" style={background}> </div>

}

export default SlideOne;
