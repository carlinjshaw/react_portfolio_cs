import React from 'react';
import profile from '../assets/profile_woods.jpg'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function About(props) {
  if (props.currentPage === "About") {
    return (
      <div class="about_page">
        <h2 className="about-hello">My journey into Web Development</h2>
        <div className="about-pic-article">
        {/* <img class="profileImage" src={profile}></img> */}
        <article className="about_text">
          <p class = "about_writing">I never thought I would become a programmer.</p>
          <p>Since I was five I knew I loved science and understanding the natural world. 
            In college I studied math, physics and philosophy even how to teach english in a foreign country.</p>
          <p>I decided to be a science teacher after college.</p>
          <p>Because I was teaching engineering and robotics, I was exposed to basic programming.</p>
          <p>I started to see how computers are a compilation of humanities greatest scientific acheivments. 
            I grew to appreciate the fun of problem solving and the creativity required to do so.</p>
          <p>I went back to school at UCF and went through their Full stack coding bootcamp.</p>
          <p>Then I became an AP computer Science teacher.</p>   
        </article>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}


export default About;