import React from 'react'
import { FooterText, FooterWrapper } from './footer.elements'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>&copy; {new Date().getFullYear()} - BregaCode</FooterText>
        </FooterWrapper>
    )
}

export default Footer
