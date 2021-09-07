import React from 'react';

function Resume(props) {
    function isExpanded() {
        if(props.currentPage == "Resume") {
            return (
                <div>
                    Resume Expanded!
                </div>
            )
        } else {
            return (
                <div>
                    Resume Collapsed!
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

export default Resume;