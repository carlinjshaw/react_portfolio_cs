import React from 'react';


function About(props) {

    function isExpanded() {
        if(props.currentPage == "About") {
            return (
                <div>
                    About Expanded!
                </div>
            )
        } else {
            return (
                <div>
                    About Collapsed!
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