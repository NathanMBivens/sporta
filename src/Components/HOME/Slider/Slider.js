import React from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightButton from './RightButton';
import LeftButton from './LeftButton';
import Dots from './Dots';
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
      if(this.state.slideCount !==3) {
      this.setState({slideCount: this.state.slideCount + 1});

    } else {
      this.setState({slideCount: 1});
      }
    }

    previousSlide() {
      if(this.state.slideCount !== 1) {
      this.setState({slideCount: this.state.slideCount - 1})
    } else {
      this.setState({slideCount: 3});
    }
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
