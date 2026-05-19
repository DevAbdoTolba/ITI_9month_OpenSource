import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Loader() {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 999 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
