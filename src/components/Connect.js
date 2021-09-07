import React from 'react';

function Connect(props) {
    function isExpanded() {
        if(props.currentPage == "Connect") {
            return (
                <div>
                    Connect Expanded!
                </div>
            )
        } else {
            return (
                <div>
                    Connect Collapsed!
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