import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import CustomButton from "../../components/CustomButton/CustomButton";

const SquareBox = styled(Box)(({ theme }) => ({
  width: '90%', // Responsive width
  maxWidth: '900px', // Maximum width
  minHeight: '40vh', // Responsive height
  backgroundColor: '#EEECEC',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2), // Responsive padding
  margin: theme.spacing(2), // Responsive margin
}));

const BoldText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: 'clamp(24px, 4vw, 40px)', // Responsive font size using clamp()
  textAlign: 'center',
  marginBottom: '16px',
});

function openWhatsAppChat() {
  const phoneNumber = '7356207310'; // Replace with your WhatsApp number
  const message = 'Hello, I have a query.'; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.location.href = whatsappLink;
}

function SquareBoxWithButton({ buttonText }) {
  return (
    <SquareBox>
      <BoldText>
        Your Health Matters. Online & Offline <br /> Consulting Available at Q1B Health Care
      </BoldText>
      <CustomButton
        backgroundColor="#40B24E"
        color="#fff"
        buttonText={buttonText}
        onClick={openWhatsAppChat} // Attach the onClick handler
        welcomeBtn={true}
      />
    </SquareBox>
  );
}

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh', // Set minHeight to fill viewport
        backgroundColor: '#FFFFFF', // Corrected background color
      }}
    >
      <SquareBoxWithButton buttonText="Contact Us" />
    </Box>
  );
}

export default App;
