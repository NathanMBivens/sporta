import React from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightButton from './RightButton';
import LeftButton from './LeftButton';
import Dots from './Dots';
import axios from 'axios';
import sliderImages from '../../../sliderImages.json';


export default class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    };

      this.nextSlide = this.nextSlide.bind(this);
      this.previousSlide = this.previousSlide.bind(this);
  }


    nextSlide() {
      this.setState({slideCount: this.state.slideCount + 1})
    }

    previousSlide() {
      this.setState({slideCount: this.state.slideCount - 1})
    }

  render() {
    return (
      <div className="slider">
          {this.state.slideCount === 1 ? <SlideOne /> : null}
          {this.state.slideCount === 2 ? <SlideTwo /> : null}
          {this.state.slideCount === 3 ? <SlideThree /> : null}
          <RightButton nextSlide={this.nextSlide}/>
          <LeftButton previousSlide={this.previousSlide}/>
      </div>
    );
  }
}
