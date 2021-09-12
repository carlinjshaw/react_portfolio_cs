import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import mvc from '../assets/MVC_project.png'
import expressProject from '../assets/express_projects.png'
import passwordGenerator from '../assets/password_gen_project.png'
import sqlProject from '../assets/sql_inquirer_project.PNG'
import workoutProject from '../assets/workout-app.PNG'

function Work(props) {

  if(props.currentPage === "Work") {

  
    return (
        <div>
    

 <div class = "container">
          <div class = "item">Item 1
              <img class="projectImages" src= {mvc} />
          </div>
          <div class = "item">Item 2
              <img class="projectImages" src={expressProject}/>
          </div>
          <div class = "item">Item 3
              <img class="projectImages" src={passwordGenerator}/>
          </div>
          <div class = "item">Item 4
              <img class="projectImages" src={sqlProject}/>
          </div>
          <div class = "item">Item 5
          <img class="projectImages" src={workoutProject}/>
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