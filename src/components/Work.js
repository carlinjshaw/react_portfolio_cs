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
import accessRefactor from '../assets/access_refactor.png'
import googleAPI from '../assets/google_api.png'
import road2react from '../assets/road_to_react.png'
import teamGen from '../assets/team_generator.png'
import ORM_store from '../assets/orm_sequelize.png'
import nosql_social from '../assets/nosql_social.png'


function Work(props) {

  if(props.currentPage === "Work") {

  
    return (
      <div className="workPage">
        <div className="cards-container">
          <div className="item">
            <h4>MVC Blog</h4>
            Sequelize, Express, MVC format.
            <img alt="projects" className="projectImages" src={mvc} />
            <a href="https://calm-basin-00430.herokuapp.com/">
              <img alt="work link" className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/MVC-cshaw">
              <img alt="git symbol" className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>MERN Game</h4>
            React, Heroku, Mongoose, GraphQL
            <img alt=" game project" className="projectImages" src={cryptGame} />
            <a href="https://crypt-crawler.herokuapp.com/">
              <img alt="work link" className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/MVC-cshaw">
              <img alt="git link" className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>Password Generator</h4>
            Javascript
            <img alt="prject" className="projectImages" src={passwordGenerator} />
            <a href="https://carlinjshaw.github.io/03-password/">
              <img alt="prject" className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/03-password">
              <img alt="prject" className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>SQL Employee Manager</h4>
            MySql, Inquirer
            <img alt="prject" className="projectImages" src={sqlProject} />
            <a href="https://github.com/carlinjshaw/sql-employee-manager-cshaw">
              <img
              alt="prject"
                style={{ left: "46%" }}
                className="work-git"
                src={githubSymbol}
              ></img>
            </a>
          </div>
          <div className="item">
            <h4>Workout Tracker API</h4>
            Sequelize, Node.js, Express, Handlebars
            <img alt="prject" className="projectImages" src={workoutProject} />
            <a href="https://damp-river-50096.herokuapp.com/">
              <img alt="prject" className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/Browntuckerr/FullStackWorkout">
              <img alt="prject" className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>Weather API</h4>
            3rd party APIs, Javasript, CSS.
            <img alt="prject" className="projectImages" src={weather} />
            <a href="https://carlinjshaw.github.io/cshaw-weather-app/">
              <img alt="prject" className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/cshaw-weather-app">
              <img alt="prject" className="work-git" src={githubSymbol}></img>
            </a>
          </div>


          <div className="item">
            <h4>SEO Refactor</h4>
            SEO, Accessibility, Javasript, CSS.
            <img alt="prject" className="projectImages" src={accessRefactor} />
            <a href="https://carlinjshaw.github.io/horiseon-refactor-challenge/">
              <img alt="prject" className="work-link" src={linkImage}></img>
            </a>
            <a href="https://github.com/carlinjshaw/horiseon-refactor-challenge">
              <img alt="prject" className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>Google API app</h4>
            Jquery, Materialize, google maps API
            <img alt="prject" className="projectImages" src={googleAPI} />
            <a href="https://github.com/carlinjshaw/google_maps_api_app">
              <img alt="prject" style={{ left: "46%" }} className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>Article Search from <a style ={{color:"white"}} href = "https://www.roadtoreact.com/">Road to React</a></h4>
            React, useState, useEffect, localStorage, APIs
            <img alt="projects" className="projectImages" src={road2react} />
            <a href="https://github.com/carlinjshaw/road_to_react">
              <img alt="git symbol" style={{ left: "46%" }} className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>OOP Team Gnerator</h4>
            OOP, Node.js, Javascript, Inquirer
            <img alt="prject" className="projectImages" src={teamGen} />
            <a href="https://github.com/carlinjshaw/oop-profile-generator-cshaw">
              <img alt="prject" style={{ left: "46%" }} className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>E-Commerce Back End</h4>
            Sequelize ORM, Node.js, Javascript, Express.js
            <img alt="prject" className="projectImages" src={ORM_store} />
            <a href="https://github.com/carlinjshaw/ORM-sequelize-cshaw">
              <img alt="prject" style={{ left: "46%" }} className="work-git" src={githubSymbol}></img>
            </a>
          </div>
          <div className="item">
            <h4>NoSql Social Network Back End</h4>
            Mongoose, NoSql, Node.js, Javascript, Express.js
            <img alt="prject" className="projectImages" src={nosql_social} />
            <a href="https://github.com/carlinjshaw/NoSql-social_media_api_Shaw">
              <img alt="prject" style={{ left: "46%" }} className="work-git" src={githubSymbol}></img>
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