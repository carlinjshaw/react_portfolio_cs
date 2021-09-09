import React from 'react';

function Resume(props) {
    function isExpanded() {
        if(props.currentPage === "Resume") {
            return (
                <div>
                    Resume doc here!
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

export default Resume;