import React from 'react';
import mvc from '../assets/MVC_project.png'
import expressProject from '../assets/express_projects.png'
import passwordGenerator from '../assets/password_gen_project.png'
import sqlProject from '../assets/sql_inquirer_project.PNG'
import workoutProject from '../assets/workout-app.PNG'
import weather from '../assets/weather-api.PNG'
import cryptGame from '../assets/crypt_crawler.png'
import githubSymbol from '../assets/github-153-675523.png'
import linkImage from '../assets/link_image.webp'

function Work(props) {

  if(props.currentPage === "Work") {

  
    return (
      <div class="workPage">
        <div class="cards-container">
          <div className="item">
            <h4>MVC Blog</h4>
            Uses Sequelize, Express, MVC format.
            <img class="projectImages" src={mvc} />
            <a href="https://calm-basin-00430.herokuapp.com/">
              <img className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/MVC-cshaw">
              <img className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>React Game</h4>
            Uses React, Heroku, Mongoose, GraphQL
            <img class="projectImages" src={cryptGame} />
            <a href="https://crypt-crawler.herokuapp.com/">
              <img className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/MVC-cshaw">
              <img className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div class="item">
            <h4>Password Generator</h4>
            Uses Javascript
            <img class="projectImages" src={passwordGenerator} />
            <a href="https://carlinjshaw.github.io/03-password/">
              <img className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/03-password">
              <img className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div class="item">
            <h4>SQL Employee Manager</h4>
            Uses MySql, Inquirer
            <img class="projectImages" src={sqlProject} />
            <a href="https://github.com/carlinjshaw/sql-employee-manager-cshaw">
              <img
                style={{ left: "46%" }}
                className="work-git"
                src={githubSymbol}
              ></img>
            </a>
          </div>
          <div class="item">
            <h4>Workout Tracker API</h4>
            Uses Sequelize, Node.js, Express, Handlebars
            <img class="projectImages" src={workoutProject} />
            <a href="https://damp-river-50096.herokuapp.com/">
              <img className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/Browntuckerr/FullStackWorkout">
              <img className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div class="item">
            <h4>Weather API</h4>
            Uses 3rd party APIs, Javasript, CSS.
            <img class="projectImages" src={weather} />
            <a href="https://carlinjshaw.github.io/cshaw-weather-app/">
              <img className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/cshaw-weather-app">
              <img className="work-git" src={githubSymbol}></img>
            </a>
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