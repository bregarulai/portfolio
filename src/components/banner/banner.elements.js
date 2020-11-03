import styled from "styled-components/macro";
import image from "./bg.jpg";
import { Link as ScrollLink } from "react-scroll";

export const BackgroundImage = styled.section`
  height: 90vh;
  background-image: url(${image});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-transform: capitalize;

  @media only screen and (max-width: 700px) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 580px) {
    font-size: 1.6rem;
  }
`;

export const Name = styled.span`
  color: #1de9b6;
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  color: #757575;
  text-transform: capitalize;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 580px) {
    font-size: 1rem;
  }
`;

export const ProjectButton = styled(ScrollLink)`
  text-decoration: none;
  color: #1de9b6;
  background: transparent;
  border: 1px solid #1de9b6;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  border-radius: 5px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #1de9b6;
    border: none;
    color: white;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
`;
