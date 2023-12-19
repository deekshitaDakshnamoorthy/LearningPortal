import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StickyFooter from './StickyFooter';
import { Link } from 'react-router-dom';

const ButtonAppBar = () => {
  const backgroundImage = 'https://images.shiksha.com/mediadata/images/articles/1584530781phpGCxT3N.jpeg'; // Replace with your image URL

  const exploreButtonStyle = {
    margin: '100px', // Adjust the margin as needed
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              News
            </Typography>
            <Link to="/home" style={{ color: 'white' }}>
              <Button variant="contained">Home</Button>
            </Link>

            <Link to="/aboutus" style={{ color: 'white' }}>
              <Button variant="contained">About Us</Button>
            </Link>

            <Link to="/signin" style={{ color: 'white' }}>
              <Button variant="contained">Login</Button>
            </Link>
            <Link to="/signup" style={{ color: 'white' }}>
              <Button variant="contained">Sign Up</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '800px', // Adjust the height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <Typography variant="h3" component="div" style={{ color: 'white' }}>
          
            Explore Now
          </Typography>
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button variant="contained" style={{exploreButtonStyle, fontSize:'40px'}}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <StickyFooter />
    </div>
  );
};

export default ButtonAppBar;
