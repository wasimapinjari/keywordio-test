import { Outlet } from 'react-router-dom';

import Header from './Header';
import { Box, Toolbar } from '@mui/material';

function AppLayout() {
  return (
    <>
      <Header />
      <Box component='main' sx={{ minHeight: "100vh", bgcolor: '#FAFAFA', p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
}

export default AppLayout;
