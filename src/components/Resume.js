import React from 'react';
import resume from '../assets/Carlin_Shaw_Developer_Resume.pdf'
import resume_pic from '../assets/resume.png'

function Resume(props) {
    function isExpanded() {
        if(props.currentPage === "Resume") {
            return (
              <div className="resume-page">
                <div className="resume-button">
                  <button class="slide_from_top">
                  <a href={resume} >Download</a>
                  </button>
                </div>

                <img className="resume" src={resume_pic}></img>
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