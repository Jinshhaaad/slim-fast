import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faWhatsapp,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

function Partner() {

    
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
    },
  }));

  const SocialLink = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2), // Adjust as needed
    '&:last-child': {
      marginRight: 0,
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#000000',
              fontWeight: '700',
              mb: 2,
              textAlign: 'center',
              paddingTop: '8px', // Added padding top
            }}
          >
            Give us a Call
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '30px',
              color: '#000000',
              fontWeight: '800',
              mb: 3,
              textAlign: 'center',
            }}
          >
            +91 9123456789
          </Typography>
        </CustomBox>
        <Divider orientation="vertical" flexItem />
        <CustomBox>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#000000',
              fontWeight: '700',
              mb: 2,
              textAlign: 'center',
              paddingTop: '8px', // Added padding top
            }}
          >
            Connect with Us
          </Typography>
          <Box className="social-container">
            <SocialLink
              href="http://www.youtube.com/@Q1BHealthCare"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} size="3x" style={{ color: '#FF0000' }} />
            </SocialLink>
            <SocialLink
              href="https://wa.me/917025040484?text= I saw Q1B Website. I need a consultation." target="_blank"
              className="whatsapp social"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: '#00FF00' }} />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/q1bhealthcare?igsh=aDNmcXF1Mzk1YWZp"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: '#E1306C' }} />
            </SocialLink>
          </Box>
        </CustomBox>
        <Divider orientation="vertical" flexItem />
        <CustomBox>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#000000',
              fontWeight: '700',
              mb: 2,
              textAlign: 'center',
              paddingTop: '8px', // Added padding top
            }}
          >
            Visit our Clinic
          </Typography>
          <Typography
            sx={{
              fontSize: '30px',
              color: '#000000',
              fontWeight: '800',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Koduvally, Calicut
            <br />
            Omassery, Calicut
          </Typography>
        </CustomBox>
      </CustomContainer>
    </Box>
  );
}

export default Partner;
