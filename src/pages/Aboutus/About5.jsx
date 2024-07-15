import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import aboutImg from '../../assets/Booking.png';
import aboutimg from '../../assets/aboutimg2.png';
import AboutImg from '../../assets/aboutimg3.png';


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
    flexDirection: 'column',
    gap: theme.spacing(4), // Adjust gap between GuideBoxes
    alignItems: 'center',
    width: '100%',
    // maxWidth: '1200px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    padding: theme.spacing(2),
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  }));

  return (
    <CustomBox>
      <Typography
        variant='h2'
        sx={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#000000',
          textAlign: 'center',
          marginBottom: theme.spacing(3),
        }}
      >
        Online Consulting: Expert Care, Anywhere You Are!
      </Typography>
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
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '1.5rem',
              color: '#3B3c45',
              my: 7,
              lineHeight: '1.6',
            }}
          >
            Embrace a new era of healthcare with our cutting-edge online consulting service. Now, you can access expert medical advice and consultations from the comfort of your home. Our virtual platform ensures that you receive personalized care, making healthcare accessible at your fingertips.
            Experience the convenience of appointments without boundaries – Q1B Health Care brings our expertise to you, wherever you are.
          </Typography>
        </GuideBox>
        <GuideBox>
          <img src={aboutimg} alt='aboutimg' />
        </GuideBox>
      </LargeBox>
      <Typography
        variant='h2'
        sx={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#000000',
          textAlign: 'center',
          marginBottom: theme.spacing(3),
          marginTop: theme.spacing(5), // Adjust top margin for spacing
        }}
      >
        Medicine Courier Parceling: Your Prescriptions, Delivered to You!
      </Typography>
      <LargeBox>
        <GuideBox>
          <img src={AboutImg} alt='aboutimg' />
        </GuideBox>
        <GuideBox>
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '1.5rem',
              color: '#3B3c45',
              my: 7,
              lineHeight: '1.6',
            }}
          >
            Say goodbye to pharmacy queues and medication hassles. Q1B Health Care introduces our exclusive medicine courier parceling service. Once your prescription is issued, we'll ensure your medications are promptly delivered to your doorstep. This streamlined service not only saves you time but also guarantees that you have uninterrupted access to your medications.
             Your health is our priority, and we're dedicated to making the entire process as convenient as possible
          </Typography>
        </GuideBox>
      </LargeBox>
    </CustomBox>
  );
}

export default Aboutus;
