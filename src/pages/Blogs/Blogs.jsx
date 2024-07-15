import React from 'react';
import { Box, Typography, Card, CardContent, styled, Button } from '@mui/material'; // Ensure Button is imported
import { Link as RouterLink } from 'react-router-dom';
import blog1 from '../../assets/Booking.png';
import blog2 from '../../assets/doctor-offering-medical-teleconsultation 1.png';
import blog3 from '../../assets/medium-shot-women-holding-hands-indoors 1.png';

// Styled component for each vertical box
const VerticalBox = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  width: '100%', // Ensure each card occupies full width
  maxWidth: '500px',
  backgroundColor: '#F0F0F0',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

// Styled image for uniform sizing
const StyledImage = styled('img')({
  width: '400px',   // Adjust the width as needed
  height: '250px',  // Adjust the height as needed
  objectFit: 'cover',  // Ensures the image covers the defined dimensions
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
});
// Component for rendering a single vertical box
const VerticalBoxItem = ({ imageSrc, title, description }) => (
  <VerticalBox>
    <StyledImage src={imageSrc} alt={title} />
    <CardContent>
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="textPrimary" gutterBottom>
        {description}
      </Typography>
      <RouterLink to="/Blogs" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary" fullWidth>
          Read More
        </Button>
      </RouterLink>
    </CardContent>
  </VerticalBox>
);

// Main component
const VerticalBoxes = () => {
  // Sample data for vertical boxes
  const boxes = [
    {
      id: 1,
      imageSrc: blog1,
      title: 'Empowering Health: Your Guide to Q1B Wellness',
      description: 'Q1B Health pioneers transformative healthcare innovations, revolutionizing patient care and setting new standards for accessibility, efficiency, and effectiveness in healthcare delivery.',
    },
    {
      id: 2,
      imageSrc: blog2,
      title: 'Empowering Health: Your Guide to Q1B Wellness',
      description: 'Q1B Health pioneers innovative healthcare solutions that integrate advanced technology, compassionate care, and holistic well-being approaches, setting new standards in patient-centered medicine and preventive health globally.',
    },
    {
      id: 3,
      imageSrc: blog3,
      title: 'Tech Detox: Unplug for a Healthier You',
      description: 'Taking a break from technology improves mental well-being by reducing stress, enhancing sleep quality, boosting productivity, fostering creativity, nurturing relationships, and promoting mindfulness through offline activities and tech-free zones, highlighting its essential role in mental health.',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        height: '80vh',
        overflowY: 'auto',
        backgroundColor: '#ECEFF1',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontSize: '25px',
          fontWeight: '100',
          color: '#000000',
          my: 2,
        }}
      >
        Our Blog
      </Typography>
      <Typography variant="h4" sx={{ fontSize: '40px', fontWeight: 'bold', color: '#000000', textAlign: 'center', my: 2 }}>
        Recent <span style={{ color: '#40B24E' }}>Articles</span>
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {boxes.map((box) => (
          <VerticalBoxItem
            key={box.id}
            imageSrc={box.imageSrc}
            title={box.title}
            description={box.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default VerticalBoxes;
