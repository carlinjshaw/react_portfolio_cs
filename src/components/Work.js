import React from 'react';
import mvc from '../assets/MVC_project.png'
import expressProject from '../assets/express_projects.png'
import passwordGenerator from '../assets/password_gen_project.png'
import sqlProject from '../assets/sql_inquirer_project.PNG'
import workoutProject from '../assets/workout-app.PNG'
import weather from '../assets/weather-api.PNG'

function Work(props) {

  if(props.currentPage === "Work") {

  
    return (
      <div class = "workPage">
        <div class="cards-container">
          <div class="item">
              <h4>MVC Blog</h4> 
              <a href="https://calm-basin-00430.herokuapp.com/">Site</a> 
              <a href="https://github.com/carlinjshaw/MVC-cshaw">Github</a> 
              Uses Sequelize, Express, MVC format. 
            <img class="projectImages" src={mvc}/>
          </div>
          <div class="item">
            <h4>Note Taker</h4>
            <a href="https://express-note-taker-cshaw.herokuapp.com/">Site</a>
            <a href="https://github.com/carlinjshaw/express-notetaker-cshaw">Github</a>

            Uses Node.js, Express.js, APIs
            <img class="projectImages" src={expressProject} />
          </div>
          <div class="item">
            <h4>Password Generator</h4>

            <a href="https://carlinjshaw.github.io/03-password/">Site</a>
            <a href="https://github.com/carlinjshaw/03-password">Github</a>
            Uses Javascript
            <img class="projectImages" src={passwordGenerator} />
          </div>
          <div class="item">
            <h4>SQL Employee Manager</h4>

            <a href="https://github.com/carlinjshaw/sql-employee-manager-cshaw">Github</a>

            Uses MySql, Inquirer 
            <img class="projectImages" src={sqlProject} />
          </div>
          <div class="item">
            <h4>Workout Tracker API</h4>

            <a href="https://damp-river-50096.herokuapp.com/">Site</a>
            <a href="https://github.com/Browntuckerr/FullStackWorkout">Github</a>
            Uses Sequelize, Node.js, Express, Handlebars
            <img class="projectImages" src={workoutProject} />
          </div>
          <div class="item">
            <h4>Weather API</h4>
            <a href="https://carlinjshaw.github.io/cshaw-weather-app/">Site</a>
            <a href="https://github.com/carlinjshaw/cshaw-weather-app">Github</a>
            Uses 3rd party APIs, Javasript, CSS.
            <img class="projectImages" src={weather} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default Work;