import React from 'react';
import profile from '../assets/profile.jpg'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function About(props) {

    function isExpanded() {
        if(props.currentPage === "About") {
            return (
              <div>
                <img class="profileImage" src={profile}></img>
                My name is Carlin shaw. I have taught STEM in public school for
                most of my professional life. I studied Web Development at
                Univesity of Central Florida. I like to read fiction and
                philosophy, and play basketball and Ultimate Frisbee, and hike
                in the mountains.





                <div class="character-form">

                  <div class="character-questions">Choose a character:</div>

                  {/* <FloatingLabel controlId="floatingSelect" label="Works with selects"> */}
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Saved Character Gandalf</option>
                    <option value="4">Saved Character Goku</option>

                  </Form.Select>

                  <div class="character-questions">Choose a weapon:</div>

                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>

                  <div class="character-questions">Name your character:</div>

                    <input></input>
                        <button class="character-start-button">Start Game</button>

                  {/* </FloatingLabel> */}
                </div>
              </div>
            );
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