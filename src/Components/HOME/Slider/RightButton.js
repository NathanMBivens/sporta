import React from 'react';


export default class RightButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (

      <div className="nextSlide" onClick={this.props.nextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>

    )
  }
}
