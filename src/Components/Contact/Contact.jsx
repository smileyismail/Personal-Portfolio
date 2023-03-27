import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setErrors({});
    setValues({ ...values, [name]: value });
  }

  function validate() {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Please enter your name";
    }
    if (!values.email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!values.subject) {
      newErrors.subject = "Please enter your subject";
    }
    if (!values.message) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      emailjs
        .sendForm(
          "service_ox1eweo",
          "template_pusm0ff",
          formRef.current,
          "m7RcPJDi-FrkDCa5A"
        )
        .then(
          (result) => {
            console.log(result.text);
            setValues(initialValues);
            setErrors({ ...errors, success: "Message Sent" });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>Message Me</h1>
        <div className="bg-accent"></div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6 my-auto"
      >
        <div className="flex gap-6">
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Enter Name"
            onChange={handleInputChange}
            className="bg-secondary rounded-md border-2 border-accent p-4 w-full"
          />
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter Name"
            onChange={handleInputChange}
            className="bg-secondary rounded-md border-2 border-accent p-4 w-full"
          />
        </div>

        <div className="flex gap-6">
          <input
            type="text"
            name="subject"
            value={values.subject}
            placeholder="Enter Subject"
            onChange={handleInputChange}
            className="bg-secondary rounded-md border-2 border-accent p-4 w-full"
          />
        </div>

        <div className="flex gap-6">
          <textarea
            rows="10"
            cols="50"
            type="text"
            name="message"
            value={values.message}
            placeholder="Enter Message"
            onChange={handleInputChange}
            className="bg-secondary rounded-md border-2 border-accent p-4 w-full"
          />
        </div>

        {errors && (
          <>
            <p className="text-center font-semibold text-rose-600">
              {errors.name || errors.email || errors.subject || errors.message}
            </p>
            <p className="text-center font-semibold text-emerald-600">
              {errors.success}
            </p>
          </>
        )}

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="border-2 border-accent hover:bg-secondary p-4 text-xl font-semibold rounded-xl w-56"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
