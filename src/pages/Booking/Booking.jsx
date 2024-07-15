import React, { useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import bookingimg from '../../assets/Bookingimg.png';
import emailjs from '@emailjs/browser'; // Importing emailjs-com instead of @emailjs/browser

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26guc7r', 'template_4pw4kbg', form.current, 'qT9viRKxADeWEIwS4')
      .then((result) => {
        console.log('Message successfully sent!', result.text);
      }, (error) => {
        console.error('Email sending failed:', error.text);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {/* Appointment Form Box */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#E4E4E4',
          borderRadius: '45px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          padding: '30px',
          marginBottom: { xs: '20px', md: '0' },
          marginRight: { xs: '0', md: '20px' },
        }}
      >
        <Typography
          variant='body2'
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Make An <span style={{ color: '#40B24E' }}>Appointment</span>
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          {/* Name */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="from_name"
            required
          />
          {/* Email */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="to_name"
            required
          />
          {/* Message */}
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            name="message"
            required
          />
          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              marginTop: '20px',
              borderRadius: '8px',
              backgroundColor: '#4CAF50',
              '&:hover': { backgroundColor: '#388E3C' },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
      {/* Image Box */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#fff',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={bookingimg}
          alt="Placeholder Image"
          style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}
        />
      </Box>
    </Box>
  );
};

export default ContactSection;
