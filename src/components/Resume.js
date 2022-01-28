import React from 'react';
import resume from '../assets/computer_teacher_resume_2021.pdf'
import firstImg from '../assets/first_img.PNG'

function Resume(props) {
    function isExpanded() {
        if(props.currentPage === "Resume") {
            return (
              <div>
               Front-end Proficiencies:
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
                
              <a href={resume}>Download Resume</a> 

                
              

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