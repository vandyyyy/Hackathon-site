import React from 'react';

import './App.css';

import * as eogo from './assets 2/cardimage/Group 1000002466.png';
import * as aogo from './assets 2/cardimage/Group 1000002766.png';
import * as bogo from './assets 2/cardimage/Group 1000002767.png';
import * as cogo from './assets 2/cardimage/Group 1000002771.png';
import * as dogo from './assets 2/cardimage/Group 1000002772.png';




const img = eogo.default;
const amg = aogo.default;
const bmg = bogo.default;
const cmg = cogo.default;
const dmg = dogo.default;

const Comp = ()=> {
    return <img src={img} alt="image" className="" />
}


let name:string ;
let start :number ;
let end : number ;
let Description:string ;
let Image:string ;
let Level:string ;


const App: React.FC = ()=> {
  return (
    <div className="App">
    
     
 
  
  <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
            <h1>Figma</h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">DPhi</a></li>
            <li><a href="#services" data-after="Service">comment </a></li>
            <li><a href="#projects" data-after="Projects">hackathon</a></li>
            <li><a href="#about" data-after="About">Share Prototype</a></li>
            <li><a href="#contact" data-after="Contact">Options</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="hero">
    <div className="hero container">
      <div>
        <h1>Accelerate Innovations <span></span></h1>
        <h1>with Global AI Challenges<span></span></h1>
        <h2>AI challenges at DPhi simulate real-world problems. It is a great place to putt your AI/Data Science skills to test on a diverse datasets allowing you to foster learning through competitions.</h2>
        
        <a href="#projects" type="button" className="cta">Create Challenge</a>
      </div>
    </div>
  </section>
  <section id="services">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title"> Why Participate in AI Challenges</h1>
        
      </div>
      <div className="service-bottom">
        <div className="service-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Prove your skills</h2>
          <p>Gain substantial experience by solving real world problems and pit against others to come up with Innovative Solution </p>
        </div>
        <div className="service-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Learn from community</h2>
          <p>One can look and analyse the solutions submitted by the other Data Scientists in the community and learn from then </p>
        </div>
        <div className="service-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2> Challenge yourself</h2>
          <p>There is nothing for you to lose by participating in a challenge.You can fail safe, learn out of the entire experience and bounce back harder </p>
        </div>
        <div className="service-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
          <h2>Earn recognition</h2>
          <p>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards</p>
        </div>
      </div>
    </div>
  </section>
  
  <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">Explore Challenges</h1>
        <div className="topnav">
  <a className="active" href="#home">Filter</a>
  <div className="topnav">
  
  <a href="#about">Search</a>
  <div className="dropdown">
  
  
  
</div>
  
  
</div>
  
</div>

      </div>
      <div className="all-projects">
        <div className="project-item">
          <div className="project-info">
          <img src={img} alt="image" className="" />
          <button  className="dropbtn" >Upcoming</button>
            <h2>Data Science Bootcamp - Graded Datathon</h2>
            <h3>Starts in</h3>
            <h3>00:15:23</h3>
            <a href="#projects" type="button" className="cta">Participate Now</a>
          </div>
          <div className="project-img">
            
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
          <img src={amg} alt="image" className="" />
          <button  className="dropbtn" >Upcoming</button>
            <h2>Data Sprint 72 - Butterfly Identification</h2>
            <h3>Starts in</h3>
            <h3>00:12:23</h3>
            <a href="#projects" type="button" className="cta">Participate Now</a>
          </div>
          <div className="project-img">
            
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
          <img src={bmg} alt="image" className="" />
          <button  className="dropbtn" >Active</button>
            <h2>Data Sprint 71 - Weather Recognition</h2>
            <h3>Ends in</h3>
            <h3>01:12:23</h3>
            <a href="#projects" type="button" className="cta">Participate Now</a>
          </div>
          <div className="project-img">
            
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
          <img src={cmg} alt="image" className="" />
          <button  className="dropbtn" >Active</button>
         
            <h2>Data Sprint 70 - Airline passenger satisfaction </h2>
            <h3>Ends in</h3>
            <h3>01:15:23</h3>
            <a href="#projects" type="button" className="cta">Participate Now</a>
          </div>
          <div className="project-img">
          
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
          <img src={dmg} alt="image" className="" />
          <button  className="dropbtn" >Past</button>
          
            <h2>Engineering Graduates Employment Outcomes</h2>
            <h3>Ended On</h3>
            <h3>19'th MAY 9:00 PM</h3>
            <a href="#projects" type="button" className="cta">Participate Now</a>
          </div>
          <div className="project-img">
            
        
        </div>
      </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div className="about container">
  <div className="slideshow-container">


<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={img} alt="image" className="" />
  
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src={amg} alt="image" className="" />
  
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src={bmg} alt="image" className="" />
  
</div>


<a className="plusSlides(-1)">&#10094;</a>
<a className="plusSlides(1)">&#10095;</a>
</div>


<span className="currentSlide(1)"></span>
<span className="currentSlide(2)"></span>
<span className="currentSlide(3)"></span>
</div>
  
       
  </section>
  
  <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Data Sprint 72- Butterfly Identificattion</h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Sarts on</h1>
            <h2>17th Jun'22 09:00 PM (IST)</h2>
            <h2>+1 234 123 1234</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div className="contact-info">
            <h1>Easy</h1>
            <h2>identify the class to which each buttterfly belongs to</h2>
            <h2>abcd@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div className="contact-info">
            <h1>Overview</h1>
            
          </div>

        </div>
        <p>Butterflies are the adult flying stage of certain insects belongimg to an order or group called lepidoptera. The word "lepiddenera" means "scaly wings" in greek. This name perfectly suits the insects in the group because their wings are covered with thousands of tiny scales overlapping in rows</p>
        <p>an agency of the Govermental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model</p>
        <p>Your task is to build an image Classification model using CNN that classifies to which class of weather each image belong to .</p>
      </div>
    </div>
  </section>

  
    </div>
  );
}

export default App;