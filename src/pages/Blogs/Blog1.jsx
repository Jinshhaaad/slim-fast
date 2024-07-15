import React from 'react';
import { Box, Typography, styled } from '@mui/material'; // Import necessary components from MUI
import backgroundImage from '../../assets/Blog111.png';

// Styled component for the page container with background image
const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '70vh', // Set minimum height to fill viewport
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(4),
}));

// Main component for the page
const HomePage = () => {
  return (
    <PageContainer>
      <Box sx={{ textAlign: 'center', maxWidth: '800px', backgroundColor: '#632D8A', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h2" gutterBottom style={{ color: '#FFFFFF' }}>
          "Unlock Your Best Self: Dive into the World of Ultimate Wellness!"
        </Typography>
        <Typography sx={{ textAlign: 'center', maxWidth: '800px', backgroundColor: '#632D8A', padding: '20px', borderRadius: '10px' }} variant="body1" align="left" style={{ color: '#FFFFFF' }}>
          Embark on a journey to discover the keys to unlocking your full potential! Explore our blog for a treasure trove of health and wellness insights, guaranteed to elevate your lifestyle. Your path to a healthier, happier you begins here!
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default HomePage;
