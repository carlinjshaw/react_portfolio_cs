import React from 'react';
import profile from '../assets/profile.jpg'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function About(props) {

    function isExpanded() {
        if(props.currentPage === "About") {
            return (
              <div class = "about_page">
                <img class="profileImage about_item" src={profile}></img>
                <article class= "about_text about_item">
                    <p>Carlin Shaw.</p>
                    <p>STEM teacher</p>   
                    <p>Junior Developer</p>
                </article>
               
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

export default About;