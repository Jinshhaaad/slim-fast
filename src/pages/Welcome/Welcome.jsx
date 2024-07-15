import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import welcome from "../../assets/welcome.png"; // Ensure the path to the image is correct

const Welcome = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${welcome})`, // Set the background image
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Do not repeat the background image
        minHeight: "80vh", // Set the minimum height of the container
        pt: 4, // Padding top
        pb: 4, // Padding bottom
        color: "#fff", // Default text color for better readability on the background
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            height: "100%",
            gap: 2, // Add gap between the text box and the button
            pt: 6,
          }}
        >
          <Box
            sx={{
              borderRadius: "8px", // Rounded corners
              p: { xs: 4, md: 6 }, // Responsive padding inside the box
              maxWidth: { xs: "100%", md: "800px" }, // Increased max-width for larger screens
              width: "100%", // Ensure the box takes full available width
              boxShadow: 0, // Optional: Adds shadow for better visibility
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center text inside the box
              textAlign: "center", // Center text inside the box
              position: { xs: "relative", md: "relative" }, // Relative positioning for all screens
              left: { xs: 0, md: "-120px" }, // Move box to the left on medium screens and up
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '22px', md: '24px' }, // Responsive font size
                fontWeight: "500",
                color: "#FFFFFF",
                mb: 2, // Margin-bottom for spacing
              }}
            >
              Welcome to Q1B Health Care
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '70px', md: '90px' }, // Responsive font size
                color: "#632D8A",
                fontWeight: "bold",
                mb: 1, // Margin-bottom for spacing
              }}
            >
              We Care About
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '70px', md: '90px' }, // Responsive font size
                color: "#40B24E",
                fontWeight: "900", // Increased font weight for more emphasis
                mb: 2, // Margin-bottom for spacing
                lineHeight: 1, // Adjusted line height for better text alignment
              }}
            >
              Your Health
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "14px", md: "18px" }, // Responsive font size
                color: "#000000",
                mb: 2, // Margin-bottom for spacing
                lineHeight: 1.5,
              }}
            >
              Discover expert wellness at Q1B Health, where our commitment{" "}
              <br />
              ensures top-notch care for you and your loved ones.
              <br />
              Choose from{" "}
              <Typography
                component="span"
                sx={{
                    fontSize: { xs: '22px', md: '24px' }, 
                  color: "#632D8A", // Color for "offline" text
                  fontWeight: "bold", // Make the text bold
                }}
              >
                offline
              </Typography>
              {" "}and{" "}
              <Typography
                component="span"
                sx={{
                    fontSize: { xs: '22px', md: '24px' }, 
                  color: "#40B24E", // Color for "online" text
                  fontWeight: "bold", // Make the text bold
                }}
              >
               {" "} online{" "}
              </Typography>
                services that suit your needs.
            </Typography>
            <CustomButton
              backgroundColor="#40B24E"
              color="#fff"
              buttonText="Book an Appointment "
              welcomeBtn={true}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Welcome;
