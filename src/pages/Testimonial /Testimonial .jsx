import React from 'react';
import { Box, Typography, styled, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import person from "../../assets/image1.png";

const TestimonialItem = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '450px', // Increase the maximum width as desired
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  marginRight: theme.spacing(2),
  minHeight: '300px', // Increase the minimum height as desired
  position: 'relative', // Position relative for containing the absolute positioned avatar
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Align items vertically
}));

const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<StarIcon key={i} style={{ color: '#FFD700' }} />);
    } else {
      stars.push(<StarIcon key={i} style={{ color: '#E0E0E0' }} />);
    }
  }

  return (
    <Box display="flex" justifyContent="center" mb={1}>
      {stars}
    </Box>
  );
};

const TestimonialsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: theme.spacing(3), // Add some gap between testimonial items
  justifyContent: 'center', // Center align items horizontally
}));

const Testimonial = ({ rating, text, author, sx }) => {
  // Generate a dummy image URL for the avatar
  const avatarUrl = person;

  return (
    <TestimonialItem sx={{ ...sx }}>
      <Box position="absolute" top={theme => theme.spacing(2)} left={theme => theme.spacing(2)}>
        <Avatar src={avatarUrl} sx={{ width: 80, height: 80 }} />
      </Box>
      <RatingStars rating={rating} />
      <Typography variant="body1" sx={{ mb: 1 }}>
        {text}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#632D8A' }}>
        - <span style={{ color: '#000000' }}>{author}</span>
      </Typography>
    </TestimonialItem>
  );
};

function Testimonials() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh', // Adjusted minHeight for better visibility
        backgroundColor: '#F0F0F0',
        padding: '10px',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontSize: '25px',
          fontWeight: '100',
          color: '#000000',
          
        }}
      >
        Testimonials
      </Typography>
      <Typography
        variant='body2'
        sx={{
          fontSize: '40px',
          fontWeight: 'bold',
          color: '#000000',
          textAlign: 'center',
          my: 3,
        }}
      >
        What Our <span style={{ color: '#40B24E' }}>Patients</span> Say?
      </Typography>
        
      <TestimonialsContainer>
        <Testimonial
          rating={5}
          text="Q1B Health Care is our lifeline. Expert staff, reassuring visits, and a commitment to excellence make them our trusted healthcare partner in the community."
          author="Neha S"
          sx={{ backgroundColor: '#CEB7DF', color: '#333333' }} // Custom background color and text color for this testimonial
        />
        <Testimonial
          rating={5}
          text="Q1B Health Care is our cornerstone in healthcare, providing expert staff, reassuring visits, and a steadfast commitment to excellence that solidifies their role as our trusted healthcare partner in the community."
          author="Jinshad P"
          sx={{ backgroundColor: '#652DC1', color: '#FFFFFF' }} // Custom background color and text color for this testimonial
        />
        {/* Add more Testimonial components with different background colors as needed */}
      </TestimonialsContainer>
    </Box>
  );
}

export default Testimonials;
