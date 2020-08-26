import React , {Component} from 'react';
import './header.css'
const mystyle= {
backgroundImage : "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFtD2OCHEpb-7PHLVHqXrWG0SdXITH29b9hQ&usqp=CAU" + ")",
height:'80vh',
backgroundSize : 'cover'
}
class Header extends Component{

  render(){
    return(
      <header className="resheader" style={mystyle}>
      <h1>{this.props.title}</h1>
      <h4>{this.props.text}</h4>
      <h5>If you are interested in shaking hands and join up for a team work than you can contant me(click below).</h5>
      <a href = "mailto: mailtokanika1@gmail.com">Send Email</a>
      </header>
 );
  }
}

export default Header;
