import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faLeaf, faAppleAlt } from '@fortawesome/free-solid-svg-icons'; // Different icons for each service

const CustomBox = styled(Box)(({ theme }) => ({
  width: '30%',
  [theme.breakpoints.down('md')]: {
    width: '85%',
  },
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(2),
}));

const RowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Card = styled(Box)(({ theme }) => ({
  width: '100%', // Full width on smaller screens
  maxWidth: '400px', // Maximum width of the card
  height: '100%', // Adjust height as needed
  minHeight: '400px', // Set minimum height to ensure cards are all the same height
  backgroundColor: '#5c994d',
  borderRadius: '12px', // Square shape with rounded corners
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(3),
  marginRight: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Add transition for transform and box-shadow properties
  '&:hover': {
    transform: 'translateY(-10px)', // Lift the card on hover
    boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.15)', // Add a subtle shadow on hover
  },
  [theme.breakpoints.down('sm')]: {
    flex: '1 1 90%',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px', // Adjust top positioning as needed
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(2), // Increased padding for better visual balance
  borderRadius: '50%',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
}));

const Icon = styled(FontAwesomeIcon)(({ theme }) => ({
  color: '#5c994d',
  fontSize: '5rem', // Adjust icon size
}));

const TextWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2), // Add spacing between icon and text
}));

function Services() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px',
        mt: '20px',
        mb: '10px',
      }}
    >
      <CustomBox>
        <Typography
          variant='body2'
          sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#464d42', // Change text color to white
            textAlign: 'center',
          }}
        >
          Our <span style={{ color: '#5c994d' }}>Services</span> 
        </Typography>
      </CustomBox>

     

      <CardsContainer>
        <RowContainer>
          {/* Card 1 - Personalized Diet Plans */}
          <Card>
            <IconWrapper>
              <Icon icon={faHandHoldingHeart} />
            </IconWrapper>
            <TextWrapper>
              <Typography variant='h5' sx={{ color: '#FFFFFF', pt: 15 , fontWeight: 'bold',}}>
                Personalized Diet Plans
              </Typography>
              <Typography variant='body1' sx={{ color: '#FFFFFF', textAlign: 'justify',pt:3 }}>
                Receive a customized diet plan created by our certified nutritionists to suit your specific health goals and dietary preferences.
              </Typography>
            </TextWrapper>
          </Card>

          {/* Card 2 - Expert Nutrition Advice */}
          <Card>
            <IconWrapper>
              <Icon icon={faAppleAlt} />
            </IconWrapper>
            <TextWrapper>
              <Typography variant='h5' sx={{ color: '#FFFFFF', pt: 15 , fontWeight: 'bold',}}>
                Expert Nutrition Advice
              </Typography>
              <Typography variant='body1' sx={{ color: '#FFFFFF', textAlign: 'justify',pt:3 }}>
                Benefit from the latest nutrition research and expert advice to ensure your diet is both effective and sustainable.
              </Typography>
            </TextWrapper>
          </Card>

          {/* Card 3 - 100% Satisfaction Guarantee */}
          <Card>
            <IconWrapper>
              <Icon icon={faLeaf} />
            </IconWrapper>
            <TextWrapper>
              <Typography variant='h5' sx={{ color: '#FFFFFF', pt: 15 , fontWeight: 'bold',}}>
                100% Satisfaction Guarantee
              </Typography>
              <Typography variant='body1' sx={{ color: '#FFFFFF', textAlign: 'justify' ,pt:3}}>
                We are confident in our ability to help you achieve your goals. If you don't see any changes after 1 month, we'll give you a full refund.
              </Typography>
            </TextWrapper>
          </Card>
        </RowContainer>
      </CardsContainer>
    </Box>
  );
}

export default Services;
