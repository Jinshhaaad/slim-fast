import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';

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
  flex: '1 1 30%', // Adjust width of each card
  backgroundColor: '#CEB7DF',
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
  top: '-20px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(1),
  borderRadius: '50%',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
}));

function Services() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        mt: '40px',
        mb: '10px',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontSize: '2rem',
          color: '#000000',
          textAlign: 'center',
          my: 3,
        }}
      >
        Our Services
      </Typography>
      <CustomBox>
        <Typography
          variant='body2'
          sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center',
          }}
        >
          Our <span style={{ color: '#40B24E' }}>Patients</span> Services
        </Typography>
      </CustomBox>

      <CardsContainer>
        {/* Row with all cards */}
        <RowContainer>
          {/* Card 1 */}
          <Card>
            <IconWrapper>
              <FontAwesomeIcon icon={faUserMd} size="2x" style={{ color: '#632D8A' }} />
            </IconWrapper>
            <Typography variant='h5' sx={{ color: '#000000', mb: 2, pt: 4 }}>
              Unani
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
            "Discover the gentle and holistic healing approach of Unani medicine. Unani focuses on restoring balance and promoting natural healing. Using herbal remedies, dietary adjustments, and therapeutic practices, Unani offers personalized treatments for various ailments, emphasizing overall well-being and harmony within the body."            </Typography>
          </Card>

          {/* Card 2 */}
          <Card>
            <IconWrapper>
              <FontAwesomeIcon icon={faUserMd} size="2x" style={{ color: '#632D8A' }} />
            </IconWrapper>
            <Typography variant='h5' sx={{ color: '#000000', mb: 2, pt: 4 }}>
              Homeopathy
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
            "Experience gentle and natural healing with our homeopathic services. Using diluted natural substances to stimulate the body's innate healing abilities, homeopathy offers personalized treatments for a wide range of health concerns, promoting holistic well-being and restoring balance."            </Typography>
          </Card>

          {/* Card 3 */}
          <Card>
            <IconWrapper>
              <FontAwesomeIcon icon={faUserMd} size="2x" style={{ color: '#632D8A' }} />
            </IconWrapper>
            <Typography variant='h5' sx={{ color: '#000000', mb: 2, pt: 4 }}>
              Ayurveda
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
            "Discover ancient healing wisdom with our Ayurveda services. From personalized consultations and rejuvenating massages to herbal therapies and lifestyle guidance, our treatments promote holistic well-being, balance, and vitality."            </Typography>
          </Card>

          {/* Card 4 */}
          <Card>
            <IconWrapper>
              <FontAwesomeIcon icon={faUserMd} size="2x" style={{ color: '#632D8A' }} />
            </IconWrapper>
            <Typography variant='h5' sx={{ color: '#000000', mb: 2, pt: 4 }}>
              Naturopathy
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
            "Discover natural healing with naturopathy, a holistic healthcare approach that utilizes natural therapies like herbal medicine, nutrition counseling, and lifestyle adjustments to support the body's self-healing mechanisms and promote overall well-being."                    </Typography>
          </Card>
        </RowContainer>
      </CardsContainer>
    </Box>
  );
}

export default Services;
