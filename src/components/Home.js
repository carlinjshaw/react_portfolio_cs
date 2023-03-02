import React from 'react';
import profile from '../assets/profile.jpg'

function Home(props) {
  if (props.currentPage === "Home") {
    return (
      <div className="about_page">
        <h2 className="about-hello">Hello, Im Carlin</h2>
        <div className="about-pic-article">
        <img className="profileImage" src={profile}></img>
        <article className="about_text">
          <p>Thanks for visiting. </p>
          <p className = "about_writing">Explore to see a little about me, my work in Web Development and experience in programming. 
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


export default Home;