import React from 'react';
import profile from '../assets/profile_woods.jpg'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function About(props) {
  if (props.currentPage === "About") {
    return (
      <div class="about_page">
        <h2 className="about-hello">Hello, Im Carlin</h2>
        <div className="about-pic-article">
        {/* <img class="profileImage" src={profile}></img> */}
        <article className="about_text">
          <p>Pleased to meet you!</p>
          <p>My name is Carlin Shaw. I have been an STEM educator in public school for most of my profession life.
            Web development was an easy addition to my love for science and creativity.

          </p>
          <p></p>
        </article>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}


export default About;