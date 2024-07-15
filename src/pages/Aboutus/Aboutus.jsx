import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import aboutImg from '../../assets/aboutphoto.png';

function Aboutus() {

  const CustomBox = styled(Box)(({ theme }) => ({
    width: '100%', // Adjusted width for full width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#EEECEC',
    minHeight: '70vh', // Set minimum height to 70% of viewport height
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: theme.spacing(0), // Decreased margin between GuideBoxes
    flex: '1', // Equal sizing for both boxes
    padding: theme.spacing(0), // Optional: Add padding to GuideBox content
  }));

  const LogoImage = styled('img')({
    width: '100%', // Ensure image takes full width of its container
    // maxWidth: '500px', // Adjust the maximum width of the image
    height: 'auto', // Maintain aspect ratio
  });

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
      <GuidesBox>
        <GuideBox>
          <LogoImage src={aboutImg} alt='aboutimg' />
        </GuideBox>
        <GuideBox>
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '30px',
              color: '#3B3c45',
              my: 1,
            }}
          >
            About us
          </Typography>
          <Typography
            sx={{
              fontSize: '55px',
              color: '#000000',
              fontWeight: '700',
              pt: 1,
            }}
          >
            Compassionate Care
          </Typography>
          <Typography
            sx={{
              fontSize: '55px',
              color: '#40B24E',
              fontWeight: '700',
              pt: 0,
            }}
          >
            Healthier Lives
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '27px',
              color: '#3B3c45',
              my: 1,
              textAlign: 'left', // Align text to the left
              lineHeight: '1.6', // Adjust line height for readability
            }}
          >
            At Q1B Health, our mission is to deliver <br/>exceptional and compassionate healthcare<br/> services, focusing on the individual needs of <br/>each patient.
            We envision a community <br/>where everyone has access to personalized, <br/>high-quality medical care, contributing to a <br/>healthier and happier life.
          </Typography>
        </GuideBox>
      </GuidesBox>
    </CustomBox>
  );
}

export default Aboutus;
