import React from 'react';

function Connect(props) {
    function isExpanded() {
        if(props.currentPage === "Connect") {
            return (
                <div>
Fill out this form!                </div>
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

export default Connect;