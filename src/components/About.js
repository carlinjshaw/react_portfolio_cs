import React from 'react';


function About(props) {

    function isExpanded() {
        if(props.currentPage === "About") {
            return (
                <div>
                    My name is Carlin shaw. I am a science-loving, spiritual, christian adventurer, philosophizer, 
      school-teacher and web developer. I used to teach engineering in public middle school, and now
      I do web developement. Reach out if you want to connect!
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