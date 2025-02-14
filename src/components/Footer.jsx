import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        p: 2,
        borderTop: '1px solid #ccc',
        mt: 4,
      }}
    >
      <Typography variant="body2">&copy; 2025 StakeBonuses. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;