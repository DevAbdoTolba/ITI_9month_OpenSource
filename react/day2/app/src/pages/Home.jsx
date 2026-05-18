import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function Home() { 
  return (
    <Box sx={{ textAlign: 'center', mt: 10, p: 3 }}>
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Welcome to Our App
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Explore movies or manage your daily tasks easily.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Button component={Link} to="/movies" variant="contained" startIcon={<MovieIcon />}>
          Browse Movies
        </Button>
        <Button component={Link} to="/todo" variant="outlined" startIcon={<FormatListBulletedIcon />}>
          Manage Todo List
        </Button>
      </Box>
    </Box>
  );
}

export default Home;