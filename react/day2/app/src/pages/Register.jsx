import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let tempErrors = {};
    let isValid = true;

    // Validation Rules
    if (!formData.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.username || /\s/.test(formData.username)) {
      tempErrors.username = 'Username required (no spaces allowed)';
      isValid = false;
    }

    // Min 8 chars, 1 lowercase, 1 uppercase, 1 digit, 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      tempErrors.password = 'Min 8 chars, 1 lower, 1 upper, 1 digit, 1 special (*@%$#)';
      isValid = false;
    }

    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords must match';
      isValid = false;
    }

    setErrors(tempErrors);

    if (isValid) {
      // Lazy routing: successful register just dumps you in the todo app
      history.push('/todo');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f6f8', py: 4 }}>
      <Box 
        component="form" 
        onSubmit={handleRegister} 
        sx={{ backgroundColor: '#fff', p: 4, borderRadius: 2, boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: 450, display: 'flex', flexDirection: 'column', gap: 2.5 }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
          Register Form
        </Typography>

        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          label="User Name"
          name="username"
          variant="outlined"
          fullWidth
          value={formData.username}
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />

        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          startIcon={<PersonAddIcon />}
          sx={{ py: 1.5, mt: 1, backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#1b5e20' } }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}