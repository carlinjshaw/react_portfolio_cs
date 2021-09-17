import React from 'react';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';


function Connect(props) {
  const [textValue, setTextValue] = useState('hi')
  const [emailValue, setEmailValue] = useState('hi')

const onChangeHandler = (event) => {
   if (event.target.id === "email") {
     setEmailValue(event.target.value)
   } else {
     setTextValue(event.target.value)
   }
}

const onBlurHandler = (event) => {
  if (event.target.id === "email") {
    

    const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const valid = regexEmail.test(event.target.value)

    if (!valid) {
      window.alert("invalid email. please enter a valid email")
    }
  } 
}


  function isExpanded() {
    if (props.currentPage === "Connect") {
      return (
      <div>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={onBlurHandler} onChange= {onChangeHandler} id="email" type="email" placeholder="name@example.com" value={emailValue}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control onBlur={onBlurHandler} onChange= {onChangeHandler} id="textEntry" as="textarea" rows={3} value= {textValue}/>
  </Form.Group>
</Form>

</div>
      )
    } else {
      return <div></div>;
    }
  }

  return <div>{isExpanded()}</div>;
}

export default Connect;