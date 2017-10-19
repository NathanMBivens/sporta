import React from 'react';
import 'jquery';
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
      slideDirection: "right",
      slides: ['sporta_cycle.jpg', 'sporta_boxing.jpg', 'sporta_track.jpg']
    };

      this.nextSlide = this.nextSlide.bind(this);
      this.previousSlide = this.previousSlide.bind(this);
  }


    nextSlide() {
      var nextSlide = this.state.slideCount + 1 < this.state.slides.length ?
      this.state.slideCount + 1  : 0;
      this.setState({slideCount : nextSlide});
      this.setState({slideDirection: "right"});

    }

    previousSlide() {
      var previousSlide = this.state.slideCount - 1 < 0 ?
      this.state.slides.length - 1 : this.state.slideCount - 1;
      this.setState({slideCount : previousSlide});
      this.setState({slideDirection: "left"});
  }

  render() {
    var style = {
      backgroundImage: 'url(' + require('../../../images/'+this.state.slides[this.state.slideCount]) + ')'
    }

    return (
      <div className="slider">

          <CSSTransitionGroup
            transitionName={this.state.slideDirection === "right" ? 'carousel' : 'reverse-carousel'}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            component="div"
            className="slide"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            >
            <div className="slide" data-slide={this.state.right} style={style} key={this.state.slideCount}></div>
            <RightButton nextSlide={this.nextSlide}/>
            <LeftButton previousSlide={this.previousSlide}/>
            <Dots amount={this.state.slides.length} current={this.state.slideCount} />
          </CSSTransitionGroup>

      </div>
    );
  }
}
