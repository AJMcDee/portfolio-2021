import React, { useState } from "react";
import styled from "styled-components";
import { HeaderH2 } from "./elements/Headers";
import StyledButton from "./elements/StyledButton";

// Form template from Formspree.com

function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <ContactContainer id="ContactForm">
      <HeaderH2>Contact</HeaderH2>
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

        {status === "SUCCESS" ? (
          <p>Thank you!</p>
        ) : (
          <StyledButton>Submit</StyledButton>
        )}
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

const ContactContainer = styled.div`
  padding: 3rem 0 8rem 0;
  background-color: #131529;
  box-shadow: 0px 0px 30px #b87700;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  background-color: black;
  border: 4px solid white;
  padding: 2rem;
  display: flex;
  width: 80vw;
  margin-top: 1rem;
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
export default ContactForm;
