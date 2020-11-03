import styled from "styled-components/macro";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkReact } from "react-router-dom";

export const Nav = styled.nav`
  padding: 0 5rem;
  height: 10vh;
  border-bottom: 1px solid black;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  background: white;

  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  font-size: 1.5rem;
`;

export const Links = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Link = styled(LinkScroll)`
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  overflow-x: visible;
`;

export const ReactLink = styled(LinkReact)`
  text-decoration: none;
  color: black;
  padding-left: 1rem;
  text-transform: uppercase;
`;

export const MenuIcon = styled.div`
  font-size: 2rem;
  margin-top: 0.5rem;
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;
