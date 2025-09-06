//
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import Home from '../pages/Home';
import Bildung from '../pages/Bildung';
import Erfahrung from '../pages/Erfahrung';
import Fähigkeiten from '../pages/Fähigkeiten';
import Familie from '../pages/Familie';
import Kontakte from '../pages/Kontakte';

function App() {
  return (
    <Router>
      {/* flex контейнер для прижатия футера */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), #9c9c9c)',
        }}
      >
        <Header />

        {/* основной контент */}
        <Box component="main" sx={{ flex: 1, mt: 8, px: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bildung" element={<Bildung />} />
            <Route path="/erfahrung" element={<Erfahrung />} />
            <Route path="/fähigkeiten" element={<Fähigkeiten />} />
            <Route path="/familie" element={<Familie />} />
            <Route path="/kontakte" element={<Kontakte />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
