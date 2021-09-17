import React from 'react';
import profile from '../assets/profile.jpg'

function About(props) {

    function isExpanded() {
        if(props.currentPage === "About") {
            return (
                <div>
                    <img class="profileImage" src= {profile}></img>
                    My name is Carlin shaw. I have taught STEM in public school for most of my professional life. 
                    I studied Web Development at Univesity of Central Florida. 
                    I like to read fiction and philosophy, and play basketball and Ultimate Frisbee, and hike in the mountains. 
                </div>
            )
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