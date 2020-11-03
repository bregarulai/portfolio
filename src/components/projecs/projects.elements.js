import styled from "styled-components/macro";
import image from "./bg.jpg";

export const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
  background-image: url(${image});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  justify-items: center;
  padding: 5rem 5rem 8rem 5rem;

  @media only screen and (max-width: 700px) {
    padding: 5rem 3rem 8rem 3rem;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 5rem 2rem 8rem 2rem;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: 2rem;
  grid-column: 1/ -1;
  justify-self: center;
  padding: 1rem;
  text-transform: capitalize;
  color: white;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
