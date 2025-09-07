import React from 'react';
import { Box, Typography, Card, CardMedia, Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';

export default function Familie() {
  return (
    <Box
      component="section"
      id="family"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        {/* Заголовок */}
        <Box textAlign="center" mb={6}>
          <Box
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, mb: 2 }}
          >
            <Box
              sx={{ width: 6, height: 40, bgcolor: '#ff6f61', borderRadius: 2 }}
            />
            <Typography variant="h3" fontWeight={700}>
              Meine Familie
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={600}
            mx="auto"
          >
            Familie ist für mich die größte Quelle der Liebe, Inspiration und
            Stärke.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          {/* Фото коллаж */}
          <Box
            flex={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              position: 'relative',
            }}
          >
            {/* Верхний ряд: две карточки */}
            {/* <Box
              sx={{
                position: 'absolute',
                border: '4px solid #ff6f61',
                width: 360,
                height: 400,
                transform: 'rotate(-2deg)',
                top: '-25px',
                left: '-20px',
                borderRadius: '15px',
              }}
            /> */}
            {/* <Box
              sx={{
                position: 'absolute',
                border: '4px solid #ff6f61',
                width: 360,
                height: 400,
                transform: 'rotate(-2deg)',
                top: '-25px',
                left: '-20px',
                borderRadius: '15px',
              }}
            /> */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                position: 'relative',
              }}
            >
              {/* <Box
                sx={{
                  position: 'absolute',
                  border: '4px solid #ff6f61',
                  width: 360,
                  height: 400,
                  transform: 'rotate(-2deg)',
                  top: '-25px',
                  left: '-20px',
                  borderRadius: '15px',
                }}
              /> */}
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  width: 320,
                  height: 360,
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(-2deg) scale(1.05)',
                    boxShadow: 6,
                    zIndex: 10,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  loading="lazy"
                  src={`${process.env.PUBLIC_URL}/foto/familie_1.webp`}
                  alt="Familie Bild 1"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>

              <Card
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  width: 320,
                  height: 360,
                  transform: 'rotate(2deg)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(2deg) scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  loading="lazy"
                  src={`${process.env.PUBLIC_URL}/foto/familie_2.webp`}
                  alt="Familie Bild 2"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
            </Box>
            {/* Нижняя карточка */}
            <Card
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
                width: 360,
                height: 320,
                transform: 'rotate(-1.5deg)',
                mt: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'rotate(-1.5deg) scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                loading="lazy"
                src={`${process.env.PUBLIC_URL}/foto/familie_3.webp`}
                alt="Familie Bild 3"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Card>
          </Box>

          {/* Текст */}
          <Box flex={1} display="flex" flexDirection="column" gap={4}>
            <Typography variant="h5" fontWeight={600}>
              Familie – das Herzstück meines Lebens
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
              Meine Familie gibt mir Halt, Kraft und Motivation. Dank ihr habe
              ich gelernt, Balance zwischen Arbeit und Privatleben zu schätzen,
              Ziele beharrlich zu verfolgen und in schwierigen Momenten niemals
              aufzugeben.
            </Typography>

            {/* Ценности */}
            <Box display="flex" flexDirection="column" gap={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'red.100' }}>
                  <FavoriteIcon color="error" />
                </Avatar>
                <Box>
                  <Typography fontWeight={600}>
                    Liebe & Unterstützung
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bedingungslose Liebe und gegenseitige Unterstützung.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'orange.100' }}>
                  <HomeIcon color="warning" />
                </Avatar>
                <Box>
                  <Typography fontWeight={600}>
                    Ein gemütliches Zuhause
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ein Ort der Geborgenheit und des Verständnisses.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'blue.100' }}>
                  <GroupIcon color="primary" />
                </Avatar>
                <Box>
                  <Typography fontWeight={600}>Gemeinsame Werte</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gemeinsame Prinzipien und Ziele, die uns verbinden.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
