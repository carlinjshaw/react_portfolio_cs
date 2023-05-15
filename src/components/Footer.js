import React from 'react';
import email_pic from '../assets/emailPictwo.png'
import linkedInPic from '../assets/LinkedIn_logo.png'
import githubPic from '../assets/github-153-675523.png'

function Footer(props) {
    return (
        <div className = "footer">
            <h4>Its been real!</h4>
        <section className="footer-nav">
            <p className = "footer-item"href="#home" onClick={() => {props.setCurrentPage("Home")}} >Home</p>
            <p className="footer-item" href="#About" onClick={() => {props.setCurrentPage("About")}} >About</p>
            <p className="footer-item" href="#work" onClick={() => {props.setCurrentPage("Work")}}>Work</p>
            <p className="footer-item" href="#resume" onClick={() => {props.setCurrentPage("Resume")}}>Resume</p>
            <p className="footer-item" href="#connect" onClick={() => {props.setCurrentPage("Connect")}}>Connect</p>
        </section>
       
        <section className ="footer-contact">
            <a href= "mailto:carlinjshaw@gmail.com"><img alt="email" className='footer-contact-img' src={email_pic}></img></a>
            <a href= "https://www.linkedin.com/in/carlin-shaw-352b8bb1/"><img alt="linkedin" className='footer-contact-img' src={linkedInPic}></img></a>
            <a href= "https://github.com/carlinjshaw"><img alt="gh" className='footer-contact-img' src={githubPic}></img></a>
        </section>

        </div>
    );
}

export default Footer;