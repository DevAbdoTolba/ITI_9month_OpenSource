import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFavorite } from '../store/favoritesSlice';

export default function Favorites() {
  const favorites = useSelector(state => state.favorites.movies);
  const dispatch = useDispatch();

  return (
    <Box p={4} style={{ maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        My Favorites
      </Typography>
      
      {favorites.length === 0 ? (
        <Typography variant="h6" color="textSecondary" textAlign="center">
          No favorites added yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  minWidth: 260,
                  maxWidth: 260,
                  height: 450,
                  borderRadius: 16,
                  position: 'relative'
                }}
              >
                <IconButton 
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(removeFavorite({ id: movie.id }));
                  }}
                  sx={{ 
                    position: 'absolute', 
                    top: 8, 
                    right: 8, 
                    backgroundColor: 'rgba(255,255,255,0.7)', 
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                    zIndex: 2
                  }}
                >
                  <DeleteIcon color="error" />
                </IconButton>
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {movie.poster_path && (
                    <CardMedia
                      component="img"
                      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      style={{ height: 380, width: '100%', objectFit: 'cover' }}
                    />
                  )}
                  <CardContent style={{ flexGrow: 1, padding: '16px', overflow: 'hidden' }}>
                    <Typography 
                      variant="h6" 
                      color="textPrimary" 
                      align="center" 
                      style={{ 
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%'
                      }}
                    >
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
