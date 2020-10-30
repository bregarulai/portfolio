import React from "react";
import {
  ContactSession,
  FormGroup,
  FormInput,
  FormTextArea,
  FormWraper,
  SubmitBtn,
  ContactHeading,
  FormSubHeading,
} from "./contact.elements";

const Contact = () => {
  return (
    <ContactSession id='contact'>
      <ContactHeading>contact me</ContactHeading>
      <FormWraper>
        <form action="">
          <FormSubHeading>Looking forward to hear from you</FormSubHeading>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <FormInput type="text" id="name" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email address</label>
            <FormInput type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <FormTextArea id="message" />
          </FormGroup>
          <SubmitBtn>submit</SubmitBtn>
        </form>
      </FormWraper>
    </ContactSession>
  );
};

export default Contact;
