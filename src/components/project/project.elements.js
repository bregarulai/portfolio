import styled from "styled-components/macro";

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  background: white;
`;

export const ProjectHeading = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
  padding-bottom: 1rem;
  color: #757575;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  padding: 0 0 1rem 0;
`;

export const ProjectText = styled.p`
  padding: 0 1rem 1rem 1rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
`;

export const ProjectLink = styled.a`
  background: #424242;
  color: white;
  text-transform: capitalize;
  border: none;
  padding: 0.5rem 2rem;
  text-decoration: none;
  margin-left: 1rem;
`;
