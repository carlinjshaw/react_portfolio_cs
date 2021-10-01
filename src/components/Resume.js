import React from 'react';
import resume from '../assets/computer_teacher_resume_2021.pdf'
import firstImg from '../assets/first_img.PNG'

function Resume(props) {
    function isExpanded() {
        if(props.currentPage === "Resume") {
            return (
              /* Front-end Proficiencies:
                HTML
                CSS
                Javascript
                JQuery
                Responsive design
                React
                Bootstrap
                
                
                Back-end Proficiencies:
                APIs
                Node
                Express
                MySql, Sequelize
                MongoDB, Mongoose
                REST
                GraphQL
                
              <a href={resume}>Download Resume</a> */

                
              <div class="round1">
                
                <div >

                <img class="round1Image" src={firstImg} alt="Snow"></img>

  <form action="/action_page.php" class="round1form">
    <h2>Further you walk, and find a fork in the path...</h2>

    <label ><b>To the left, you hear growlings and the stench is fowl. </b></label>
    <button type="submit" class="round1btns">Go Left</button>

    <label for="psw"><b>To the right, you see the glimmer of light and warmth.</b></label>
    <button type="submit" class="round1btns">Go Right</button>
  </form>

</div>

              </div>
            );
        } else {
            return (
                <div>
                </div>
            )
        }
    }

    return (
        <div>
           {isExpanded()}
        </div>
    );
}

export default Resume;