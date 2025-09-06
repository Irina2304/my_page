//
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // получаем текущий путь

  const menuItems = [
    { path: '/', label: 'Startseite' },
    { path: '/fähigkeiten', label: 'Fähigkeiten' },
    { path: '/erfahrung', label: 'Erfahrung' },
    { path: '/bildung', label: 'Bildung' },
    { path: '/familie', label: 'Familie' },
    { path: '/kontakte', label: 'Kontakte' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(224,224,224,0.5)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Лого + имя */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Paper
              elevation={4}
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg,#555,#999)',
                cursor: 'pointer',
              }}
              onClick={() => handleNavigate('/')}
            >
              <Typography
                sx={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}
              >
                IK
              </Typography>
            </Paper>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 18,
                color: '#1a1a1a',
                cursor: 'pointer',
              }}
              onClick={() => handleNavigate('/')}
            >
              Iryna Kulyk
            </Typography>
          </Box>

          {/* Десктопное меню */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            {menuItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  sx={{
                    color: '#1a1a1a',
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '12px',
                    px: 2,
                    py: 1,
                    borderBottom: isActive
                      ? '3px solid #ff6f61'
                      : '3px solid transparent',
                    transition: 'border-bottom 0.3s',
                    '&:hover, &:focus': {
                      borderBottom: '3px solid #ff6f61',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
            <Button
              variant="contained"
              component="a"
              href={`${process.env.PUBLIC_URL}/Lebenslauf_Iryna_Kulyk.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                borderRadius: '12px',
                backgroundColor: '#ff6f61',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                '&:hover': { backgroundColor: '#e65b50' },
              }}
            >
              Lebenslauf
            </Button>
          </Box>

          {/* Мобильный бургер */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={() => setMobileOpen(true)}>
              <MenuIcon sx={{ color: '#1a1a1a' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        transitionDuration={400}
        PaperProps={{ sx: { width: 260, backgroundColor: '#fff' } }}
      >
        <Slide direction="left" in={mobileOpen} mountOnEnter unmountOnExit>
          <Box
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
              <IconButton onClick={() => setMobileOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List>
              {menuItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      onClick={() => handleNavigate(item.path)}
                      sx={{
                        borderLeft: isActive
                          ? '4px solid #ff6f61'
                          : '4px solid transparent',
                        transition: 'border-left 0.3s',
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href={`${process.env.PUBLIC_URL}/Lebenslauf_Iryna_Kulyk.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    borderRadius: '12px',
                    backgroundColor: '#ff6f61',
                    '&:hover': { backgroundColor: '#e65b50' },
                  }}
                >
                  Lebenslauf
                </Button>
              </ListItem>
            </List>
          </Box>
        </Slide>
      </Drawer>
    </>
  );
}
