import React from 'react';

function Header(props) {
    return (
        <div>
            <button onClick={() => {props.setCurrentPage("About")}}>About</button>
            <button onClick={() => {props.setCurrentPage("Connect")}}>Connect</button>
            <button onClick={() => {props.setCurrentPage("Resume")}}>Resume</button>
        </div>
    );
}

export default Header;