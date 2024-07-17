import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/logoslimfast-removebg-preview.png';

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav_titles.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ContactsIcon />}
                {index === 4 && <ContactsIcon />}
                {/* Add more icons as needed */}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const nav_titles = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: '/about',
      display: 'About',
    },
    {
      path: '/services',
      display: 'Services',
    },
    {
      path: '/testimonials',
      display: 'Testimonials',
    },
    {
      path: '/contact',
      display: 'Contact',
    },
  ];

  const NavBarLinkBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const NavBarLink = styled(Typography)(({}) => ({
    fontSize: '21px',
    color: '#5c994d',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#464d42',
    },
  }));

  const NavBarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    maxWidth: '100px', // Adjust the maximum width of the logo image
    height: 'auto', // Ensure the height adjusts proportionally
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }));

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#FFFFFF',
        zIndex: 1000, // Ensure the navbar stays above other content
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for better visibility
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 40px', // Adjust padding as needed
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CustomMenuIcon onClick={toggleDrawer('left', true)} />
            <Drawer
              anchor='left'
              open={mobileMenu['left']}
              onClose={toggleDrawer('left', false)}
            >
              {list('left')}
            </Drawer>
            <NavBarLogo src={logoImg} />
          </Box>
          <NavBarLinkBox>
            {nav_titles.map((item, index) => (
              <NavBarLink
                key={index}
                variant='body2'
                onClick={() => navigate(item.path)}
              >
                {item.display}
              </NavBarLink>
            ))}
          </NavBarLinkBox>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <CustomButton
            backgroundColor='#5c994d'
            color='#fff'
            buttonText='+91 9123456789'
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
