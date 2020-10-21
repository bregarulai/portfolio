import styled from "styled-components";

export const ContactSession = styled.section`
  background-color: #424242;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactHeading = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  color: white;
  margin-bottom: 1rem;
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
`;

export const FormInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  height: 2.5rem;
  padding: 0 1rem;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  font-size: 1.3rem;
  height: 8rem;
  padding: 1rem 1rem;
`;

export const SubmitBtn = styled.button`
  background-color: #1de9b6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  text-transform: capitalize;
  font-size: 1.2rem;
  border-radius: 5px;
`;
