import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { styled } from '@mui/system';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const NavbarContainer = styled(AppBar)({
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  height: 70,
});

const ToolbarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
});

const LogoContainer = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
});

const LogoImage = styled('img')({
  width: 170,
  height: 80,
  marginLeft: 30,
});

const NavLinks = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginLeft: 'auto',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  fontSize: '1.5em',
  fontWeight: 600,
  '&:hover': {
    color: 'red',
  },
});

const ProfileIcon = styled(IconButton)({
  color: 'black',
});

const Navbar = () => {
  return (
    <NavbarContainer position="static">
      <ToolbarContainer>
        <LogoContainer to="/">
          <LogoImage src="/src/Components/NavBar/Images/logo.png" alt="Logo" />
          <Typography variant="h6" ml={1}>
            
          </Typography>
        </LogoContainer>
        <NavLinks>
        <StyledLink to="/countrystats">Country Stats</StyledLink>
        <StyledLink to="/covidstats">Covid Stats</StyledLink>
        <StyledLink to="/aboutus">About Us</StyledLink>
          
          
        </NavLinks>
      </ToolbarContainer>
    </NavbarContainer>
  );
};

export default Navbar;
