import styled from "styled-components";

export const ContactSession = styled.section`
  background-color: #424242;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem 2rem;

  @media only screen and (max-width: 815px) {
    padding: 2rem 1rem;
    height: 200vh;
  }

  @media only screen and (max-width: 500px) {
    padding: 2rem 1rem;
    height: 100vh;
  }
`;

export const ContactHeading = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  color: white;
  margin-bottom: 1rem;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const FormWraper = styled.div`
  background-color: white;
  width: 40rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 5rem;
  border-radius: 8px;

  @media only screen and (max-width: 800px) {
    width: 37rem;
    padding: 2rem 2rem;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
  form {
    padding: 2rem 0;
    @media only screen and (max-width: 500px) {
      padding: 1rem 0;
    }
  }
`;

export const FormSubHeading = styled.h5`
  font-size: 1.1rem;
  color: #757575;
  margin-bottom: 1rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem 0;

  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  height: 2.5rem;
  padding: 0 1rem;

  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  font-size: 1.3rem;
  height: 8rem;
  padding: 1rem 1rem;

  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #1de9b6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  text-transform: capitalize;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  transition: opacity, scale 0.2s ease-in-out;

  &:hover {
    transition: opacity, scale 0.2s ease-in-out;
    opacity: 0.8;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;
