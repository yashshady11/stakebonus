import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Weekly', path: '/weekly' },
    { label: 'Monthly', path: '/monthly' },
    { label: 'Pre-Monthly', path: '/pre-monthly' },
    { label: 'Post-Monthly', path: '/post-monthly' },
  ];

  return (
    <AppBar position="static" color="inherit" sx={{ boxShadow: 'none' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          StakeBonus
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? 'black' : 'gray',
                textDecoration: 'none',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;