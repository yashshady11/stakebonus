// src/pages/Home.jsx
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* HERO SECTION */}
      <Paper
        elevation={6}
        sx={{
          p: 6,
          mb: 4,
          backgroundImage: 'url(/images/hero.jpg)', // Replace with your hero image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'center',
          borderRadius: 2,
          position: 'relative',
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: 2,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(1,0,0,0.8)' }}
          >
            StakeBonuses – The Ultimate Stake Bonus Calculator
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
          >
            Calculate Stake Bonus, Stake Weekly Bonus, Stake Monthly Bonus, Stake Pre‑Monthly Bonus, and Stake Post‑Monthly Bonus instantly.
          </Typography>
          {/* CTA Buttons for Calculators */}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/weekly"
              sx={{ m: 1, textTransform: 'none' }}
            >
              Calculate Stake Weekly Bonus
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/monthly"
              sx={{ m: 1, textTransform: 'none' }}
            >
              Calculate Stake Monthly Bonus
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/pre-monthly"
              sx={{ m: 1, textTransform: 'none' }}
            >
              Calculate Stake Pre Monthly Bonus
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/post-monthly"
              sx={{ m: 1, textTransform: 'none' }}
            >
              Calculate Stake Post Monthly Bonus
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* INTRODUCTION & OVERVIEW */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome to StakeBonuses – Your Trusted Stake VIP Bonus Calculator
        </Typography>
        <Typography variant="body1" paragraph>
          StakeBonuses is an innovative online tool designed exclusively for Stake VIP members. Our advanced calculator enables you to accurately estimate your bonus by considering your wagered amount, profit or loss, and VIP status. Whether you need to <strong>calculate stake bonus</strong>, <strong>calculate stake weekly bonus</strong>, <strong>calculate stake monthly bonus</strong>, <strong>calculate stake pre monthly bonus</strong>, or <strong>calculate stake post monthly bonus</strong>, our tool delivers reliable results.
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform simplifies complex bonus calculations so you can focus on maximizing your rewards. With step‑by‑step guides, detailed insights, and a user‑friendly design, StakeBonuses is your ultimate resource for unlocking the full potential of your Stake VIP bonus.
        </Typography>
      </Paper>

      {/* FEATURES & BENEFITS SECTION */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Features and Benefits of StakeBonuses
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Accurate Bonus Calculations
              </Typography>
              <Typography variant="body2">
                Our proprietary formula uses in‑depth research to factor in your VIP rank, wagered amounts, and profit or loss, ensuring that you get a near‑accurate bonus estimate every time.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                User‑Friendly and Responsive Design
              </Typography>
              <Typography variant="body2">
                Built on Material UI, StakeBonuses offers a sleek, modern interface that works seamlessly on both desktop and mobile devices.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Comprehensive Data Analysis
              </Typography>
              <Typography variant="body2">
                Our tool provides detailed insights into how factors such as VIP status, wagered amount, and net profit or loss affect your bonus.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                SEO‑Optimized Information Hub
              </Typography>
              <Typography variant="body2">
                Our website is filled with expert guides, FAQs, and bonus strategies, making it the top resource for those looking to <strong>calculate stake bonus</strong> accurately.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* HOW IT WORKS SECTION */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          How the StakeBonuses Calculator Works
        </Typography>
        <Typography variant="body1" paragraph>
          Our calculator estimates your bonus based on key factors such as:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="VIP Rank"
              secondary="Your current VIP status (from Bronze to Diamond) determines your bonus multiplier."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Wagered Amount"
              secondary="Your total wager for the past 7 days (weekly) or 30 days (monthly, pre‑monthly, post‑monthly) significantly influences your bonus."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Profit or Loss"
              secondary="Your net profit or loss over the specified period is a crucial input."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="House Edge"
              secondary="The inherent advantage of the games you play may also be factored into your bonus."
            />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          Although the exact formula is proprietary, our calculator provides an accurate bonus estimate to help you plan your wagering strategy effectively.
        </Typography>
      </Paper>

      {/* STEP‑BY‑STEP GUIDE */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Step‑by‑Step Guide to Calculating Your Stake Bonus
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Step 1:</strong> Gather accurate records of your deposits, wagers, and profit/loss for the last 7 or 30 days.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Step 2:</strong> Enter your total wager in the appropriate calculator.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Step 3:</strong> Toggle between “Profit” and “Loss” and enter the correct figure.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Step 4:</strong> Select your VIP status from the drop‑down menu.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Step 5:</strong> Click “Calculate” to instantly see your bonus estimate.
        </Typography>
      </Paper>

      {/* VIP LEVELS EXPLAINED */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Understanding Stake VIP Levels
        </Typography>
        <Typography variant="body1" paragraph>
          Your VIP level is crucial in determining your bonus. Stake categorizes its players as:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Bronze" secondary="Entry‑level status with basic bonus multipliers." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Silver" secondary="An upgrade from Bronze with enhanced bonus potential." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Gold" secondary="A mid‑tier level offering greater rewards." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Platinum I – VI" secondary="A series of elite tiers with progressively higher bonus multipliers." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Diamond" secondary="The highest VIP status, providing maximum bonus potential and exclusive benefits." />
          </ListItem>
        </List>
      </Paper>

      {/* USER TESTIMONIALS */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, backgroundColor: '#f7f7f7' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          What Our Users Say About StakeBonuses
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="body1" gutterBottom>
                "StakeBonuses has revolutionized my gaming strategy. I can now easily calculate my stake bonus whether it's weekly or monthly!"
              </Typography>
              <Typography variant="subtitle2" align="right">
                – Alex P.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="body1" gutterBottom>
                "The step‑by‑step guide and detailed explanations make it simple to calculate my stake bonus. Highly recommended!"
              </Typography>
              <Typography variant="subtitle2" align="right">
                – Jamie L.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* BLOG & NEWS SECTION */}
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Latest News & Insights on Stake Bonuses
        </Typography>
        <Typography variant="body1" paragraph>
          Stay updated with exclusive strategies, bonus promotions, and expert tips on how to calculate stake bonus effectively. Our blog is your go‑to resource for all things related to Stake VIP bonuses.
        </Typography>
        <Button variant="outlined" color="primary" component={Link} to="/blog" sx={{ textTransform: 'none' }}>
          Read Our Blog
        </Button>
      </Paper>

      {/* FINAL CALL TO ACTION */}
      <Paper elevation={6} sx={{ p: 4, textAlign: 'center', backgroundColor: '#e8491d', color: '#fff' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Unlock Your Full Bonus Potential?
        </Typography>
        <Typography variant="body1" paragraph>
          Don’t wait! Use our StakeBonuses calculator now to <strong>calculate stake bonus</strong>, <strong>calculate stake weekly bonus</strong>, <strong>calculate stake monthly bonus</strong>, <strong>calculate stake pre monthly bonus</strong>, and <strong>calculate stake post monthly bonus</strong>. Maximize your rewards and take your gaming strategy to the next level!
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="inherit" size="large" component={Link} to="/weekly" sx={{ m: 1, textTransform: 'none' }}>
            Calculate Stake Weekly Bonus
          </Button>
          <Button variant="contained" color="inherit" size="large" component={Link} to="/monthly" sx={{ m: 1, textTransform: 'none' }}>
            Calculate Stake Monthly Bonus
          </Button>
          <Button variant="contained" color="inherit" size="large" component={Link} to="/pre-monthly" sx={{ m: 1, textTransform: 'none' }}>
            Calculate Stake Pre Monthly Bonus
          </Button>
          <Button variant="contained" color="inherit" size="large" component={Link} to="/post-monthly" sx={{ m: 1, textTransform: 'none' }}>
            Calculate Stake Post Monthly Bonus
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;