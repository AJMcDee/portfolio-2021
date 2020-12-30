import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 3rem 0 8rem 0;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  max-width: 40vw;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  input,
  textarea {
    margin-top: 0.5rem;
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    align-self: flex-start;
  }
`;

// Form template from Formspree.com

function ContactForm({ HeaderH3 }) {
  const [status, setStatus] = useState("");

  return (
    <ContactContainer>
      <HeaderH3 id="ContactForm">Contact</HeaderH3>
      <StyledForm
        onSubmit={submitForm}
        action="https://formspree.io/f/xbjppknq"
        method="POST"
      >
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" />
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" />

        <label for="message">Message:</label>
        <textarea type="text" name="message" id="message" cols="50" rows="6" />

        {status === "SUCCESS" ? <p>Thank you!</p> : <button>Submit</button>}
        {status === "ERROR" && (
          <p>
            Oops! There was an error. Please contact me{" "}
            <a
              href="https://www.linkedin.com/in/annajmcdougall/"
              target="_blank"
              rel="noreferrer"
            >
              on LinkedIn
            </a>{" "}
            instead.
          </p>
        )}
      </StyledForm>
    </ContactContainer>
  );

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }
}

export default ContactForm;
