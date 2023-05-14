import React from 'react';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';
import email_pic from '../assets/emailPictwo.png'
import linkedInPic from '../assets/LinkedIn_logo.png'
import githubPic from '../assets/github-153-675523.png'


function Connect(props) {
  
  const [textValue, setTextValue] = useState('hi')
  const [emailValue, setEmailValue] = useState('email@aol.com')
  const [nameValue, setNameValue] = useState('John Smith')

//this gives the setter the value of whatever is typed in the form
const onChangeHandler = (event) => {
   if (event.target.id === "email") {
     setEmailValue(event.target.value)
   } else if (event.target.id === "textEntry") {
     setTextValue(event.target.value)
   } else if (event.target.id === "nameEntry") {
     setNameValue(event.target.value)
   }
}

//this validates that the email is an email right after someone clicks outside of the email entry
const onBlurHandler = (event) => {
  if (event.target.id === "email") {
event.preventDefault()

    const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const valid = regexEmail.test(event.target.value)

    if (!valid) {
      window.alert("invalid email. please enter a valid email")
    }
  } 

  
  
}

//this validates that the message entry has text in it
const onBlurdHandler = (event) => {
  
  const messageValue = event.target.value

  if(messageValue === "") {
    window.alert("Please enter a message")
  }  
}

  function connectForm() {
    if (props.currentPage === "Connect") {
      return (
        <div className="connect-page">
          <div className="connect-form">
            <h1>Want to connect?</h1>
            <div className= 'connect-links'>
            <a className="email-link" href= "mailto:carlinjshaw@gmail.com"><img alt="email" className='email-img' src={email_pic}></img></a>
            <a className="email-link" href= "https://www.linkedin.com/in/carlin-shaw-352b8bb1/"><img alt="linkedin" className='email-img' src={linkedInPic}></img></a>
            <a className="email-link" href= "https://github.com/carlinjshaw"><img alt="gh" className='email-img' src={githubPic}></img></a>
            </div>
            {/* <Form className="cnt-form-items">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  onBlur={onBlurdHandler}
                  onChange={onChangeHandler}
                  id="nameEntry"
                  // placeholder="John Smith"
                  value={nameValue}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  onBlur={onBlurHandler}
                  onChange={onChangeHandler}
                  id="email"
                  type="email"
                  // placeholder="name@example.com"
                  value={emailValue}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  onBlur={onBlurdHandler}
                  onChange={onChangeHandler}
                  id="textEntry"
                  as="textarea"
                  rows={3}
                  value={textValue}
                />
              </Form.Group>
            </Form> */}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return <div>{connectForm()}</div>;
}

export default Connect;