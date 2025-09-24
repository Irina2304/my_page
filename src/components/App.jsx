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
// import Familie from '../pages/Familie';
import Kontakte from '../pages/Kontakte';

// Стили для декоративных кружков
const circleStyle = (size, color, top, left, bottom, right) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: color,
  zIndex: 0,
  top,
  left,
  bottom,
  right,
  pointerEvents: 'none', // кружки не мешают кликам и не влияют на scroll
});

function App() {
  return (
    <Router>
      {/* Flex контейнер для прижатия футера */}
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

        {/* Основной контент с кружками */}
        <Box
          component="main"
          sx={{
            flex: 1,
            mt: 8,
            px: 2,
            position: 'relative', // для абсолютного позиционирования кружков
            overflow: 'hidden', // чтобы кружки не создавали прокрутку
          }}
        >
          {/* Декоративные кружочки */}
          <Box sx={circleStyle(120, 'rgba(255,111,97,0.15)', '10%', '8%')} />
          <Box
            sx={circleStyle(
              180,
              'rgba(230,91,80,0.12)',
              '20%',
              undefined,
              undefined,
              '15%'
            )}
          />
          <Box
            sx={circleStyle(
              90,
              'rgba(255,111,97,0.1)',
              undefined,
              '20%',
              '25%'
            )}
          />
          <Box
            sx={circleStyle(
              140,
              'rgba(230,91,80,0.1)',
              undefined,
              undefined,
              '10%',
              '5%'
            )}
          />
          <Box sx={circleStyle(70, 'rgba(255,111,97,0.18)', '65%', '12%')} />
          <Box
            sx={circleStyle(
              200,
              'rgba(230,91,80,0.08)',
              undefined,
              undefined,
              '-50px',
              '-50px'
            )}
          />

          {/* Роутинг страниц */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bildung" element={<Bildung />} />
            <Route path="/erfahrung" element={<Erfahrung />} />
            <Route path="/fähigkeiten" element={<Fähigkeiten />} />
            {/* <Route path="/familie" element={<Familie />} /> */}
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
