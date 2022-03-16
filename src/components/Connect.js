import React from 'react';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';


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

  // if (event.target.id === "textEntry") {
    const messageValue = event.target.value

    if(messageValue === "") {
      window.alert("Please enter a message")
    }
  
}

  function connectForm() {
    if (props.currentPage === "Connect") {
      return (
        <div className='connect-page'>
          <div className= 'connect-form'>
          <h4>Want to connect?</h4>
          <Form className = 'cnt-form-items'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                onBlur={onBlurdHandler}
                onChange={onChangeHandler}
                id="nameEntry"
                placeholder="John Smith"
                value={nameValue}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                onBlur={onBlurHandler}
                onChange={onChangeHandler}
                id="email"
                type="email"
                placeholder="name@example.com"
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
          </Form>
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