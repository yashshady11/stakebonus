import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import WeeklyCalculator from './pages/WeeklyCalculator';
import MonthlyCalculator from './pages/MonthlyCalculator';
import PreMonthlyCalculator from './pages/PreMonthlyCalculator';
import PostMonthlyCalculator from './pages/PostMonthlyCalculator';

// Example black/white minimalist theme
const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: { main: '#000000' },
    text: { primary: '#000000', secondary: '#888888' },
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  typography: { fontFamily: 'Roboto, sans-serif' },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<WeeklyCalculator />} />
        <Route path="/monthly" element={<MonthlyCalculator />} />
        <Route path="/pre-monthly" element={<PreMonthlyCalculator />} />
        <Route path="/post-monthly" element={<PostMonthlyCalculator />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;