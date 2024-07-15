import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import aboutimg from '../../assets/doctor-offering-medical-teleconsultation 1.png';
import AboutImg from '../../assets/medium-shot-women-holding-hands-indoors 1.png';
import Blogimg from '../../assets/Booking.png';



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
Tech Detox: Unplug for a Healthier You
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
              my: 1,
              lineHeight: '1.6',
            }}
          >Taking a break from technology offers numerous benefits for mental well-being. It reduces stress by allowing time to unwind and relax, improves sleep quality by minimizing screen exposure before bed, and enhances focus and productivity by reducing digital distractions. Disconnecting also promotes creativity and fosters deeper face-to-face relationships. To effectively recharge, set boundaries for tech use, engage in offline hobbies like reading or hiking,
           create tech-free zones at home, use apps to monitor screen time, and practice mindfulness activities. Consider using a visually engaging image of someone enjoying nature or engaging in screen-free activities to highlight the importance of digital detox for mental health.
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
        Empowering Health: Your Guide to Q1B Wellness
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
              my: 1,
              lineHeight: '1.6',
            }}
          >In the dynamic realm of healthcare, Q1B Health stands out as a pioneering force, reshaping our approach to well-being with groundbreaking innovations. 
          As we navigate an ever-evolving landscape, Q1B Health leads the charge in revolutionizing healthcare delivery and enhancing patient outcomes. From cutting-edge technologies to patient-centered care models, Q1B Health sets new standards, ensuring accessibility, efficiency, and effectiveness in every facet of its operations. This blog delves deep into the transformative journey of Q1B Health, 
          illuminating its profound impact on the future of healthcare.
          </Typography>
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
        }}
      >
Empowering Health: Your Guide to Q1B Wellness      </Typography>
      <div
        style={{
          width: '40%',
          height: '6px',
          backgroundColor: '#FFFFFF',
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
              my: 1,
              lineHeight: '1.6',
            }}
          >
            In today's rapidly evolving healthcare landscape, Q1B Health shines as a beacon of innovation, revolutionizing approaches to well-being with its pioneering advancements. At its core, Q1B Health integrates state-of-the-art technology with compassionate care, offering personalized solutions that cater to diverse patient needs globally. Through groundbreaking research and development, Q1B Health not only enhances diagnostic accuracy and treatment precision but also champions holistic health by emphasizing mental, emotional, and social well-being alongside physical health. By forging strategic partnerships and leveraging data-driven insights, Q1B Health sets new standards in preventive medicine and patient-centered care, empowering individuals to proactively manage their health. With a commitment to transformative healthcare practices, Q1B Health continues to redefine possibilities and inspire positive changes in the industry, ensuring a future where health outcomes are optimized and well-being flourishes.

          </Typography>
        </GuideBox>
        <GuideBox>
          <img src={Blogimg} alt='Blogimg' />
        </GuideBox>
      </LargeBox>
    </CustomBox>
  );
}

export default Aboutus;
