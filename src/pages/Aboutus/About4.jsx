import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '70vh', // Set minimum height to viewport height
  backgroundColor: '#FFFFFF', // White background color
  padding: theme.spacing(4), // Add padding
}));

const LargeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row', // Ensure flex direction is row to align text vertically
  justifyContent: 'space-between', // Align items to space between
  alignItems: 'center', // Center align items vertically
  width: '100%', // Adjusted width to fill the available space
  maxWidth: '1200px', // Increased maximum width for larger box
  height: '400px', // Increased height of the large box
  backgroundColor: '#FFFFFF', // Light grey background color
  borderRadius: '30px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
  padding: theme.spacing(3), // Added padding for better spacing
}));

const LeftSide = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2), // Adjusted padding for left side content
}));

const RightSide = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2), // Adjusted padding for right side content
  borderLeft: '2px solid #CCCCCC',
 
}));

const PageWithLargeBox = () => {
  return (
    <CustomBox>
      <LargeBox>
        <LeftSide>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontSize: '41px' }}>
            Why Choose <span style={{ color: '#7321AE' }}>Q1B</span> <br/> Health Care<span style={{ color: '#7321AE' }}>?</span> <br/>
          </Typography>
          
        </LeftSide>
        <RightSide>
          <Typography variant="body1" align="center" sx={{ fontSize: '29px' }}>
            At Q1B Health Care, we redefine healthcare by combining expertise with convenience. Our commitment to your well-being is exemplified through two key services that set us apart.
          </Typography>
        </RightSide>
      </LargeBox>
    </CustomBox>
  );
};

export default PageWithLargeBox;
