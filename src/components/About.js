import React from 'react';
import profile from '../assets/profile.jpg'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function About(props) {
  if (props.currentPage === "About") {
    return (
      <div class="about_page">
        <img class="profileImage about_item" src={profile}></img>
        <article class="about_text item">
          <p>Carlin Shaw</p>
          <p>STEM teacher</p>
          <p>Junior Developer</p>
        </article>

      </div>
    );
  } else {
    return <div></div>;
  }
}


export default About;