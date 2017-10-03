import React from 'react';
import 'jquery';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightButton from './RightButton';
import LeftButton from './LeftButton';
import Dots from './Dots';
import sliderImages from '../../../sliderImages.json';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideCount: 0,
      slides: ['sporta_cycle.jpeg', 'sporta_boxing.jpeg', 'sporta_track.jpeg']
    };

      this.nextSlide = this.nextSlide.bind(this);
      this.previousSlide = this.previousSlide.bind(this);
  }


    nextSlide() {
      var nextSlide = this.state.slideCount + 1 < this.state.slides.length ?
      this.state.slideCount + 1 : 0;
      this.setState({slideCount : nextSlide});
    }

    previousSlide() {
      var previousSlide = this.state.slideCount - 1 < 0 ?
      this.state.slides.length - 1 : this.state.slideCount - 1;
      this.setState({slideCount : previousSlide});
  }

  render() {
    var style = {
      backgroundImage: 'url(' + require('../../../images/'+this.state.slides[this.state.slideCount]) + ')'
    }

    return (
      <div className="slider">

          <CSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            component="div"
            className="slide"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            >
            <div className="slide" style={style} key={this.state.slideCount}></div>
            <RightButton nextSlide={this.nextSlide}/>
            <LeftButton previousSlide={this.previousSlide}/>
          </CSSTransitionGroup>

      </div>
    );
  }
}
