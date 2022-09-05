import React, { useRef } from "react";

import Styles from "./ContactMe.module.css";
import emailjs from "emailjs-com";
import useInput from "../../Hooks/useInput";

const nameValidation = (value) => value.trim().length >= 3;
const emailValidation = (value) => value.includes("@");
const subjectAndMessageValidation = (value) => value.trim().length >= 2;

const ContactMe = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(nameValidation);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidation);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectInputChangeHandler,
    inputBlurHandler: subjectInputBlurHandler,
    reset: resetSubjectInput,
  } = useInput(subjectAndMessageValidation);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput(subjectAndMessageValidation);

  const form = useRef();

  function formSubmitHandler(e) {
    e.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredSubjectIsValid ||
      !enteredMessageIsValid
    ) {
      return;
    }

    emailjs
      .sendForm(
        "service_m72wx9r",
        "template_pusm0ff",
        form.current,
        "m7RcPJDi-FrkDCa5A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
  }

  let errorMessage;

  if (messageInputHasError) {
    errorMessage = <p>Please enter a Message</p>;
  }

  if (subjectInputHasError) {
    errorMessage = <p>Please enter a Subject</p>;
  }

  if (emailInputHasError) {
    errorMessage = <p>The entered email is not valid</p>;
  }

  if (nameInputHasError) {
    errorMessage = <p>The Name must be at least 3 Characters </p>;
  }

  return (
    <section id="contact" className="section">
      <div className="section_heading">
        <h1>
          <span>Message Me</span>
        </h1>
      </div>

      <div className={Styles.contact}>
        <h2>{errorMessage}</h2>

        <form ref={form} onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={subjectInputChangeHandler}
            onBlur={subjectInputBlurHandler}
            value={enteredSubject}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="12"
            placeholder="Your Message"
            onChange={messageInputChangeHandler}
            onBlur={messageInputBlurHandler}
            value={enteredMessage}
          ></textarea>

          <div className={Styles.submitBtn}>
            <button type="submit" className="button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
