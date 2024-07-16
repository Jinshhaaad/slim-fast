import React from 'react';
import { Box, Typography, Link, styled, TextField, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333',
  color: '#fff',
  padding: theme.spacing(6, 2),
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  margin: '0 10px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SocialIconLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  margin: '0 10px',
  fontSize: '2rem',
  '&:hover': {
    color: '#3b5998', // Change color on hover for Facebook
  },
}));



const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <FooterLinks>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
      </FooterLinks>
      <SocialIcons>
        <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </SocialIconLink>
        <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </SocialIconLink>
        <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </SocialIconLink>
      </SocialIcons>
      
     
    </FooterContainer>
  );
};

export default Footer;
