import React from 'react';


export default class Dots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dots: this.props.amount
    };
  }

  render() {
    let dots = [];

    for (let i=0; i < this.state.dots; i++) {
      let activeDot = i === this.props.current ? "active" : "dot";

      dots.push(<div className="dot fa fa-circle" name={activeDot} key={i}></div>)
    }
    return (

      <div className="dot-series">
        {dots}
      </div>
    )
  }
}
