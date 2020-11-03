import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  @media only screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
