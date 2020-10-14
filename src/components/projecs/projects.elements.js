import styled from "styled-components/macro";
import image from "./bg.jpg";

export const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
  padding: 1rem;
  background-image: url(${image});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
`;

export const ProjectsTitle = styled.h2`
  font-size: 2rem;
  grid-column: 1/ -1;
  justify-self: center;
  padding: 1rem;
  text-transform: capitalize;
  color: white;
`;
