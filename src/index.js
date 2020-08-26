import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './navigation.js';
import Header from './header.js'
import About from './about.js'

class App extends Component{
  render(){
    return(
      <div>
      <Navigation />
      <Header title="This was the whole content of my page" text="Thank you for reaching out here."/>

      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
