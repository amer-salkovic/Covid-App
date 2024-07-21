import React, { useContext, useState } from 'react';
import { MyDataContext } from '../../Context/Provider'; // Adjust the import path according to your project structure
import { Container, Typography, Card, CardContent, CardMedia, Grid, Alert, Pagination } from '@mui/material';

const CovidStats = () => {
  const { data, loading, error } = useContext(MyDataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  if (loading) return <p>Loading...</p>;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = Array.isArray(data) ? data.slice(indexOfFirstData, indexOfLastData) : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>Covid-19 Statistics</Typography>
      <Grid container spacing={4}>
        {currentData.map(country => (
          <Grid item key={country.country || country.name} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">{country.country || 'Unknown Country'}</Typography>
                <Typography variant="body2" color="textSecondary">Continent: {country.continent || 'Unknown'}</Typography>
                <Typography variant="body2" color="textSecondary">Population: {country.population ? country.population.toLocaleString() : 'N/A'}</Typography>
                <Typography variant="body2" color="textSecondary">New Cases: {country.cases && country.cases.new ? country.cases.new : 'N/A'}</Typography>
                <Typography variant="body2" color="textSecondary">Deaths: {country.deaths && country.deaths.total ? country.deaths.total : 'N/A'}</Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt={`${country.country || 'Unknown Country'} flag`}
                height="140"
                image={`https://countryflagsapi.com/png/${country.country || 'Unknown Country'}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(data.length / dataPerPage)}
        page={currentPage}
        onChange={paginate}
        color="primary"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default CovidStats;
