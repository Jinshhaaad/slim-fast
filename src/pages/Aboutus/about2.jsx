import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import aboutImg from '../../assets/Booking.png';

function Aboutus() {
  const theme = useTheme();

  const CustomBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    minHeight: '70vh',
  }));

  const LargeBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    // maxWidth: '1200px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  }));

  return (
    <CustomBox>
      <div
        style={{
          width: '50%',
          height: '6px',
          backgroundColor: '#EEECEC',
          margin: '0 auto',
        }}
      ></div>
      <LargeBox>
        <GuideBox>
          <Typography
            sx={{
              fontSize: '40px',
              color: '#000000',
              fontWeight: '700',
              pt: 1,
              [theme.breakpoints.down('sm')]: {
                fontSize: '32px',
              },
            }}
          >
            Our Commitment
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '26px',
              color: '#3B3c45',
              my: 1,
              lineHeight: '1.6',
              [theme.breakpoints.down('sm')]: {
                fontSize: '22px',
              },
            }}
          >
            At the heart of Q1B Health Care is a commitment to delivering exceptional healthcare services with a personalized touch. We understand that each individual is unique, and our mission is to provide compassionate care tailored to your needs.
          </Typography>
        </GuideBox>
        <GuideBox>
          <img src={aboutImg} alt='aboutimg' />
        </GuideBox>
      </LargeBox>
    </CustomBox>
  );
}

export default Aboutus;
