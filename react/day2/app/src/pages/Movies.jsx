import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Button, Grid, Card, CardMedia, CardContent, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=442f3673d5061a81a97b9aaa3d244a01&with_genres=10751,16&page=${page}`;
        
        if (searchQuery) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=442f3673d5061a81a97b9aaa3d244a01&query=${searchQuery}&page=${page}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results) {
          if (searchQuery) {
              
              const cartoonsOnly = data.results.filter(movie => movie.genre_ids && movie.genre_ids.includes(16) && movie.genre_ids.includes(10751));
            setMovies(cartoonsOnly);
          } else {
            setMovies(data.results);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchMovies();
  }, [page, searchQuery]);

  return (
    <Box p={4} style={{ maxWidth: 1200, margin: '0 auto' }}>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 8, px: 2 }}>
        <TextField
          placeholder="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
          sx={{
            maxWidth: 700,
            backgroundColor: '#ffffff',
            borderRadius: '50px',
            boxShadow: '0px 8px 24px rgba(0,0,0,0.12)',
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              '& fieldset': {
                border: 'none',
              },
            },
            '& .MuiInputBase-input': {
              padding: '18px 32px',
              fontSize: '1.1rem',
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" sx={{ ml: 1 }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {movies.length > 0 ? movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card 
              component={Link} 
              to={`/movie/${movie.id}`} 
              style={{ 
                textDecoration: 'none', 
                display: 'flex', 
                flexDirection: 'column',
                minWidth: 260,
                maxWidth: 260,
                height: 450,
                borderRadius: 16
              }}
            >
              {movie.poster_path && (
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  style={{ 
                    height: 380, 
                    width: '100%',
                    objectFit: 'cover' 
                  }}
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
            </Card>
          </Grid>
        )) : (
          <Box display="flex" justifyContent="center" width="100%" mt={4}>
             <Typography variant="h6" color="textSecondary">
               No cartoons found. Try another search!
             </Typography>
          </Box>
        )}
      </Grid>

      <Grid container justifyContent="space-between" alignItems="center" style={{ maxWidth: 400, margin: '60px auto 20px auto' }}>
        <Grid item>
          <Button 
            variant="contained" 
            disabled={page === 1} 
            onClick={() => setPage((prev) => prev - 1)}
            startIcon={<NavigateBeforeIcon />}
            style={{ borderRadius: 50, padding: '10px 32px', fontWeight: 'bold' }}
          >
            Prev
          </Button>
        </Grid>
        
        <Grid item>
          <Typography variant="h6" color="textSecondary" style={{ fontWeight: 'bold' }}>
            Page {page}
          </Typography>
        </Grid>

        <Grid item>
          <Button 
            variant="contained" 
            onClick={() => setPage((prev) => prev + 1)}
            endIcon={<NavigateNextIcon />}
            style={{ borderRadius: 50, padding: '10px 32px', fontWeight: 'bold' }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}