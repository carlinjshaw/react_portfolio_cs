import React from 'react';
import resume from '../assets/Carlin_Shaw_Developer_Resume.pdf'
import firstImg from '../assets/first_img.PNG'

function Resume(props) {
    function isExpanded() {
        if(props.currentPage === "Resume") {
            return (
              <div className="resume-page">
                
                  <h1></h1>
                  <iframe className= 'resume'
                    src={resume}
                    width="50%"
                    height="700px"
                  ></iframe>
                
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