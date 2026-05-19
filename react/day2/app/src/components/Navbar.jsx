import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Navbar() {
  const favoritesCount = useSelector(state => state.favorites.movies.length);
  const { language, toggleLanguage } = useContext(LanguageContext);
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
          <Button component={Link} to="/favorites" color="inherit" sx={{ textTransform: 'none' }}>
            <Badge badgeContent={favoritesCount} color="error" sx={{ mr: 1 }}>
              <FavoriteIcon />
            </Badge>
            Favorites
          </Button>
          <Button color="inherit" onClick={toggleLanguage} startIcon={<LanguageIcon />} sx={{ textTransform: 'none', ml: 2 }}>
            {language === 'en-US' ? 'AR' : 'EN'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}