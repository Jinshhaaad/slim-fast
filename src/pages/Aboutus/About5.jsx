import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import aboutimg from '../../assets/about222.png';
import AboutImg from '../../assets/about33.png';

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
    gap: theme.spacing(1), // Adjust gap between GuideBoxes
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: theme.spacing(5, 3), // Adjust padding (vertical, horizontal)
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align items centered vertically (default)
    textAlign: 'left',
    padding: theme.spacing(2),
    '& img': {
      maxWidth: '80%',
      height: 'auto',
      paddingRight: theme.spacing(0), // Decrease right padding of the image
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start', // Adjust alignment for larger screens
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
        The Surprising Benefits of Proper Nutrition
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
              my: 5,
              lineHeight: '1.6',
              paddingLeft: theme.spacing(4), // Increase left padding here
            }}
          >
            Sustainable weight loss: By understanding the principles of healthy eating and nutrition, you can lose weight in a sustainable and healthy way.<br/>
            Increased energy levels: Eating a balanced diet that provides your body with the necessary nutrients can help increase energy levels, making it easier to be active.<br/>
            Improved digestion: Eating a diet rich in fruits, vegetables, and whole grains can help improve digestion and prevent constipation and other digestive issues.<br/>
            Better mood: Proper nutrition can also have a positive impact on mental health, helping to reduce symptoms of depression and anxiety.<br/>
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
        Take control of your Health and Lose Weight for good?
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
            Chronic weight-related diseases are at an epidemic level: High blood pressure, high cholesterol, heart disease, stroke, type 2 diabetes,
            joint problems, breathing problems, low self-esteem, depression, and even cancer. Better Manage (and Reduce the Risk) of Weight-Related Diseases through proper diet and nutrition.
            Proper nutrition not only aids in disease prevention but also enhances overall well-being and longevity, ensuring a healthier future for individuals and communities alike.
          </Typography>
        </GuideBox>
      </LargeBox>
    </CustomBox>
  );
}

export default Aboutus;
