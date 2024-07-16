import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import AboutImg from '../../assets/home000.jpg';

function Aboutus() {
  const theme = useTheme();

  // Animation keyframes and styles
  const styles = {
    animation: `$fadeInUp .25s ease`,
    '@keyframes fadeInUp': {
      '0%': {
        opacity: 0,
        transform: 'translateY(20px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };

  // Styled components
  const CustomBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0, // No padding by default
    backgroundColor: '#FFFFFF',
    minHeight: '80vh',
  }));

  const LargeBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  }));

  const TextContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align text by default
    justifyContent: 'center',
    textAlign: 'center', // Center align text by default
    padding: 0, // No padding by default
    ...styles,
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start', // Left align text for larger screens
      textAlign: 'left', // Left align text for larger screens
      paddingLeft: theme.spacing(15), // Adjusted padding for larger screens
    },
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      animation: `${styles.animation}`,
      [theme.breakpoints.up('sm')]: {
        maxWidth: '80%', // Adjusted max width for larger screens
      },
    },
  }));

  const AnimatedTypography = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#5c994d',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    ...styles,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem', // Adjusted font size for smaller screens
    },
  }));

  const BodyTypography = styled(Typography)(({ theme }) => ({
    fontWeight: '500',
    fontSize: '1rem', // Adjusted font size for smaller screens
    color: '#3B3c45',
    my: 4,
    lineHeight: '1.6',
    textAlign: 'justify', // Ensure text justification for better readability
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2rem', // Default font size for larger screens
    },
  }));

  const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center align items horizontally
    marginTop: theme.spacing(4), // Adjust spacing above the button
  }));

  return (
    <CustomBox>
      <LargeBox>
        <TextContainer>
          <AnimatedTypography>
            Reach Your Weight Loss Goals With <span style={{ color: '#5b974d' }}>SlimFast</span>
          </AnimatedTypography>
          <BodyTypography>
            Your trusted partner for achieving sustainable health and wellness goals. With science-backed programs and personalized plans, we make healthy living effortless. Join us and embark on your journey to a healthier, happier you today. Transform your lifestyle with our expert support and proven strategies.
          </BodyTypography>
          <ButtonContainer>
            <Button variant="contained" style={{ backgroundColor: '#5c994d', color: '#FFFFFF' }}>
              Start Now
            </Button>
          </ButtonContainer>
        </TextContainer>
        <ImageContainer>
          <img src={AboutImg} alt='aboutimg' />
        </ImageContainer>
      </LargeBox>
    </CustomBox>
  );
}

export default Aboutus;
