import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, Paper, Chip, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=442f3673d5061a81a97b9aaa3d244a01`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return null;

  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : '';
  const runtime = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '';

  return (
    <Box p={4} maxWidth={1000} margin="0 auto">
      <Button 
        component={Link} 
        to="/movies" 
        variant="outlined" 
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to Movies
      </Button>

      <Paper elevation={3} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden' }}>
        {movie.poster_path && (
          <Box flexShrink={0} sx={{ width: { xs: '100%', md: 350 } }}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        )}
        
        <Box p={4} display="flex" flexDirection="column" gap={2} flexGrow={1}>
          <Typography variant="h3" fontWeight="bold">
            {movie.title} {releaseYear && <span style={{ color: '#666', fontWeight: 'normal' }}>({releaseYear})</span>}
          </Typography>

          {movie.tagline && (
            <Typography variant="h6" color="textSecondary" fontStyle="italic">
              "{movie.tagline}"
            </Typography>
          )}

          <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
            {movie.genres?.map(genre => (
              <Chip key={genre.id} label={genre.name} color="primary" variant="outlined" />
            ))}
          </Box>

          <Box display="flex" gap={3} mt={2} mb={1} flexWrap="wrap">
            {movie.vote_average > 0 && (
              <Typography variant="body1" display="flex" alignItems="center" gap={0.5}>
                <StarIcon color="warning" fontSize="small" />
                <strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10
              </Typography>
            )}
            {runtime && (
              <Typography variant="body1" display="flex" alignItems="center" gap={0.5}>
                <AccessTimeIcon color="action" fontSize="small" />
                <strong>Runtime:</strong> {runtime}
              </Typography>
            )}
            {movie.release_date && (
              <Typography variant="body1" display="flex" alignItems="center" gap={0.5}>
                <CalendarTodayIcon color="action" fontSize="small" />
                <strong>Release:</strong> {movie.release_date}
              </Typography>
            )}
          </Box>

          <Divider />

          <Typography variant="h5" mt={1} fontWeight="bold">
            Overview
          </Typography>
          <Typography variant="body1" lineHeight={1.6}>
            {movie.overview || "No overview available."}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}