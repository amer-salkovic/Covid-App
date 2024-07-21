import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Container = styled(Box)({
  textAlign: 'center',
  padding: '20px',
});

const MapImage = styled('img')({
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
});

const StatsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
});

const StatCard = styled(Card)({
  width: '250px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

const StatNumber = styled(Typography)({
  fontSize: '1.5em',
  fontWeight: 'bold',
});

const LinkContainer = styled(Link)({
  textDecoration: 'none',
});

const CountryStatsCard = styled(StatCard)({
  '&:hover': {
    '& $StatNumber': {
      color: 'red',
    },
  },
});

const Home = () => {
  return (
    <Container>
      <MapImage src="/src/Components/Home/Img/glavna.png" alt="World Map" />
      <Typography variant="h4" component="h2" color="primary" gutterBottom>
        World Stats
      </Typography>
      <StatsContainer>
        <StatCard>
          <CardContent>
            <Typography variant="h6" component="h3">
              Recovered:
            </Typography>
            <StatNumber style={{ color: 'green' }}>1,911,806,582</StatNumber>
          </CardContent>
        </StatCard>
        <StatCard>
          <CardContent>
            <Typography variant="h6" component="h3">
              Deaths:
            </Typography>
            <StatNumber style={{ color: 'red' }}>21,032,028</StatNumber>
          </CardContent>
        </StatCard>
        <StatCard>
          <CardContent>
            <Typography variant="h6" component="h3">
              Active Cases:
            </Typography>
            <StatNumber style={{ color: 'blue' }}>50,362,509</StatNumber>
          </CardContent>
        </StatCard>
        <LinkContainer to="/countrystats">
          <CountryStatsCard>
            <CardContent>
              <Typography variant="h6" component="h3">
                Country Stats
              </Typography>
              <StatNumber>Link</StatNumber>
            </CardContent>
          </CountryStatsCard>
        </LinkContainer>
      </StatsContainer>
    </Container>
  );
};

export default Home;
