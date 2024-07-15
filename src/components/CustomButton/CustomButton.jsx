import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '25px',
    textTransform: 'none',
    display: 'block',
    border: '4px solid transparent',
    '&:hover': {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down('md')]: {
      margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, 'auto', 3, 'auto'),
      width: (welcomeBtn || getStartedBtn) && '90%'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: guideBtn && theme.spacing(3),
      width: (welcomeBtn || getStartedBtn) && '90%',
    },
  }));

  const openWhatsAppChat = () => {
    const phoneNumber = '7356207310'; // Replace with your WhatsApp number
    const message = 'I saw Q1B Website. I need a consultation.'; // Replace with your message
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappLink;
  };

  return (
    <StyledButton onClick={openWhatsAppChat}>{buttonText}</StyledButton>
  );
};

export default CustomButton;
