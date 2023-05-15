import React from 'react';
import profile from '../assets/profile_woods.jpg'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function About(props) {
  if (props.currentPage === "About") {
    return (
      <div className="about_page">
        <h2 className="about-hello">My journey into Web Development</h2>
        <div className="about-pic-article">
        <article className="about_text about_page_text">
          <p>Since I was young, I had an affinity for science and understanding the natural world. 
            In college, I was not sure what I would do with my life
            but I knew I enjoyed teaching and learning. I studied math, physics and philosophy 
            and got a certificate to teach english in a foreign country.</p>
            <p>Right out of college, I taught physical science in 8th grade, then for three years
            I taught engineering. Because I was teaching engineering and VEX robotics, I was exposed to basic programming in C. I started to see how computers are a compilation of humanities greatest scientific acheivments 
            and grew to appreciate the fun of problem solving and the creativity required to do so. 
        I went back to school at UCF and went through their Full stack coding bootcamp.
          Meanwhile, I became an AP computer Science teacher and learned Python and Java. My students did great
            with an 83% pass rate on the AP exam, 20% above the national average.</p>
            <p>In May 2020, I started working part time for 2U Education to be a teaching assistant 
              for the same bootcamp that I was a part of, serving students at universities around the US and the world, tutoring and helping them build full stack projects. 
            Since then I have continued tutoring at 2U education, teaching AP Computer Science,
             building my own applications, and learning new technologies. Building state of the art websites and learning web Development continues to be my passion.</p>   
        </article>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}


export default About;