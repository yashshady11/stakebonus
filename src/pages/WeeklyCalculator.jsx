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

function calculateWeeklyBonus(wager, status, vipMultiplier) {
  if (wager < 1) return 0;
  const base = 20 * vipMultiplier;
  let A, B;
  if (status === 'winner') {
    A = 0.001264;
    B = 0.95;
  } else {
    A = 0.0020;
    B = 1.0;
  }
  return base + A * (Math.pow(wager, B) - 1);
}

function WeeklyCalculator() {
  const [profitLoss, setProfitLoss] = useState('winner'); // "winner" or "loser"
  const [wager, setWager] = useState('');
  const [vipLevel, setVipLevel] = useState('Bronze'); // String: "Bronze", "Silver", etc.
  const [result, setResult] = useState(null);

  // Convert VIP level string to multiplier (Bronze = 1, Silver = 2, etc.)
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
    const bonus = calculateWeeklyBonus(parseFloat(wager), profitLoss, vipMultiplier);
    setResult(bonus.toFixed(2));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      {/* Calculator Form */}
      <Paper sx={{ p: 4, mb: 2 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Weekly Bonus Calculator
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
            label="Enter your wager for the last 7 days"
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
            Your Calculated Weekly Bonus is ${result}
          </Typography>
        </Paper>
      )}

      <Paper sx={{ p: 4, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          How to Calculate Stake.com’s Weekly Bonus
        </Typography>
        <Typography variant="body1" paragraph>
          Stake’s weekly bonus rewards active players based on several key factors: your VIP rank, the total wagered amount over the last 7 days, and your net profit or loss. Although the exact bonus algorithm is confidential, our calculator uses a formula of the form:
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
          Bonus = base + A × (wager<sup>B</sup> – 1)
        </Typography>
        <Typography variant="body1" paragraph>
          For winners, the base bonus is 20 times your VIP multiplier, and for losers it is the same—but with a higher multiplier on the wager. Adjust your data accordingly, and note that the result is an approximation.
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" gutterBottom>
          Step-by-Step Guide
        </Typography>
        <Typography variant="body1" paragraph>
          1. Enter the total amount wagered in the last 7 days.
          <br />
          2. Select “WINNER” or “LOSER” based on your result.
          <br />
          3. Choose your VIP level.
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

export default WeeklyCalculator;