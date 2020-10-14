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
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  color: #757575;
  text-transform: capitalize;
`;

export const ProjectButton = styled(ScrollLink)`
  text-decoration: none;
  color: white;
  background: transparent;
  border: 1px solid white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #757575;
    border: none;
  }
`;
