import React from 'react';
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

import {
  Footerbar,
  FooterContainer,
  FooterCopy,
  FooterH2,
  FooterLinksList,
  FooterItem
} from './FooterElements';

const Footer = () => {
  return (
    <Footerbar>
      <FooterContainer>
        
        <FooterCopy>
          <FooterH2>All rights reserved &copy; {new Date().getFullYear()}</FooterH2>
        </FooterCopy>
        
        <FooterLinksList>
          <FooterItem href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><FaFacebook /></FooterItem>
          <FooterItem href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><FaInstagram /></FooterItem>
          <FooterItem href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></FooterItem>
          <FooterItem href="https://www.linkedin.com/" target="_blank" aria-label="Linkedin"><FaLinkedin /></FooterItem>
        </FooterLinksList>
        
      </FooterContainer>
    </ Footerbar>
  )
}

export default Footer;
