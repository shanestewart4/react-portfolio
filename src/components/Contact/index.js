import React, { useState } from "react";
import { emailValidation } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      setFormState({
        [event.target.name]: event.target.value
      });
    }
  };

  const changeFormHandler = (event) => {
    if (event.target.name === 'email') {
      const validateEmail = emailValidation(event.target.value);
      if (!validateEmail) {
        setErrorMessage("Invalid email input! Check your entry and try again.");
      } else {
        setErrorMessage("")
      };
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} must be enetered.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <section id="contact" className="m-3">
        <h1>Contact Shane</h1>
        <form className="container form-group" id="contact-form" onSubmit={submitFormHandler}>
          <div className="row p-2">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input className="w-100" type="text" name="name" defaultValue={name} onBlur={changeFormHandler}/>
          </div>
          <div className="row p-2">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input className="w-100" type="text" name="email" defaultValue={email} onBlur={changeFormHandler}/>
          </div>
          <div className="row p-2">
            <label className="label" htmlFor="message">
              Message:
            </label>
            <textarea className="w-100" name="message" rows="3" defaultValue={message} onBlur={changeFormHandler}></textarea>
          </div>
          {errorMessage && (
            <div className="row">
              <p className="error-message-text">{errorMessage}</p>
            </div>
          )}
          <button id="contact-btn" type="submit">Submit!</button>
        </form>
      </section>
    </div>
  );
}
export default Contact;