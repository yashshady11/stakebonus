// src/pages/PostMonthlyCalculator.jsx
import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function calculateBonus(wager, status, vipLevel) {
  if (wager < 1) return 0;
  const X = vipLevel; // 1 for Bronze, 2 for Silver, etc.
  let bonus = 0;
  if (status === 'winner') {
    if (wager <= 1500) {
      bonus = 20 * X + 0.00083 * (wager - 1);
    } else if (wager <= 10000) {
      bonus = (20 * X + 1.25) + 0.00091 * (wager - 1500);
    } else {
      bonus = (20 * X + 8.99) + 0.000817 * (wager - 10000);
    }
  } else if (status === 'loser') {
    bonus = 20 * X + 0.0020 * (wager - 1);
  }
  return bonus;
}

function PostMonthlyCalculator() {
  const [profitLoss, setProfitLoss] = useState('winner');
  const [wager, setWager] = useState('');
  const [vipLevel, setVipLevel] = useState('Bronze');
  const [result, setResult] = useState(null);

  const vipMultiplier = (() => {
    switch (vipLevel) {
      case 'Bronze': return 1;
      case 'Silver': return 2;
      case 'Gold': return 3;
      case 'Platinum I': return 4;
      case 'Platinum II': return 5;
      case 'Platinum III': return 6;
      case 'Platinum IV': return 7;
      case 'Platinum V': return 8;
      case 'Platinum VI': return 9;
      case 'Diamond': return 10;
      default: return 1;
    }
  })();

  const handleToggle = (event, newValue) => {
    if (newValue !== null) setProfitLoss(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bonus = calculateBonus(parseFloat(wager), profitLoss, vipMultiplier);
    setResult(bonus.toFixed(2));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      {/* Calculator Form */}
      <Paper sx={{ p: 4, mb: 2 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Post-Monthly Bonus Calculator
        </Typography>
        <ToggleButtonGroup
          value={profitLoss}
          exclusive
          onChange={handleToggle}
          fullWidth
          sx={{ mb: 3 }}
        >
          <ToggleButton value="winner" sx={{ textTransform: 'none', borderRadius: 0 }}>
            WINNER
          </ToggleButton>
          <ToggleButton value="loser" sx={{ textTransform: 'none', borderRadius: 0 }}>
            LOSER
          </ToggleButton>
        </ToggleButtonGroup>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Enter your wager for the last 30 days"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={wager}
            onChange={(e) => setWager(e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Select VIP Level</InputLabel>
            <Select
              value={vipLevel}
              label="Select VIP Level"
              onChange={(e) => setVipLevel(e.target.value)}
            >
              <MenuItem value="Bronze">Bronze</MenuItem>
              <MenuItem value="Silver">Silver</MenuItem>
              <MenuItem value="Gold">Gold</MenuItem>
              <MenuItem value="Platinum I">Platinum I</MenuItem>
              <MenuItem value="Platinum II">Platinum II</MenuItem>
              <MenuItem value="Platinum III">Platinum III</MenuItem>
              <MenuItem value="Platinum IV">Platinum IV</MenuItem>
              <MenuItem value="Platinum V">Platinum V</MenuItem>
              <MenuItem value="Platinum VI">Platinum VI</MenuItem>
              <MenuItem value="Diamond">Diamond</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, textTransform: 'none' }}>
            Calculate
          </Button>
        </Box>
      </Paper>

      {result && (
        <Paper sx={{ p: 3, bgcolor: '#d0f0c0', mb: 2 }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            Your Calculated Post-Monthly Bonus is ${result}
          </Typography>
        </Paper>
      )}

      {/* SEO Content */}
      <Paper sx={{ p: 4, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          How to Calculate Stake.com’s Post-Monthly Bonus
        </Typography>
        <Typography variant="body1" paragraph>
          The post‑monthly bonus applies to wagers placed after the monthly cutoff. Although the exact formula is confidential, it is determined by factors including your VIP rank, the total wagered amount over the last 30 days, and your net profit or loss.
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="VIP Rank" secondary="Your VIP status determines the bonus multiplier." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Wagered Amount (Last 30 Days)" secondary="Your total wagered amount is essential." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Profit or Loss" secondary="Your net performance for the month is a key factor." />
          </ListItem>
          <ListItem>
            <ListItemText primary="House Edge" secondary="The inherent advantage of the games you play may also affect the bonus." />
          </ListItem>
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" gutterBottom>
          How the Post-Monthly Bonus Calculator Works
        </Typography>
        <Typography variant="body1" paragraph>
          Exclusively available to Stake VIP members, our calculator combines your wagering data and VIP status to estimate your bonus value.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Step-by-Step Instructions
        </Typography>
        <Typography variant="body1" paragraph>
          1. Enter your total wager for the last 30 days.
          <br />
          2. Toggle between “WINNER” and “LOSER.”
          <br />
          3. Select your VIP level.
          <br />
          4. Click “Calculate” to view your bonus estimate.
        </Typography>
      </Paper>

      <Typography variant="body2" color="textSecondary" align="center">
        Disclaimer: The calculated bonus figure is approximate and should be used as a general guide only. Actual bonus amounts may vary.
      </Typography>
    </Container>
  );
}

export default PostMonthlyCalculator;