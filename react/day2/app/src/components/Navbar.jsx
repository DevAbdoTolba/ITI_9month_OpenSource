import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MovieIcon from '@mui/icons-material/Movie';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e1e', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon />} sx={{ textTransform: 'none', fontSize: '1.05rem', fontWeight: 'bold' }}>
          Home
        </Button>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button component={Link} to="/login" color="inherit" startIcon={<LoginIcon />} sx={{ textTransform: 'none' }}>
            Login
          </Button>
          <Button component={Link} to="/register" color="inherit" startIcon={<PersonAddIcon />} sx={{ textTransform: 'none' }}>
            Register
          </Button>
          <Button component={Link} to="/todo" color="inherit" startIcon={<FormatListBulletedIcon />} sx={{ textTransform: 'none' }}>
            Todo
          </Button>
          <Button component={Link} to="/movies" color="inherit" startIcon={<MovieIcon />} sx={{ textTransform: 'none' }}>
            Movies
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}