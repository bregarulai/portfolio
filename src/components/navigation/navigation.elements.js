import styled from "styled-components/macro";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkReact } from "react-router-dom";

export const Nav = styled.nav`
  padding: 0 5rem;
  height: 10vh;
  border-bottom: 1px solid black;
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
`;

export const Link = styled(LinkScroll)`
  text-decoration: none;
  color: black;
  padding-left: 1rem;
  text-transform: uppercase;
`;

export const ReactLink = styled(LinkReact)`
  text-decoration: none;
  color: black;
  padding-left: 1rem;
  text-transform: uppercase;
`;
