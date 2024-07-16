import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import aboutImg from '../../assets/logoslimfast-removebg-preview.png';

function Aboutus() {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: '100%', // Adjusted width for full width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: '#E0EDE5',
    minHeight: '40vh', // Set minimum height to 70% of viewport height
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
    [theme.breakpoints.up('sm')]: {
      '& > *': {
        marginBottom: theme.spacing(2), // Adjusted padding between items vertically
      },
    },
  }));

  const LogoImage = styled('img')({
    width: '90%', // Ensure image takes full width of its container
    maxWidth: '600px', // Adjust the maximum width of the image
    height: 'auto', // Maintain aspect ratio
  });

  return (
    <CustomBox>
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
              pt: 7,
            }}
          >
            About SlimFast
          </Typography>
          <Typography
            sx={{
              fontSize: '55px',
              color: '#5c994d',
              fontWeight: '700',
              pt: 3,
            }}
          >
            Healthy Weight Loss,<br/> Deliciously Achieved
          </Typography>
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '27px',
              color: '#464d42',
              my: 1,
              pt: 2,
              textAlign: 'center', // Align text to the left
              lineHeight: '1.6', // Adjust line height for readability
            }}
          >
            "Discover a balanced approach to weight loss that combines nutritious eating with delicious flavors. Learn how to prepare satisfying meals, snacks, and desserts that support your health goals,
            without sacrificing taste or convenience. 
            Get ready to nourish your body and delight your taste buds!"
          </Typography>
        </GuideBox>
      </GuidesBox>
    </CustomBox>
  );
}

export default Aboutus;
