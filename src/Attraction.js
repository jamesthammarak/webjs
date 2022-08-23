import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Attraction(props) {
  const attraction = props.attraction
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <Box
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {attraction.name }
            </Typography>
            <Card >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                    }}
                    image={attraction.coverimage}
                    alt={attraction.name }
                  />
                </Card>
            <div style = {{marginTop : '1em'}}>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {attraction.detail}
              </Typography>
            </div>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        
       
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}