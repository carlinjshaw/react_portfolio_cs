import React from 'react';
import profile from '../assets/profile.jpg'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function About(props) {
  if (props.currentPage === "About") {
    return (
      <div class="about_page">
        <h2 className="about-hello">Hello, Im Carlin</h2>
        <img class="profileImage about_item" src={profile}></img>
        <article className="about_text item">
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