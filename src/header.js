import React , {Component} from 'react';
import './header.css'
const mystyle= {
backgroundImage : "url(" + "https://graphix.sd/resources/slides/mockup4.jpg" + ")",
backgroundSize : 'cover',
padding:"14px"
}
class Header extends Component{

  render(){
    return(
      <header className="resheader" style={mystyle}>
      <h1>{this.props.title}</h1>
      <h4>{this.props.text}</h4>
      <h5>I would appreciate the opportunity to meet with you to discuss my candidacy. Thank you for your time and consideration.</h5>
      <a href = "mailto: mailtokanika1@gmail.com">Contact Me</a>
      <marquee vspace="50"><h3>REGARDS !!</h3></marquee>
      </header>
 );
  }
}

export default Header;
