import React, { Component } from "react";

import Flippy, { FrontSide, BackSide } from 'react-flippy';

class FlippingCardPage extends Component {

    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
      return(
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()

    style={{padding:"20px" , width: '350px', height: '450px'}}
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
      }}
    >
    <h3>{this.props.title}</h3>
    <p>{this.props.text}</p>
    <h2>Flip me!!</h2>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      <br></br>
      <br></br>
      <h1>My Strength in it.</h1>
    <progress value="70" max="100">80 %</progress>
    <br></br>
    <h2>Flip me Back</h2>
    </BackSide>
  </Flippy>
);
}
}
export default FlippingCardPage;
