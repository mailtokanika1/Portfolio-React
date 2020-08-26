import React , {Component} from 'react';
import './about.css'

class About extends Component{

  render(){
    return(
      <section className="about" id="about">

      <h3>MY EDUCATION </h3>
      <div className="rows">
      <div>
      <span>
        <ion-icon name="reader-outline"></ion-icon>
      </span>
      <h4>SECONDARY EDUCATION</h4>
      <p>I passed my 10 class from St. Joseph's Academy, Ghaziabad</p>
      <p>Affiliated to CISCE Board,secured an aggregate percentage of 87%</p>
      </div>
      <div>
      <span>
        <ion-icon name="today-outline"></ion-icon>
      </span>
      <h4>SENIOR SECONDARY EDUCATION</h4>
      <p>I passed my 12 class from St. Joseph's Academy, Ghaziabad</p>
      <p>Affiliated to CISCE Board,secured an aggregate percentage of 87%</p>
      </div>
      <div>
      <span>
        <ion-icon name="school-outline"></ion-icon>
      </span>
      <h4>GRADUATION</h4>
      <p>Pursuing Bachelor of technology degree(2017-2021)</p>
      <p>From ABES ENGINEERING COLLEGE with an aggregate score of 88%</p>
      </div>
      </div>
      </section>
    );
  }
}

export default About;
