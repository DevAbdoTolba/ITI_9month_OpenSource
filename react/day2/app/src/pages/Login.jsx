import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;
    let tempErrors = { email: '', password: '' };

    // Regex for standard xxx@xxxx.com format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.email = 'Invalid email format (e.g. user@domain.com)';
      isValid = false;
    }

    if (!password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(tempErrors);

    if (isValid) {
      // Lazy routing: If valid, just push to the next page
      history.push('/todo');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f6f8' }}>
      <Box 
        component="form" 
        onSubmit={handleLogin} 
        sx={{ backgroundColor: '#fff', p: 4, borderRadius: 2, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
          Sign In
        </Typography>

        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  onClick={() => setShowPassword(!showPassword)} 
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          startIcon={<LoginIcon />}
          sx={{ py: 1.5, backgroundColor: '#2196f3', '&:hover': { backgroundColor: '#1976d2' } }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}