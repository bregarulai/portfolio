import React from "react";
import { FooterText, FooterWrapper } from "./footer.elements";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        &copy; {new Date().getFullYear()} - Flavio Aquino. Website created by
        Flavio Aquino
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
