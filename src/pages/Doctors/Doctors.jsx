import React from "react";
import { Box, Typography, styled } from "@mui/material";
import doctor1 from "../../assets/doctor1.jpeg";
import doctor2 from "../../assets/doctor2.jpeg";
import doctor3 from "../../assets/doctor3.jpeg";
import doctor4 from "../../assets/doctor4.jpeg";
import doctor5 from "../../assets/doctor5.jpeg";

import CustomButton from "../../components/CustomButton/CustomButton";

const RoundedBox = styled(Box)(({ theme }) => ({
  width: "70%", // Adjusted width
  backgroundColor: "#715E91",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(3),
  textAlign: "center",
  marginBottom: theme.spacing(4),
  margin: "0 auto", // Center align horizontally
  minHeight: "600px", // Adjusted minHeight
  [theme.breakpoints.down("md")]: {
    width: "90%", // Adjusted width for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Full width on small screens
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: theme.spacing(2), // Adjusted margin for spacing between ImageBox components
  width: "30%", // Default width for larger screens (like laptops)
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Full width on smaller screens (like mobile devices)
  },
}));

const RoundImage = styled("img")({
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  marginBottom: "10px",
});

// Example array of doctor names
const doctors = [
  { name: "Dr. Siraj V Tanalur, BUMS", image: doctor1, description: "Dr. Siraj V Tanalur, BUMS, is a seasoned Unani practitioner dedicated to holistic healthcare. Specializing in traditional therapies, he offers compassionate care, blending ancient wisdom with modern insights for optimal wellness." },
  { name: "Dr. Juhi Das, BHMS", image: doctor2, description: "Dr. Juhi Das, BHMS, specializes in homeopathic medicine, focusing on natural remedies and personalized treatment approaches tailored to each patient's needs." },
  { name: "Dr. Priya, BHMS", image: doctor3, description: "Dr. Priya, BHMS, is a skilled homeopath with a passion for improving patient health through holistic and integrative approaches to healing." },
  { name: "Dr. Bhagya Throl, BAMS", image: doctor4, description: "Dr. Bhagya Throl, BAMS, brings extensive experience in Ayurvedic medicine, offering comprehensive health solutions that promote balance and wellness." },
  { name: "Dr. Soufiya, ND", image: doctor5, description: "Dr. Soufiya, ND, is a dedicated naturopathic doctor committed to natural healing methods and empowering patients to achieve optimal health through lifestyle changes and natural therapies." },
];




function RoundedSquareBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120vh", // Center align vertically
        backgroundColor: "#FFFFFF", // Example background color
      }}
    >
      <RoundedBox>
        <Typography
          variant="h4"
          sx={{
            color: "#FFFFFF",
            mt: 6,
            mb: 3,
            fontWeight: "bold",
            fontSize: 44,
          }}
        >
          Our Dedicated Doctors Team
        </Typography>
        <Box
  display="flex"
  justifyContent="center"
  flexWrap="wrap"
  gap={2}
  sx={{ mt: 3 }}
>
  {doctors.map((doctors, index) => (
    <ImageBox key={index}>
      <RoundImage src={doctors.image} alt={`Image ${index}`} />
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", color: "#FFFFFF", fontSize: 22, mb: 1 }}
      >
        {doctors.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#FFFFFF", fontSize: 14, mb: 2 }}
      >
 {doctors.description}
       </Typography>
      <CustomButton
        backgroundColor="#E4E4E4"
        color="#000000"
        buttonText="Book an Appointment"
        welcomeBtn={true}
        sx={{ mt: 2 }} // Adjusted margin top for the button
      />
    </ImageBox>
  ))}
</Box>

      </RoundedBox>
    </Box>
  );
}

export default RoundedSquareBox;
