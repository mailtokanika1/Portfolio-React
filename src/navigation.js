import React , {Component} from 'react';
import './navigation.css';
//import About from './about.js'
import FlippingCardPage from './card.js'


class Navigation extends Component{
  state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
  render(){
  //const sections = ['About','Portfolio','Interest-Skills','Work Experience'];
  //const navLinks = sections.map( section => {
  //return (
    //<li><a href={'#' + section }>{section}</a></li>
//)

//});
return (
          <>

          <section class="colored-section" id="title">
            <nav class="navbar navbar-expand-lg navbar-dark">

                  <a class="navbar-brand" href="">Welcome to My Page</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#knowledge">Knowledge Proficiency</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#experience">Work Experience</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#interest">Interest-Hobbies</a>
                      </li>

                    </ul>

                  </div>
                </nav>



            </section>
          <div id="my-carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3500">
              <ol class="carousel-indicators">
                  <li data-target="#my-carousel" data-slide-to="0" class="active"></li>
                  <li data-target="#my-carousel" data-slide-to="1"></li>
                  <li data-target="#my-carousel" data-slide-to="2"></li>


              </ol>
              <div class="carousel-inner">
                  <div class="carousel-item active">
                  <img class="d-block w-100" src={process.env.PUBLIC_URL + '/slide1.jpg'} alt="First slide"/ >
                  <div class="carousel-caption typewriter">
                  <h4>I am Kanika Sharma.</h4>
                  <h2>A Software Developer....</h2></div>
                  </div>
                  <div class="carousel-item">
                  <img class="d-block w-100" src={process.env.PUBLIC_URL + '/slide2.jpg'} alt="Second slide"/ >
                  <div class="carousel-caption typewriter">
                  <h4>I am Kanika Sharma.</h4>
                  <h2>A Web Developer....</h2></div>
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src={process.env.PUBLIC_URL + '/slide3.jpg'} alt="Third slide"/ >
                      <div class="carousel-caption typewriter">
                      <h4>I am Kanika Sharma.</h4>
                      <h2>A SAP-ABAP Programmar....</h2></div>
                 </div>
              </div>
              <a class="carousel-control-prev" href="#my-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#my-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>

               </div>


    <section class="white-section" id="about">

    <div class="container-fluid">
    <img class="my" src={process.env.PUBLIC_URL + '/kanika2.jpg'} />;
    <marquee>
     <h2>MY EDUCATIONAL BACKGROUND....</h2>
     </marquee>
      <div class="row">
        <div class="feature-box col-lg-4">
          <i class="icon fas fa-check-circle fa-4x"></i>
          <h3 class="feature-title">SECONDARY EDUCATION.</h3>
          <p>I passed my 10 class from St. Joseph's Academy, Ghaziabad</p>
          <p>Affiliated to CISCE Board,secured an aggregate percentage of 87%</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-bullseye fa-4x"></i>
          <h3 class="feature-title">SENIOR SECONDARY EDUCATION</h3>
          <p>I passed my 12 class from St. Joseph's Academy, Ghaziabad</p>
          <p>Affiliated to CISCE Board,secured an aggregate percentage of 87%</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-heart fa-4x"></i>
          <h3 class="feature-title">GRADUATION.</h3>
          <p>Pursuing Bachelor of technology degree(2017-2021)</p>
          <p>From ABES ENGINEERING COLLEGE with an aggregate score of 88%</p>
        </div>
      </div>


    </div>
  </section>
  <section class="colored-section" id="knowledge">

  <div class="container-fluid">

   <marquee direction="right"><h2>LANGUAGES</h2></marquee>
   <h2>AND</h2>
   <marquee direction="left"><h2>DOMAIN</h2></marquee>
    <div class="row">
      <FlippingCardPage title="PYHTON" text="I have a experience of working for 2 years in Python language.
        I also a knowledge of some advance feature in pyhton like tkinter,web scraping etc in python etc."/>

      <FlippingCardPage title="JAVA" text="I have a meaningful basic knowledge of JAVA language.
        Before putting my hands in Python, I have worked on Java for nearly 3 years. "/>

      <FlippingCardPage title="HTML,CSS and JS" text="I have a good knowledge of HTML and CSS.
        I have made a few projects and also a few games based on the background of HTML and CSS"/>
        <FlippingCardPage title="DATA STRUCTURE-ALGORITHM" text="I have a good theoritical and practical strength in data strcutres and algorithms."/>

         <FlippingCardPage title="SAP-ABAP" text="My main Domain that I professionally work upon is SAP-ABAP.
        I have a fairly advance knowledge of professional stuff in SAP-ABAP."/>

           <FlippingCardPage title="NODE-REACT" text="Beside from working on HTML and CSS, I also have a good hand in Javascript, node and reactjs.
        This portfolio is made using react, html and javascript majorly."/>

    </div>


  </div>
  </section>
  <section class="white-section" id="experience">

  <div class="container-fluid">
   <blink><h2>MY WORK EXPERIENCE</h2></blink>
    <div class="row">
      <div class="feature-box col-lg-4">
        <h3 class="feature-title">TRAINEE CONSULTANT</h3>
        <p>I worked as a trainee with AKshara Global Services Pvt Ltd.</p>
        <p>I worked with this team for 4-5 months and learned about the industrial implementation of SAP-ABAP</p>
      </div>

      <div class="feature-box col-lg-4">
        <h3 class="feature-title">TECHNICAL TRAINER</h3>
        <p>I am currently working as a technical trainer with Q-in-1 Technologies.</p>
        <p>Here I am assosiated with the task to train young generation with the essentials and coding and web development.</p>
      </div>

      <div class="feature-box col-lg-4">
        <h3 class="feature-title">ASSISTANT MANAGER</h3>
        <p>I am appointed at the post of Assistant Manager at Impact Computers Institute, Ghaziabad.</p>
        <p>Here I am responsible for the management and the running of the company.</p>
      </div>
      </div>
<blink><h2>MY PROJECTS</h2></blink>
<div class="row">
    <div class="feature-box col-lg-4">
      <h3 class="feature-title">SUPERMARKET PROJECT</h3>
      <p>with the team effort of 2 people, I have created a supermarket database software project.</p>
      <p>This project is capable of scanning Barcode, generating bills, analysing stock etc.</p>
    </div>

    <div class="feature-box col-lg-4">
      <h3 class="feature-title">COVID ANALYSER(PYTHON)</h3>
      <p>Making use of python and some of its useful and advance libraries and modules I have made a COVID ANALYSER project.</p>
    </div>
    <div class="feature-box col-lg-4">
      <h3 class="feature-title">MANY MORE TO COME!! STAY TUNED...</h3>
    </div>
    </div>
  </div>
</section>
<section class="colored-section" id="interest">

<div class="container-fluid">
 <h2>MY HOBBIES ARE</h2>
  <div class="row">
    <div class="feature-box col-lg-4">
    <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">SINGING AND DANCING....</h3>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">MANAGEMENT....</h3>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">EXPLORING NEW DOMAINS....</h3>
    </div>
    <div class="feature-box col-lg-4">
      <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">COOKING....</h3>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">TRAVELLING....</h3>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">LISTENING SONGS....</h3>
    </div>
</div>
</div>
</section>


          </>
        );
      }
    }
export default Navigation;
