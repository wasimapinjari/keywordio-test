import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['DASHBOARD', 'CREATE ADS'];
const navLinks = ['dashboard', 'create'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant='h6'
        sx={{ my: 2, '& > *': { textDecoration: 'none' } }}
      >
        <Link to='/'>APP LOGO</Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component='header' sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar variant='outlined' elevation={0} component='nav' sx={{ bgcolor: 'white' }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              fontWeight: '600',
              display: { xs: 'none', sm: 'block' },
              '& > *': { textDecoration: 'none', color: '#212529' },
              '&:hover > *': { textDecoration: 'none', color: '#555' },
              transition: '.2s ease-out',
            }}
          >
            <Link to='/'>APP LOGO</Link>
          </Typography>
          <Box
            component='ul'
            gap={2}
            sx={{ listStyle: 'none', display: { xs: 'none', sm: 'flex' } }}
          >
            {navItems.map((link, index) => (
              <Box
                key={link}
                component='li'
                size='large'
                sx={{
                  color: '#333',
                  '& > *': { color: '#333', textDecoration: "none", borderBottom: '2px solid transparent' },
                  fontSize: '1rem',
                  '&:hover > *': { textDecoration: "none", color: '#555', borderBottom: '2px solid #555' },
                  transition: '.2s ease-out',
                }}
              >
                <NavLink to={navLinks[index]}>{link}</NavLink>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
