import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '50vh', // Set minimum height to viewport height
  backgroundColor: '#FFFFFF', // Light background color
  padding: theme.spacing(4), // Add padding
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(3), // Spacing below the main heading
  textAlign: 'center',
  color: '#000000', // Text color
}));

const HorizontalBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(3), // Adjust the gap between boxes
  flexWrap: 'wrap', // Wrap items to next line if they overflow
}));

const VerticalBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px', // Adjusted width for each box
  backgroundColor: '#7321AE', // Purple background color
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3), // Margin bottom between boxes
  textAlign: 'center',
  '& h4': {
    fontSize: '34px', // Increase heading font size
    fontWeight: 'bold', // Make heading bold
    color: '#EEECEC', // Text color
    marginBottom: theme.spacing(2), // Spacing below heading
  },
  '& p': {
    fontSize: '28px', // Increase paragraph font size
    color: '#EEECEC', // Text color
  },
}));

const ThreeBoxesPage = () => {
  return (
    <CustomBox>
      <MainHeading variant="h2" gutterBottom>
        Our Values
      </MainHeading>
      <HorizontalBoxContainer>
        <VerticalBox>
          <Typography variant="h4" gutterBottom>
            Compassion
          </Typography>
          <Typography variant="body1">
            We approach healthcare with empathy and a deep understanding of the challenges you may face.
          </Typography>
        </VerticalBox>
        <VerticalBox>
          <Typography variant="h4" gutterBottom>
            Excellence
          </Typography>
          <Typography variant="body1">
            Our commitment to excellence ensures that you receive the highest standard of care.
          </Typography>
        </VerticalBox>
        <VerticalBox>
          <Typography variant="h4" gutterBottom>
            Innovation
          </Typography>
          <Typography variant="body1">
            We embrace innovative healthcare solutions to stay at the forefront of medical advancements.
          </Typography>
        </VerticalBox>
      </HorizontalBoxContainer>
    </CustomBox>
  );
};

export default ThreeBoxesPage;
