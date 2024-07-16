import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const SquareBox = styled(Box)(({ theme }) => ({
  width: '100%', // Adjusted width to be responsive
  maxWidth: '1000px', // Maximum width to maintain layout on larger screens
  height: 'auto', // Height set to auto for responsive height
  backgroundColor: '#EEECEC',
  borderRadius: '10px',
  // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}));

const BoldText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: 'calc(2vw + 20px)', // Responsive font size using vw units with a minimum of 20px
  textAlign: 'center',
  marginBottom: '16px',
});

function SquareBoxWithDescription() {
  return (
    <SquareBox>
      <BoldText>
      The Ultimate Guide to Food and Nutrition
      </BoldText>
      <Typography variant="body1" sx={{ textAlign: 'center', color: '#333', fontSize: 'calc(0.8vw + 16px)' }}>
      Transform your Health and reach your Weight Loss Goals!      </Typography>
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
        minHeight: '50vh',
        backgroundColor: '#FFFFFF',
        padding: '20px', // Added padding for overall layout
      }}
    >
      <SquareBoxWithDescription />
    </Box>
  );
}

export default App;
