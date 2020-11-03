import styled from "styled-components/macro";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 5rem 0;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  color: #424242;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  width: 40%;
  margin-top: 1rem;

  @media only screen and (max-width: 900px) {
    width: 60%;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
