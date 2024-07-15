import React from 'react';
import { Grid, Box, Typography, styled } from '@mui/material';

// Styled components for custom styling
const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#F3F1F1',
  padding: theme.spacing(4),
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
}));

const PageWithVerticalBoxes = () => {
  return (
    <CustomBox>
      {/* Grid container for the layout */}
      <Grid container spacing={4}>
        {/* First vertical box */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} className="image-container">
              <ImageBox>
                <img src="/path-to-your-image.jpg" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
              </ImageBox>
            </Grid>
            <Grid item xs={12} className="text-container">
              <ContentBox>
                <Typography variant="h5" align="center" gutterBottom>
                  Heading 1
                </Typography>
                <Typography variant="body1" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis erat semper, sed consequat velit commodo.
                </Typography>
              </ContentBox>
            </Grid>
          </Grid>
        </Grid>

        {/* Second vertical box */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} className="image-container">
              <ImageBox>
                <img src="/path-to-your-image.jpg" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
              </ImageBox>
            </Grid>
            <Grid item xs={12} className="text-container">
              <ContentBox>
                <Typography variant="h5" align="center" gutterBottom>
                  Heading 2
                </Typography>
                <Typography variant="body1" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis erat semper, sed consequat velit commodo.
                </Typography>
              </ContentBox>
            </Grid>
          </Grid>
        </Grid>
        
        {/* Duplicate as needed for more vertical boxes */}
      </Grid>
    </CustomBox>
  );
};

export default PageWithVerticalBoxes;
