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
    <ContactSession id="contact">
      <ContactHeading>contact me</ContactHeading>
      <FormWraper
        data-aos="fade-up-right"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
      >
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <FormSubHeading>Looking forward to hear from you</FormSubHeading>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <FormInput type="text" id="name" name="name" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email address</label>
            <FormInput type="email" id="email" name="email" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <FormTextArea id="message" name="message" />
          </FormGroup>
          <SubmitBtn type="submit">submit</SubmitBtn>
        </form>
      </FormWraper>
    </ContactSession>
  );
};

export default Contact;
