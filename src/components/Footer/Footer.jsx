import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Box, Container } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import FontAwesome icons
import logoImg from '../../assets/aboutphoto.png';

const Footer = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        gap: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center'
        },
    }));

    const IconBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: "1rem",
        justifyContent: 'center', // Adjusted to center icons horizontally
        pt: 8, // Adjusted padding top
    }));

    const FooterLogo = styled("img")(({ theme }) => ({
        cursor: 'pointer',
        maxWidth: '100%',
        maxHeight: '80px', // Adjusted max height to 80px
        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    }));

    return (
        <Box sx={{ py: 10, backgroundColor: "#1E1E1E" }}>
            <CustomContainer>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: '#1C1C1D',
                            fontWeight: '700',
                            mb: 2,
                        }}
                    >
                        {/* Insert your title here */}
                    </Typography>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: '#FFFFFF',
                                fontWeight: '700',
                                mb: 2,
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <FooterLogo src={logoImg} /> {/* Adjust logoImg source */}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: '#FFFFFF',
                                fontWeight: '700',
                                mb: 2,
                                textAlign: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Q1B Health: Expect care, top-notch,<br />
                            service for you and your loved<br />
                            ones. Trusted in our community,<br />
                            we're here to prioritize your well-being
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: '#FFFFFF',
                            fontWeight: '700',
                            mb: 2,
                            textAlign: 'center',
                            alignItems: 'center',
                            pt: 9,
                        }}
                    >
                        Contact
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: '#FFFFFF',
                            fontWeight: '700',
                            mb: 2,
                            textAlign: 'center',
                            alignItems: 'center',
                        }}
                    >
                        Koduvally, Calicut<br />
                        Omassery, Calicut<br />
                        +91 9123456789<br />
                        Q1bhealthcare@gmail.com
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: '#FFFFFF',
                            fontWeight: '700',
                            mb: 2,
                            textAlign: 'center',
                            alignItems: 'center',
                            pt: 9,
                        }}
                    >
                        Get in touch
                    </Typography>
                    <IconBox  sx={{
                            fontSize: "20px",
                            color: '#FFFFFF',
                            fontWeight: '700',
                            mb: 2,
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                        {/* Facebook Icon with link */}
                        <a href="https://www.facebook.com/q1bhealthcare" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#FFFFFF', cursor: 'pointer' }} />
                        </a>
                        {/* Twitter Icon with link */}
                        <a  href="https://wa.me/917025040484?text= I saw Q1B Website. I need a consultation." target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#FFFFFF', cursor: 'pointer' }} />
                        </a>
                        {/* Instagram Icon with link */}
                        <a href="https://www.instagram.com/q1bhealthcare/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#FFFFFF', cursor: 'pointer' }} />
                        </a>
                        <a href="http://www.youtube.com/@Q1BHealthCare" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#FFFFFF', cursor: 'pointer' }} />
                        </a>
                    </IconBox>
                    {/* <Typography
                        sx={{
                            fontSize: "20px",
                            color: '#FFFFFF',
                            fontWeight: '700',
                            mb: 2,
                            textAlign: 'center',
                            alignItems: 'center',
                        }}
                    >
                        Keep in touch with our social media pages
                    </Typography> */}
                </Box>
            </CustomContainer>
        </Box>
    );
};

export default Footer;
