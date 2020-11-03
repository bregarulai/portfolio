import styled from "styled-components/macro";

import { Link as LinkScroll } from "react-scroll";

export const MenuWrapper = styled.aside`
  background-color: white;
  position: fixed;
  width: 100%;
  ${({ showMenu }) => (showMenu ? `top:-100vh;` : `top:0vh;`)}
  transition: top .3s ease-in-out;
  z-index: 99;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  margin-bottom: 2rem;
  align-items: center;
`;

export const Link = styled(LinkScroll)`
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  overflow-x: visible;
  padding: 0.5rem;
`;
