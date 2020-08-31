import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './navigation.js';
import Header from './header.js'
import About from './about.js'
import FlippingCardPage from './card.js'

class App extends Component{
  render(){
    return(
      <div>
      <Navigation />
      <Header title="THANK YOU OR YOUR CONSIDERATION." text=" I look forward to hearing from you."/>
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
