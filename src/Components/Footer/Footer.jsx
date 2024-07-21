import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled('footer')({
  backgroundColor: '#ffffff',
  color: 'black',
  textAlign: 'center',
  padding: '20px 0',
  borderTop: '1px solid #e0e0e0',
});

const SocialLinks = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
});

const NavLinks = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '10px',
});

const StyledLink = styled(MuiLink)({
  textDecoration: 'none',
  color: 'black',
  fontSize: '1em',
  fontWeight: 600,
  '&:hover': {
    color: 'gray',
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <StyledLink href="https://facebook.com" target="_blank">
          <FacebookIcon />
        </StyledLink>
        <StyledLink href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </StyledLink>
        <StyledLink href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </StyledLink>
      </SocialLinks>
      <NavLinks>
        <StyledLink href="/covidstats">Covid Stats</StyledLink>
        <StyledLink href="/countrystats">Country Stats</StyledLink>
        <StyledLink href="/aboutus">About Us</StyledLink>
      </NavLinks>
      <Typography variant="body2">© 2023 COVID-APP. All rights reserved.</Typography>
    </FooterContainer>
  );
};

export default Footer;
